// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'assets/hn.css'
    ],
    runtimeConfig: {
        directus: {
            url: 'https://amppkkl7.directus.app/',
            admin: {
                email: 'me@zihan.ga',
                password: '2xX4Je73L8BPbJq55ZfneKs8'
            }
        }
    },
    telemetry: false,
    ssr: true
})
