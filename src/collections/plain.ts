import { CollectionSlug, Endpoint } from 'payload'

export const plain = (collection: CollectionSlug): Endpoint => {
    return {
        path: '/plain',
        method: 'get',
        handler: async (req) => {
            const data = await req.payload.find({
                collection,
                ...req.query,
            })

            const result = data?.docs?.[0]
            return !!result
                ? Response.json({
                      ...(data.docs.length > 1 ? { warning_more_results_than_expected: data.docs.length } : {}),
                      ...result,
                  })
                : Response.json({ error: `${collection} not found` }, { status: 404 })
        },
    }
}
