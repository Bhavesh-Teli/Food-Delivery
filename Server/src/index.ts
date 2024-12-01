import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB";
import userRoutes from "./routes/user.routes";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
connectDb();
app.listen(PORT, () => {
  console.log(`Server is listening at  port ${PORT}`);
});
