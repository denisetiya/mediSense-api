import { Router, Request, Response } from "express";
import DiseaseService from "./disease.service";
import response from "../../utils/response.api";
import { iDesease, deseaseSchema } from "../../types/disease";
import handleValidationError from "../../utils/handle.error.validation";

const disease: Router = Router();


disease.post("/disease/drug", async(req: Request, res: Response) => {
    const data:iDesease = req.body;

    const validateData = deseaseSchema.safeParse(data);

    if (!validateData.success) {
        return handleValidationError(validateData, res);
    }

    try {
        const result = await DiseaseService.getDiseaseDrug(data);
        return response(res, 200, "Success", null, result,
            data.history ? {
                tips: "if your disease is severe, you should go directly to the doctor and consult your complaints"
            } : {
                tips: "you can cross-check this drug with the nearest doctor",
                guide: "be careful with the use of strong drugs, you need a doctor's recommendation to consume them"
            }
         );
    } catch (error:any) {
        return response(res, error.status, 'failed get analytics',  error.message,)
    }
})

disease.get('/disease/lookup/:name', async(req : Request, res : Response) => {

    const name = req.params.name

    if (!name){ return response(res, 400, "failed get data", "you need insert name of desease in disease/drug/:name")}

    try {

        const result = await DiseaseService.getDiseaseInformation(name)
        return response(res,200, "Success", null, result,
            {
                tips : "Always remember, a healthy life is the best way to prevent any diseases, keep your body healthy by doing regular exercise, eating healthy food, and getting enough rest"
            }
        )
    } catch (error) {
        
    }
})


export default disease