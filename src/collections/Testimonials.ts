import type { CollectionConfig } from 'payload'
import { plain } from './plain'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'company',
                    type: 'text',
                },
                {
                    name: 'position',
                    type: 'text',
                },
            ],
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },

        {
            name: 'url',
            type: 'text',
        },
    ],
    endpoints: [plain('testimonials')],
}
