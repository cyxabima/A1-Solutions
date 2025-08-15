"use server"

import { apiUrl } from "@/lib/config"
import { CustomerInput } from "@/lib/schema/customer-schema"
import { revalidateTag } from "next/cache"

const addCustomer = async (data: CustomerInput) => {
    try {

        const res = await fetch(`${apiUrl}/api/v1/customers`, {
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
        revalidateTag("customers")

        return { success: true, message: result.message || "Customer Added Successfully" }
    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error.message || "Something went wrong" }

        }
        return { success: false, error: "Something went wrong" }
    }
}

export default addCustomer