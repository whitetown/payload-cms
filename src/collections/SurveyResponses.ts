import type { CollectionConfig } from 'payload'
import { APIError } from 'payload'
import { plain } from '../helpers/plain'
import { getGeoInfo } from '@/helpers/getGeoInfo'
import { getIp } from '@/helpers/getIp'

export const SurveyResponses: CollectionConfig = {
    slug: 'survey-responses',
    access: {
        create: () => true,
        read: ({ req: { user } }) => !!user, // logged-in users,
        update: () => false,
    },
    // admin: {
    //     useAsTitle: 'name',
    // },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'survey',
                    type: 'relationship',
                    relationTo: 'surveys',
                    required: true,
                },
                {
                    name: 'ip',
                    type: 'text',
                    required: false,
                },
            ],
        },
        {
            name: 'response',
            type: 'json',
            required: true,
            defaultValue: {},
        },
        {
            name: 'userdata',
            type: 'json',
            required: true,
            defaultValue: {},
        },
    ],
    endpoints: [plain('survey-responses')],
    hooks: {
        beforeChange: [
            async ({ data, req }) => {
                if (req.method === 'POST') {
                    const ip = await getIp()

                    if (ip) {
                        const IP_THRESHOLD = parseInt(process.env.IP_THRESHOLD || '1', 10) // Default to 1 minute if not set

                        // Query the collection to check for recent entries from the same IP
                        const recentEntries = await req.payload.find({
                            collection: 'survey-responses', // Collection slug
                            where: {
                                ip: {
                                    equals: ip,
                                },
                                createdAt: {
                                    greater_than: new Date(Date.now() - IP_THRESHOLD * 60 * 1000).toISOString(),
                                },
                            },
                        })

                        if (recentEntries.docs.length > 0) {
                            throw new APIError('Too many requests. Try again later.', 429)
                        }

                        const userdata = await getGeoInfo(ip)
                        data.userdata = { ...userdata, ...data.userdata }
                    }

                    data.ip = ip
                }
                return data
            },
        ],
    },
}
