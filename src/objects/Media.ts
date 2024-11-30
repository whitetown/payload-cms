import { GroupField } from 'payload'

const validator = (value: any, arg: any) => {
    if (arg.siblingData.youtube_id || arg.siblingData.vimeo_id || arg.siblingData.image || arg.siblingData.video)
        return true
    return 'Either youtube_id or vimeo_id or image or video is required.'
}

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
                    validate: validator,
                },
                {
                    name: 'vimeo_id',
                    type: 'text',
                    validate: validator,
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
                    validate: validator,
                },
                {
                    name: 'video',
                    type: 'upload',
                    relationTo: 'media',
                    validate: validator,
                },
            ],
        },
    ],
}
