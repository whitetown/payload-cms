import type { CollectionConfig } from 'payload'
import { plain } from './plain'

export const Websites: CollectionConfig = {
    slug: 'websites',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'url',
            type: 'text',
            required: true,
        },
    ],
    endpoints: [plain('websites')],
}
