import type { CollectionConfig } from 'payload'

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
}
