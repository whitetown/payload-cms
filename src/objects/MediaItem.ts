import { GroupField } from 'payload'
import { OptionalImage } from './OptionalImage'
import { RequiredImage } from './RequiredImage'

const validator = (value: any, arg: any) => {
    if (arg.siblingData.youtube_id || arg.siblingData.vimeo_id || arg.siblingData.image || arg.siblingData.video)
        return true
    return 'Either youtube_id or vimeo_id or image or video is required.'
}

export const MediaItem: GroupField = {
    name: 'media_item',
    type: 'group',
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
