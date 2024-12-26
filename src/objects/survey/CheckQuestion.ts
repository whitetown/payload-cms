import { Block } from 'payload'
import { QuestionCommon } from './QuestionCommon'

export const CheckQuestion: Block = {
    slug: 'CheckQuestion',
    fields: [
        ...QuestionCommon,
        {
            type: 'row',
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    options: [
                        { label: 'Toggle', value: 'toggle' },
                        { label: 'Check', value: 'check' },
                    ],
                    required: true,
                    defaultValue: 'toggle',
                    admin: {
                        isClearable: false,
                    },
                },
            ],
        },
    ],
}
