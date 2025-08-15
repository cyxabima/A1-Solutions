import { z } from "zod"

export const SupplierSchema = z.object({
    supplierType: z.string().min(1, "Supplier type is required"),
    name: z.string().min(1, "Name is required"),
    contactPerson: z.string().min(1, "Contact person is required"),
    phone: z.string().min(5, "Phone number is required"),
    email: z.email("Invalid email").optional().or(z.literal("")),
    location: z.string().min(1, "Location is required"),
    country: z.string().min(1, "Country is required"),
    website: z.url("Invalid website URL").optional().or(z.literal("")),
    taxPin: z.string().optional().or(z.literal("")),
    registrationNumber: z.string().optional().or(z.literal("")),
    bankAccountNumber: z.string().optional().or(z.literal("")),
    bankName: z.string().optional().or(z.literal("")),
    paymentTerms: z.string().optional().or(z.literal("")),
    rating: z.number().min(0).max(5).optional(),
    notes: z.string().optional().or(z.literal(""))
})

export type SupplierInput = z.infer<typeof SupplierSchema>
