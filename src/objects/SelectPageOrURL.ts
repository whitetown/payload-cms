import { Field } from 'payload'

export const SelectPageOrURL: Field = {
    name: 'type',
    type: 'select',
    defaultValue: 'page',
    options: [
        {
            label: 'Page',
            value: 'page',
        },
        {
            label: 'URL',
            value: 'url',
        },
        {
            label: 'URL in a new window',
            value: 'url_top',
        },
    ],
}
