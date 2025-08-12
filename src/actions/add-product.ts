"use server"

import { apiUrl } from "@/lib/config"
import { ProductInput, productSchema } from "@/lib/schema"
import { revalidateTag } from "next/cache"



const addProduct = async (data: ProductInput) => {
    const result = productSchema.safeParse(
        data
    )
    if (!result.success) {
        return { success: false, error: result.error.issues }  // Always an array
    }


    try {
        const res = await fetch(`${apiUrl}/api/v1/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await res.json()
        if (!res.ok) {
            if (result.success == false)
                return { success: false, error: result.message }
        }

        revalidateTag("products")

        return { success: true, message: "product created successfully" }

    } catch (error: unknown) {
        if (error instanceof Error) {
            return { success: false, error: error.message }
        }

        return { success: false, error: "Something went wrong" }
    }
}

export default addProduct