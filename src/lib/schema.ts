// /lib/validation/productSchema.ts
import { z } from "zod";

export const productSchema = z.object({
    name: z
        .string().trim()
        .min(3, "Name must be at least 3 characters long")
        .max(200, "Name must be less than 200 characters"),
    description: z
        .string()
        .min(10, "Description must be at least 10 characters")
        .max(1000, "Description must be less than 1000 characters"),
    alertQty: z
        .number("must be number")
        .int("Alert quantity must be an integer")
        .min(0, "Alert quantity cannot be negative"),
    stockQty: z
        .number("must be number")
        .int("Stock quantity must be an integer")
        .min(0, "Stock quantity cannot be negative"),
    buyingPrice: z
        .number("must be number")
        .min(0, "Buying price cannot be negative"),
    productCode: z
        .string()
        .min(1, "required*")
        .max(100, "Product code must be less than 100 characters"),
    sku: z
        .string()
        .min(1, "required*")
        .max(50, "SKU must be less than 50 characters"),
    supplierId: z
        .string()
        .regex(/^[0-9a-fA-F]{24}$/, "Invalid supplier ID"),
    unitId: z
        .string()
        .regex(/^[0-9a-fA-F]{24}$/, "Invalid unit ID"),
    brandId: z
        .string()
        .regex(/^[0-9a-fA-F]{24}$/, "Invalid brand ID"),
    categoryId: z
        .string()
        .regex(/^[0-9a-fA-F]{24}$/, "Invalid category ID"),
});


export type ProductInput = z.infer<typeof productSchema>;