import { CTA, CTAPresense } from '@/objects/CTA'
import { OptionalImage } from '@/objects/OptionalImage'
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
        OptionalImage,
        { type: 'row', fields: [ImagePlacement, CTAPresense] },
        CTA,
        {
            name: 'options',
            type: 'json',
            defaultValue: {},
        },
    ],
}
