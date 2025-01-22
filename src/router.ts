import { Router  } from "express";
import auth from "./module/auth/auth.controller";
import symptom from "./module/symptom/symptom.controller";
import disease from "./module/disease/disease.controller";

const router: Router = Router();

router.use("/", auth);
router.use("/", symptom);
router.use("/", disease);


export default router