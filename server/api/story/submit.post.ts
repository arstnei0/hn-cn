import { createStory } from "~~/api/story"

export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    return await createStory(body)
})