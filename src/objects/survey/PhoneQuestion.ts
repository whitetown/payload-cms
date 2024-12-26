import { Block } from 'payload'
import { QuestionCommon } from './QuestionCommon'

export const PhoneQuestion: Block = {
    slug: 'PhoneQuestion',
    fields: [
        ...QuestionCommon,
        {
            name: 'type',
            type: 'text',
            required: true,
            defaultValue: 'phone',
            hidden: true,
        },
    ],
}
