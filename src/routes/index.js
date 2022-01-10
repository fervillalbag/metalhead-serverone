import { Router } from "express";
import TaskModel from "../models/task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await TaskModel.find().lean();
  res.render("index", { tasks });
});

router.post("/tasks/add", async (req, res) => {
  console.log(req.body);

  const newTask = new TaskModel(req.body);
  await newTask.save();

  res.redirect("/");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;
