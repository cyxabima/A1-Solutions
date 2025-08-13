import { email, z } from 'zod'

export const CustomerSchema = z.object({
    firstName: z.
        string().trim()
        .min(3, "First name must be at least 3 characters long")
        .max(200, "First name must be less than 200 characters"),
    lastName: z.
        string().trim()
        .min(3, "Last name must be at least 3 characters long")
        .max(200, "Last name must be less than 200 characters"),
    gender: z.
        enum(["MALE", "FEMALE"], "Gender must be correct"),
    customerType: z.enum([
        "RETAIL",
        "WHOLESALE",
        "DISTRIBUTOR",
        "PROJECT_BASED",
        "SERVICE_BASED",
        "OTHER"], "Customer Type is incorrect"),
    phone: z.
        string().
        regex(/^\+92\d{10}$/, 'Invalid phone number!'),
    email: z.
        email({ error: 'Invalid Email' }).optional(),
    country: z.
        string()
        .min(3, "Country name must be at least 3 characters long")
        .max(100, "Country name must be less than 100 characters"),
    location: z.
        string()
        .min(3, "location must be at least 3 characters long")
        .max(200, "location must be less than 200 characters"),
    maxCreditLimit: z.
        number().
        gte(0, "Credit Amount must be non negative"),
    maxCreditDays: z.
        number().
        int().
        gte(0, "Days must be non negative"),
    unpaidCreditAmount: z.
        number().
        gte(0, "Unpaid Amount must be non negative")
})

export type CustomerInput = z.infer<typeof CustomerSchema>