import { z } from 'zod'
export const OrderDetails = z.object({
    name: z.string(),
    address: z.string(),
    phone: z.string(),
})
export type OrderDetails = z.infer<typeof OrderDetails>
