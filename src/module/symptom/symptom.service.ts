import isError from "../../utils/handle.error";
import { iSymptom } from "../../types/symptom";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });



export default class SymptomService {
    static async getAnalytics(data:iSymptom) {

      try {

        const result = await groq.chat.completions.create({
          messages: [
            {
              role: "system",
              content: `Give 3 diagnosis from symptom ${data.description} with medical history ${data.history} closest to ICD-10 code and disease name in JSON format. The output format must be an array of objects with 'code' and 'name' without any other words `
            },
          ],
          model: "llama-3.3-70b-versatile",
          temperature : 0.5, 
          max_tokens :100,  
        });

      if (!result) {
          throw isError({ status: 400, message: "failed get analytics" });
      }

      const content = result.choices[0]?.message.content

      if (content) {
        try {
          const jsonData = JSON.parse(content);
          return jsonData;
        } catch (error) {
          console.error("Error parsing JSON:", error);
          return null; 
        }
      } else {
        return null;
      }
              
      } catch (error) {
        console.log(error);
        return isError(error);   
      }

    }
}
