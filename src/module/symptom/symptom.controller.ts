import { Router, Request, Response } from "express";
import SymptomService from "./symptom.service";
import response from "../../utils/response.api";
import { iSymptom, symptomSchema } from "../../types/symptom";
import handleValidationError from "../../utils/handle.error.validation";

const symptom: Router = Router();

symptom.post("/symptom", async(req: Request, res: Response) => {
    const data: iSymptom = req.body;

    const validateData = symptomSchema.safeParse(data);

    if (!validateData.success) {
        return handleValidationError(validateData, res);
    }

    try {
        const result = await SymptomService.getAnalytics(data);
        return response(res, 200, "Success", null, result,
            data.history? {
                tips : "you can find drug recommendation in /disease/drug"
            } : {
                tips : "you can find drug recommendation in /disease/drug",
                guide : "if you want more accurate answer, please add medical history in field history"
            } 
         );
    } catch (error:any) {
        return response(res, error.status, 'failed get analytics',  error.message,)
    }
})

export default symptom