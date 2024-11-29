import type { GroupField } from 'payload'

export const Media: GroupField = {
    name: 'media',
    type: 'group',
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'youtube_id',
                    type: 'text',
                },
                {
                    name: 'vimeo_id',
                    type: 'text',
                },
            ],
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'video',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
    ],
}
