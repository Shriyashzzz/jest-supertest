import express from "express";
import { indexRouter } from "./routes/indexRouter";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

export default app;
