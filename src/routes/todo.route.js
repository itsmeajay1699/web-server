

import { Router } from "express";
import { TodoController } from "../controllers/todo.controller.js";
const todoRouter = Router();

todoRouter.get('/', TodoController.getTodos);
todoRouter.post('/', TodoController.createTodo);


export { todoRouter };