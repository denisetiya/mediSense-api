import { Router  } from "express";
import auth from "./module/auth/auth.controller";

const router: Router = Router();

router.use("/", auth);

export default router