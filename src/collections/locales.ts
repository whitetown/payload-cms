import type { CollectionConfig } from 'payload'

export const Locales: CollectionConfig = {
    slug: 'locales',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'locale',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'title',
            type: 'text',
            required: true,
            admin: {
                hidden: true,
            },
            hooks: {
                beforeChange: [
                    async ({ data }) => {
                        return [data?.locale, data?.name].join(' - ')
                    },
                ],
            },
        },
    ],
}
