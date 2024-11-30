import { GroupField } from 'payload'
import { IconField } from './Icon'

const validator = (value: any, arg: any) => {
    if (arg.siblingData.title || arg.siblingData.subtitle || arg.siblingData.headline) return true
    return 'Either Title or Subtitle or Text is required.'
}

export const Brick: GroupField = {
    name: 'brick',
    type: 'group',
    fields: [
        {
            name: 'headline',
            type: 'text',
            validate: validator,
        },
        {
            name: 'title',
            type: 'text',
            validate: validator,
        },
        {
            name: 'subtitle',
            type: 'text',
            validate: validator,
        },

        {
            type: 'row',
            fields: [
                IconField,
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },

        {
            type: 'row',
            fields: [
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
        },
    ],
}
