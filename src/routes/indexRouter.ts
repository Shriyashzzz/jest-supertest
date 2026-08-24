import { Router } from "express";

export const indexRouter = Router({ mergeParams: true });

const array: Array<string> = [];

indexRouter.get("/", (req, res) => {
  res.json({ name: "frodo" });
});

indexRouter.get("/test", (req, res) => res.json({ array }));

indexRouter.post("/test", (req, res) => {
  array.push(req.body.item);
  res.send("success!");
});
