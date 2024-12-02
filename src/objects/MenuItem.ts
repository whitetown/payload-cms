import { Block, Field, GroupField } from 'payload'
import { IconField } from './IconField'
import { SelectPageOrURL } from './SelectPageOrURL'
import { requiredPageOrURL } from './PageOrURL'
import { OptionalImage } from './OptionalImage'

export const menuFields: Field[] = [
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
        type: 'row',
        fields: [SelectPageOrURL, ...requiredPageOrURL()],
    },
]

export const MenuBlock: Block = {
    slug: 'menublock',
    fields: menuFields,
}

export const MenuItem: GroupField = {
    name: 'menuitem',
    type: 'group',
    admin: {},
    fields: menuFields,
}
