import { Router } from "express";
import apiRouter from "./api/apiIndexRoutes";

const indexRouter = Router();

indexRouter.use('/api' , apiRouter);


export default indexRouter;