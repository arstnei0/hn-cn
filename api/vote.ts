import { directus } from "./directus";
import { getUser } from "./user";

export const vote = async (id: number) => {
    return await directus.items('story').updateOne(id, {
        votes: [(await getUser()).id] as any
    })
}