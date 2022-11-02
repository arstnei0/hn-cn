import { ID, UserType, Directus, ManyItems, QueryMany } from "@directus/sdk"

type Story = {
	id: ID
    user_created: UserType
    date_created: string,
    title: string
    url: string
    // votes: ManyItems<UserType>
    votes: ManyItems<UserType>
}

type Collection = {
    story: Story
}

export const directus = new Directus<Collection>('https://amppkkl7.directus.app/')