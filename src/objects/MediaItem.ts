import { GroupField } from 'payload'

export const MediaItem: GroupField = {
    name: 'media_item',
    type: 'group',
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    defaultValue: 'photo',
                    options: [
                        {
                            label: 'Photo',
                            value: 'photo',
                        },
                        {
                            label: 'Video',
                            value: 'video',
                        },
                        {
                            label: 'Youtibe ID',
                            value: 'youtube',
                        },
                        {
                            label: 'Vimeo ID',
                            value: 'vimeo',
                        },
                    ],
                },
                { name: 'title', type: 'text' },
            ],
        },

        {
            name: 'youtube_id',
            type: 'text',
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData.type === 'youtube',
            },
        },
        {
            name: 'vimeo_id',
            type: 'text',
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData.type === 'vimeo',
            },
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData.type === 'photo',
            },
        },
        {
            name: 'video',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData.type === 'video',
            },
        },
    ],
}
