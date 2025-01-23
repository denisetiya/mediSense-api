import DrugService from "./drug.service";
import {Router, Response, Request} from "express";
import response from "../../utils/response.api";
import { iDrug, drugSchema } from "../../types/drug";
import handleValidationError from "../../utils/handle.error.validation";

const drug: Router = Router();

drug.post("/drug/interactions", async(req: Request, res: Response) => {
    const data:iDrug = req.body;

    const validateData = drugSchema.safeParse(data);

    if (!validateData.success) {
        return handleValidationError(validateData, res, {
            guide: "you need to input at least 2 drugs"
        });
    }

    try {
        const result = await DrugService.drugInteractions(data);
        return response(res, 200, "Success", null, result);
    } catch (error:any) {
        return response(res, error.status, 'failed get analytics',  error.message,)
    }
})


export default drug