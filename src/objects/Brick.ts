import { GroupField } from 'payload'

export const Brick: GroupField = {
    name: 'brick',
    type: 'group',
    fields: [
        {
            name: 'headline',
            type: 'text',
        },
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'subtitle',
            type: 'text',
        },

        {
            type: 'row',
            fields: [
                {
                    name: 'icon',
                    type: 'text',
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },

        {
            name: 'url',
            type: 'text',
        },
        {
            name: 'page',
            type: 'relationship',
            relationTo: 'pages', // Replace with your page collection slug
        },
    ],
}
