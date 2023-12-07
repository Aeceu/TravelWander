import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { TUser } from "../types";
import { HandleAccessToken, HandleRefreshToken } from "../utils/createToken";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Please fill up the missing information");
    }
    const user: TUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(400).send("User doesn't exists!");
    }

    const validPass = await bcrypt.compare(password, user?.password!);
    if (!validPass) {
      return res.status(400).send("Incorrect password!");
    }

    const userdata = {
      id: user.id,
      role: user.role,
      email: user.email,
    };

    //* access token
    const accessToken = HandleAccessToken({
      userdata,
      key: process.env.ACCESS_TOKEN_SECRET!,
    });

    //* refresh token
    const refreshToken = HandleRefreshToken({
      userdata,
      key: process.env.REFRESH_TOKEN_SECRET!,
    });

    //* saves the refresh token to the current user
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    delete user["password"];

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "User authenticated!",
      user,
      accessToken,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Failed to login!");
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).send("Please fill up the missing information!");
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(400).send("User already exists!");
    }

    const hashPass = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: {
        email,
        firstname,
        lastname,
        password: hashPass,
      },
    });

    res.status(200).send("User created successfully!");
  } catch (error) {
    res.status(500);
  }
};

export const logout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  //* Is refreshToken in db?
  const foundUser = await prisma.user.findFirst({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    return res.sendStatus(204);
  }

  //* Delete refreshToken in db
  await prisma.user.update({
    where: {
      id: foundUser.id,
    },
    data: {
      refreshToken: null,
    },
  });

  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  res.status(204);
  res.clearCookie("jwt");
  res.send("cookie removed");
};
