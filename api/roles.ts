import { directus } from "~~/api/directus"

export const roles = cachedFunction(async () => {
    return (await directus.roles.readByQuery({})).data.reduce((obj, role) => ({
        ...obj,
        [role.name]: role
    }), {}) as any
}, {
    maxAge: 9999999999,
})
