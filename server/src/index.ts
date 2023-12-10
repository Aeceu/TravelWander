import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import AuthRoutes from "./routes/AuthRoutes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.76.139:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/v1", AuthRoutes);

const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Listening to port:${PORT}`);
});
