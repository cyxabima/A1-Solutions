"use server"

import { apiUrl } from "@/lib/config"
import { generateSlug } from "@/lib/utils"
import { revalidateTag } from "next/cache"
import { z } from 'zod'

type AddNewState = {
    errors: {
        name?: string[],
        abbreviation?: string[],
        formError?: string[]
    }


}

const addNewSchema = z.object({
    name: z.string().min(6, { message: "name must be longer than 6 character" }),
})


const addNew = async (name: string, initialSate: AddNewState, formData: FormData): Promise<AddNewState> => {
    const result = addNewSchema.safeParse({
        name: formData.get('name'),
    })

    const abbreviation = formData.get("abbreviation")


    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors }
    }

    if (name == "units" && !abbreviation) {
        return { errors: { abbreviation: ["required field"] } }
    }

    let res;
    try {

        res = await fetch(`${apiUrl}/api/v1/${name}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: result.data.name,
                    slug: generateSlug(result.data.name),
                    abbreviation: abbreviation

                })
            }
        )


    } catch (error: unknown) {
        if (error instanceof Error) {

            return { errors: { formError: [error.message] } }
        }
        return { errors: { formError: ["server is down"] } }
    }

    if (!res.ok) {
        try {
            const data = await res.json();
            return { errors: { formError: [data?.message || "something went wrong"] } }
        } catch (error) {
            return { errors: { formError: ["something went wrong"] } }
        }
    }


    // const data = await res.json();
    // console.log(data)



    revalidateTag(`${name}`)
    return {
        errors: {}
    }
}

export default addNew