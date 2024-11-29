import { Field, GroupField } from 'payload'

export const CTAPresense: Field = {
    name: 'CTA',
    type: 'checkbox',
    label: 'Include CTA?',
    admin: {
        className: 'flex items-end',
    },
}

export const CTA: GroupField = {
    name: 'cta',
    type: 'group',
    admin: {
        condition: (_, siblingData) => siblingData.CTA, // Only show if hasCTA is true
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'icon',
                    type: 'text', // Or use an upload if needed
                },
            ],
        },

        {
            type: 'row',
            fields: [
                {
                    name: 'color',
                    type: 'select',
                    options: [
                        { value: 'default', label: 'Default' },
                        { value: 'primary', label: 'Primary' },
                        { value: 'secondary', label: 'Secondary' },
                        { value: 'accent', label: 'Accent' },
                        { value: 'success', label: 'Success' },
                        { value: 'error', label: 'Error' },
                        { value: 'warning', label: 'Warning' },
                        { value: 'info', label: 'Info' },
                        { value: 'neutral', label: 'Neutral' },
                    ],
                    required: true,
                    defaultValue: 'default',
                },
                {
                    name: 'variant',
                    type: 'select',
                    options: [
                        { value: 'solid', label: 'Solid' },
                        { value: 'outline', label: 'Outline' },
                        { value: 'tint', label: 'Tint' },
                        { value: 'ghost', label: 'Ghost' },
                    ],
                    required: true,
                    defaultValue: 'solid',
                },
            ],
        },

        {
            name: 'url',
            type: 'text',
        },
        {
            name: 'page',
            type: 'relationship',
            relationTo: 'pages', // Replace with your page collection slug
        },
    ],
}
