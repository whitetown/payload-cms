import { Field, GroupField } from 'payload'
import { IconField } from './Icon'

export const CTAPresense: Field = {
    name: 'CTA',
    type: 'checkbox',
    label: 'Include CTA?',
    admin: {
        className: 'flex items-end',
    },
}

const validator = (value: any, arg: any) => {
    if (arg.siblingData.url || arg.siblingData.page) return true
    return 'Either URL or Page is required.'
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
                IconField,
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
            type: 'row',
            fields: [
                {
                    name: 'url',
                    type: 'text',
                    validate: validator,
                },
                {
                    name: 'page',
                    type: 'relationship',
                    relationTo: 'pages', // Replace with your page collection slug
                    validate: validator,
                },
            ],
        },
    ],
}
