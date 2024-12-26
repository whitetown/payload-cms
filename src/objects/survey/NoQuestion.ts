import { Block } from 'payload'

import { OptionalImage } from '../OptionalImage'
import { CTA, CTAPresense } from '../CTA'

export const NoQuestion: Block = {
    slug: 'NoQuestion',
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
            name: 'type',
            type: 'text',
            defaultValue: 'info',
            hidden: true,
        },
        {
            name: 'layout',
            type: 'text',
            defaultValue: '100',
            hidden: true,
        },
        OptionalImage,
        CTAPresense,
        CTA,
    ],
}
