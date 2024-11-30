import type { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
    slug: 'partners',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },

        {
            name: 'description',
            type: 'richText',
        },

        {
            name: 'url',
            type: 'text',
        },
    ],
}