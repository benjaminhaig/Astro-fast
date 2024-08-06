import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        date: z.date(),
        description: z.string(),

    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection,
};