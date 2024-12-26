import { Field } from 'payload'

export const QuestionCommon: Field[] = [
    {
        type: 'row',
        fields: [
            {
                name: 'title',
                type: 'text',
                required: true,
                defaultValue: '',
            },
            {
                name: 'description',
                type: 'text',
            },
        ],
    },
    {
        type: 'row',
        fields: [
            {
                name: 'name',
                type: 'text',
                defaultValue: '',
                required: true,
                validate: (v: any) =>
                    /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)*$/.test(v) ? true : 'Invalid name',
            },
            {
                name: 'layout',
                type: 'select',
                options: [
                    { label: '100%', value: '100' },
                    { label: '75%', value: '75' },
                    { label: '50%', value: '50' },
                    { label: '33%', value: '33' },
                    { label: '25%', value: '25' },
                ],
                defaultValue: '100',
                admin: {
                    isClearable: false,
                },
            },
            {
                name: 'required',
                type: 'checkbox',
                defaultValue: true,
                admin: {
                    className: 'justify-end',
                },
            },
        ],
    },
]
