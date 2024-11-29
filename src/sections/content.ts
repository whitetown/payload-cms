import { CTA, CTAPresense } from '@/objects/CTA'
import { ImagePlacement } from '@/objects/ImagePlacement'
import type { Block } from 'payload'

export const Content: Block = {
    slug: 'content',
    interfaceName: 'Content',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'subtitle',
            type: 'text',
        },
        {
            name: 'text',
            type: 'richText',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        { type: 'row', fields: [ImagePlacement, CTAPresense] },
        CTA,
        {
            name: 'options',
            type: 'json',
            defaultValue: '{}',
        },
    ],
}
