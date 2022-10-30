import { getNewStories } from "~~/api/story"

export default defineEventHandler(async (event) => {
    const {
        limit = '30',
        offset = '0',
    } = useQuery(event)

    return await getNewStories(parseInt(limit as string), parseInt(offset as string))
})