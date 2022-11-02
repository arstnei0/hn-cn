import { roles } from "~~/api/roles"
import { db } from "~~/api/db"

export default defineEventHandler(async (event) => {
    const body = await useBody(event)
    let result

    try {
        result = await (await db()).users.createOne({
            email: body.email,
            password: body.password,
            title: body.username,
            role: (await roles()).user
        })
    } catch(e) {
        return {
            error: true
        }
    }

    return result
})