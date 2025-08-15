"use server"

import { apiUrl } from "@/lib/config"
import { SupplierInput } from "@/lib/schema/supplier-schema"
import { revalidateTag } from "next/cache"

const addSupplier = async (data: SupplierInput) => {
    try {
        const res = await fetch(`${apiUrl}/api/v1/suppliers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await res.json()
        if (!res.ok) {
            throw new Error(result.message)
        }
        revalidateTag("suppliers")

        return { success: true, message: result.message || "supplier added successfully" }

    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error.message }
        }
        return { success: false, error: "Something went wrong" }
    }
}


export default addSupplier