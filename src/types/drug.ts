import {z} from 'zod';

export const drugSchema = z.object({
    drug1: z.string().min(3),
    drug2: z.string().min(3),
    drug3: z.string().min(3).optional(),
    drug4: z.string().min(3).optional(),
    drug5: z.string().min(3).optional(),
    drug6: z.string().min(3).optional(),
    drug7: z.string().min(3).optional(),
    drug8: z.string().min(3).optional(),
    drug9: z.string().min(3).optional(),
    drug10: z.string().min(3).optional(),
    drug11: z.string().min(3).optional(),
    drug12: z.string().min(3).optional(),
    drug13: z.string().min(3).optional(),
    drug14: z.string().min(3).optional(),
    drug15: z.string().min(3).optional(),
    drug16: z.string().min(3).optional(),
})


export type iDrug = z.infer<typeof drugSchema>