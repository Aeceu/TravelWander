import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import AuthRoutes from "./routes/AuthRoutes";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://travel-wander.vercel.app",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/v1", AuthRoutes);

const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Listening to port:${PORT}`);
});
