import {z} from 'zod';

export const deseaseSchema = z.object({
    name: z.string().min(10),
    history: z.string().min(3).optional(),
})

export type iDesease = z.infer<typeof deseaseSchema>