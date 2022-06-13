import { Router } from "express";
import {
  deleteTask,
  renderTask,
  renderTaskEdit,
  taskToogleDone,
  updateTask,
} from "../controllers/task.controller";
import { createTask } from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/task/add", createTask);

router.get("/task/:id/toogleDone", taskToogleDone);

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", updateTask);

router.get("/task/:id/delete", deleteTask);



export default router;
