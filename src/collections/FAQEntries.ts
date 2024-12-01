import type { CollectionConfig } from 'payload'
import { plain } from './plain'

export const FAQEntries: CollectionConfig = {
    slug: 'faqentries',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'text',
            type: 'richText',
            required: true,
        },
    ],
    endpoints: [plain('faqentries')],
}
