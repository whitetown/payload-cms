import type { Block } from 'payload'

import { CTA, CTAPresense } from '@/objects/CTA'
import { ImagePlacement } from '@/objects/ImagePlacement'

const validator = (value: any, arg: any) => {
    if (arg.siblingData.title || arg.siblingData.subtitle || arg.siblingData.text?.root?.children?.length > 0)
        return true
    return 'Either Title or Subtitle or Text is required.'
}

export const Content: Block = {
    slug: 'content',
    interfaceName: 'Content',
    fields: [
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
            name: 'text',
            type: 'richText',
            validate: validator,
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
