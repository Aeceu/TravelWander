"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.signup = exports.login = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createToken_1 = require("../utils/createToken");
const prisma = new client_1.PrismaClient();
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Please fill up the missing information");
        }
        const user = yield prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            return res.status(400).send("User doesn't exists!");
        }
        const validPass = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        if (!validPass) {
            return res.status(400).send("Incorrect password!");
        }
        const userdata = {
            id: user.id,
            role: user.role,
            email: user.email,
        };
        //* access token
        const accessToken = (0, createToken_1.HandleAccessToken)({
            userdata,
            key: process.env.ACCESS_TOKEN_SECRET,
        });
        //* refresh token
        const refreshToken = (0, createToken_1.HandleRefreshToken)({
            userdata,
            key: process.env.REFRESH_TOKEN_SECRET,
        });
        //* saves the refresh token to the current user
        yield prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                refreshToken: refreshToken,
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
    }
    catch (error) {
        res.sendStatus(500).send("Failed to login!");
    }
});
exports.login = login;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, password } = req.body;
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).send("Please fill up the missing information!");
        }
        const user = yield prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (user) {
            return res.status(400).send("User already exists!");
        }
        const hashPass = yield bcrypt_1.default.hash(password, 12);
        yield prisma.user.create({
            data: {
                email,
                firstname,
                lastname,
                password: hashPass,
            },
        });
        res.status(200).send("User created successfully!");
    }
    catch (error) {
        res.sendStatus(500);
    }
});
exports.signup = signup;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cookies = req.cookies;
    if (!(cookies === null || cookies === void 0 ? void 0 : cookies.jwt))
        return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;
    //* Is refreshToken in db?
    const foundUser = yield prisma.user.findFirst({
        where: {
            refreshToken: refreshToken,
        },
    });
    if (!foundUser) {
        res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
        return res.sendStatus(204);
    }
    //* Delete refreshToken in db
    yield prisma.user.update({
        where: {
            id: foundUser.id,
        },
        data: {
            refreshToken: "",
        },
    });
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    res.sendStatus(204);
});
exports.logout = logout;
