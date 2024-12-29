import type { CollectionConfig } from 'payload'
import { plain } from '../helpers/plain'
import { MenuHolder } from '@/objects/MenuHolder'
import { MenuBlock, MenuItem } from '@/objects/MenuItem'

export const Menus: CollectionConfig = {
    slug: 'menus',
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
                    name: 'website',
                    type: 'relationship',
                    relationTo: 'websites',
                    required: true,
                    defaultValue: 1,
                },
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'locale',
                    type: 'relationship',
                    relationTo: 'locales',
                    required: true,
                    defaultValue: 1,
                },
            ],
        },
        {
            name: 'items',
            type: 'blocks',
            required: true,
            blocks: [MenuHolder, MenuBlock],
        },
    ],
    endpoints: [plain('menus')],
}
