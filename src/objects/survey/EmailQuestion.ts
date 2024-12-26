import { Block } from 'payload'
import { QuestionCommon } from './QuestionCommon'

export const EmailQuestion: Block = {
    slug: 'EmailQuestion',
    fields: [
        ...QuestionCommon,
        {
            name: 'type',
            type: 'text',
            required: true,
            defaultValue: 'email',
            hidden: true,
        },
    ],
}
