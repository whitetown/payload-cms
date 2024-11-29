import { CTA, CTAPresense } from '@/objects/CTA'
import { ImagePlacement } from '@/objects/ImagePlacement'
import type { Block } from 'payload'

export const Hero: Block = {
    slug: 'hero',
    interfaceName: 'Hero',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        { type: 'row', fields: [ImagePlacement, CTAPresense] },
        CTA,
    ],
}
