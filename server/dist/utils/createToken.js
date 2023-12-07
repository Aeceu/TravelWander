"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleRefreshToken = exports.HandleAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HandleAccessToken = ({ userdata, key }) => {
    const token = jsonwebtoken_1.default.sign({
        userdata: {
            id: userdata.id,
            role: userdata.role,
            email: userdata.email,
        },
    }, key, {
        expiresIn: "10s",
    });
    return token;
};
exports.HandleAccessToken = HandleAccessToken;
const HandleRefreshToken = ({ userdata, key }) => {
    const token = jsonwebtoken_1.default.sign({
        userdata: {
            id: userdata.id,
            role: userdata.role,
            email: userdata.email,
        },
    }, key, {
        expiresIn: "1d",
    });
    return token;
};
exports.HandleRefreshToken = HandleRefreshToken;
