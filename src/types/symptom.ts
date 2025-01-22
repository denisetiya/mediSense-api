import {z} from 'zod';

export const symptomSchema = z.object({
    description: z.string().min(10),
    history: z.string().min(3).optional(),
})

export type iSymptom = z.infer<typeof symptomSchema>