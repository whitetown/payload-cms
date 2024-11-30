import { CTA, CTAPresense } from '@/objects/CTA'
import { ImagePlacement } from '@/objects/ImagePlacement'
import type { Block } from 'payload'

export const Longread: Block = {
    slug: 'longread',
    interfaceName: 'Longread',
    fields: [
        {
            name: 'items',
            type: 'array',
            fields: [
                {
                    name: 'text',
                    type: 'richText',
                    required: true,
                },
            ],
            required: true,
        },
        {
            name: 'options',
            type: 'json',
            defaultValue: '{}',
        },
    ],
}
