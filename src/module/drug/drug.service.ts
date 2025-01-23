import isError from "../../utils/handle.error";
import { iDrug } from "../../types/drug";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });



export default class DrugService {
    static async drugInteractions(data:iDrug) {

      try {

        const result = await groq.chat.completions.create({
          messages: [
            {
              role: "system",
              content: `From the list of drugs I provided ${Object.entries(data).filter(([key, value]) => key.startsWith('drug') && value !== undefined && value !== null).map(([_, value]) => value).join(', ')}, is there any dangerous interaction between the drugs if consumed together? Output in JSON format which contains an array of objects with 'interaction', 'impact', 'dangerous(true/false)', without any other words.`,
            },
          ],
          model: "llama-3.3-70b-versatile",
          temperature : 0.5, 
          max_tokens :2000,  
          response_format :{"type": "json_object"},
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
