
import { userRouter } from "./user.route.js";
import { todoRouter } from "./todo.route.js";

import { Router } from "express";

const indexRouter = Router();

indexRouter.use('/user', userRouter);
indexRouter.use('/todo', todoRouter);

export { indexRouter };
