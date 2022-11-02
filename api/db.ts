import { directus } from '~~/api/directus'

const config = useRuntimeConfig()

export const loginAdmin = async () => {
    const {
        email,
        password
    } = config.directus.admin
    
    await (await directus.auth)
		.login({ email, password })
}

export const db = async () => {
    if (!await directus.auth.token) await loginAdmin()

    return directus
}