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
exports.handleRefreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const createToken_1 = require("../utils/createToken");
const prisma = new client_1.PrismaClient();
const handleRefreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cookies = req.cookies;
    if (!(cookies === null || cookies === void 0 ? void 0 : cookies.jwt))
        return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    const foundUser = yield prisma.user.findFirst({
        where: {
            refreshToken,
        },
    });
    if (!foundUser)
        return res.sendStatus(403);
    jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err || foundUser.email !== decoded.email)
            return res.sendStatus(403);
        const accessToken = (0, createToken_1.HandleAccessToken)({
            userdata: {
                id: foundUser.id,
                email: foundUser.email,
                role: foundUser.role,
            },
            key: process.env.ACCESS_TOKEN_SECRET,
        });
        res.json({ role: foundUser.role, accessToken });
    });
});
exports.handleRefreshToken = handleRefreshToken;
