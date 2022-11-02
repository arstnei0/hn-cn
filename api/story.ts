import { processDirectus } from "./process"
import { db } from "~~/api/db"

export const getNewStories = async (limit: number, offset: number) => (
    processDirectus(await (await db()).items('story').readByQuery({
        sort: ['-date_created'] as any
    }))
)

export const getStoryById = async (id: number) => {
    processDirectus(await (await db()).items('story').readOne(id))
}