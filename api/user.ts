import { directus } from "./directus"

export const getUser = async () => {
    let user

    try {
        user = await directus.users.me.read()
    } catch(e) {
        
    }

    return user
}

export const logout = async () => await directus.auth.logout()