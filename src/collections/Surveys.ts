import type { CollectionConfig } from 'payload'
import { plain } from './plain'
import { SurveyPage } from '@/objects/survey/SurveyPage'

export const Surveys: CollectionConfig = {
    slug: 'surveys',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'website',
                    type: 'relationship',
                    relationTo: 'websites',
                    required: true,
                    defaultValue: 1,
                },
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'locale',
                    type: 'relationship',
                    relationTo: 'locales',
                    required: true,
                    defaultValue: 1,
                },
            ],
        },
        {
            name: 'pages',
            type: 'array',
            fields: [SurveyPage],
            required: true,
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'animation',
                    type: 'select',
                    options: [
                        { label: 'Horizontal', value: 'horizontal' },
                        { label: 'Vertical', value: 'vertical' },
                        { label: 'None', value: 'none' },
                    ],
                    required: true,
                    defaultValue: 'horizontal',
                },
                {
                    name: 'progressStyle',
                    type: 'select',
                    options: [
                        { label: 'Line', value: 'line' },
                        { label: 'Dots', value: 'dots' },
                        { label: 'Steps', value: 'steps' },
                        { label: 'Percents', value: 'percents' },
                        { label: 'None', value: 'none' },
                    ],
                    required: true,
                    defaultValue: 'line',
                },
            ],
        },
        {
            name: 'options',
            type: 'json',
            defaultValue: {},
        },
    ],
    endpoints: [plain('surveys')],
}
