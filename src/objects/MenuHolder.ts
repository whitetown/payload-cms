import { Block } from 'payload'
import { IconField } from './IconField'
import { MenuItem } from './MenuItem'
import { OptionalImage } from './OptionalImage'

export const MenuHolder: Block = {
    slug: 'menuholder',
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                IconField,
            ],
        },

        OptionalImage,

        {
            name: 'items',
            type: 'array',
            fields: [MenuItem],
            required: true,
        },
    ],
}
