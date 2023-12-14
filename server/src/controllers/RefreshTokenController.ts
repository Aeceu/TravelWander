import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { HandleAccessToken } from "../utils/createToken";
import { TUser } from "../types";

const prisma = new PrismaClient();

export const handleRefreshToken = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  const foundUser: TUser = await prisma.user.findFirst({
    where: {
      refreshToken,
    },
  });

  if (!foundUser) return res.sendStatus(403);

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET!,
    (err: any, decoded: any) => {
      if (err || foundUser.email !== decoded.userdata.email)
        return res.sendStatus(403);
      const accessToken = HandleAccessToken({
        userdata: {
          id: foundUser.id,
          email: foundUser.email,
          role: foundUser.role,
        },
        key: process.env.ACCESS_TOKEN_SECRET!,
      });
      delete foundUser["password"];
      res.json({ user: foundUser, accessToken });
    }
  );
};
