import type { CollectionConfig } from 'payload'
import { plain } from '../helpers/plain'
import { RequiredImage } from '@/objects/RequiredImage'

export const Partners: CollectionConfig = {
    slug: 'partners',
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
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                RequiredImage,
            ],
        },

        {
            name: 'description',
            type: 'textarea',
        },

        {
            name: 'url',
            type: 'text',
        },
    ],
    endpoints: [plain('partners')],
}
