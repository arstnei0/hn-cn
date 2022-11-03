import { directus } from "./directus";
import { processDirectus } from "./process";

export const getNewStories = async (limit: number, offset: number) => (
    processDirectus(await directus.items('story').readByQuery({
        sort: ['-date_created'] as any
    }))
)