import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB";

dotenv.config();
const app = express();
app.use(express.json);

const PORT = process.env.PORT || 5000;
connectDb();
app.listen(PORT, () => {
  console.log(`Server is listening at  port ${PORT}`);
});
