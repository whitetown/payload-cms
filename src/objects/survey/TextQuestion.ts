import { Block } from 'payload'
import { QuestionCommon } from './QuestionCommon'

const validateString = (value: any, arg: any) => {
    const { minLength, maxLength } = arg.siblingData || {}

    // Check if both min and max are defined
    if (typeof minLength === 'number' && typeof maxLength === 'number' && minLength > maxLength) {
        return `Validation failed: maxLength (${minLength}) should be less than maxLength (${maxLength}).`
    }

    return true
}

export const TextQuestion: Block = {
    slug: 'TextQuestion',
    fields: [
        ...QuestionCommon,
        {
            type: 'row',
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    options: [
                        { label: 'Text', value: 'text' },
                        { label: 'TextArea', value: 'textarea' },
                    ],
                    required: true,
                    defaultValue: 'text',
                    admin: {
                        isClearable: false,
                    },
                },
                { name: 'minLength', type: 'number', validate: validateString },
                { name: 'maxLength', type: 'number', validate: validateString },
            ],
        },
    ],
}
