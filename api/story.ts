import { processDirectus } from "./process"

export const getStoryById = async (id: number) => processDirectus(await $fetch(`https://amppkkl7.directus.app/items/story/${id}`))
export const getNewStories = async (limit: number, offset: number) => processDirectus(
    await $fetch(
        `https://amppkkl7.directus.app/items/story?sort=-date_created&limit=${limit}&offset=${offset}`
    )
)
export const createStory = async (story) => (
    await $fetch(`https://amppkkl7.directus.app/items/story`, {
        method: 'post',
        body: JSON.stringify(story)
    })
)