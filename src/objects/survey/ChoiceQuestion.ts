import { Block } from 'payload'
import { QuestionCommon } from './QuestionCommon'

const validateOptions = (value: any, arg: any) => {
    const titles = (value || []).map((v: any) => v.title.trim())
    const values = (value || []).map((v: any) => v.value.trim())

    if (titles.length !== Array.from(new Set(titles)).length) return 'Duplicates found'
    if (values.length !== Array.from(new Set(values)).length) return 'Duplicates found'

    return true
}

export const ChoiceQuestion: Block = {
    slug: 'ChoiceQuestion',
    fields: [
        ...QuestionCommon,
        {
            type: 'row',
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    options: [
                        { label: 'Radio', value: 'radio' },
                        { label: 'Select', value: 'select' },
                        { label: 'Check', value: 'checkgroup' },
                        { label: 'Toggle', value: 'togglegroup' },
                    ],
                    required: true,
                    defaultValue: 'radio',
                    admin: {
                        isClearable: false,
                    },
                },
            ],
        },

        {
            name: 'options',
            type: 'array',
            required: true,
            fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'title', type: 'text', required: true },
                        { name: 'value', type: 'text', required: true },
                    ],
                },
            ],
            validate: validateOptions,
        },
    ],
}
