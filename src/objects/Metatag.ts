import { GroupField } from 'payload'

export const Metatags: GroupField = {
    name: 'metatags',
    type: 'group',
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
