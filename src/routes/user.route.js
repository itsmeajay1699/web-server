

import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/get-user', UserController.getUser);

userRouter.post('/create-user', UserController.createUser);

export { userRouter };