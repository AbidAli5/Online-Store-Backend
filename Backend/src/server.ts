import express, { Router } from "express";
import cors from "cors";
import { Sample_Food, Sample_Users, Sample_tags } from "./data";
import jwt from "jsonwebtoken";
import foodRouter from './router/food.router';
import userRouter from './router/user.router';
import dotenv from 'dotenv';
dotenv.config();

import {dbConnect} from './configs/database.config'
dbConnect();

const app = express();
app.use(express.json());
const port = 5000;
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.use("/api/foods",foodRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("Website is served on http://localhost:" + port);
});
