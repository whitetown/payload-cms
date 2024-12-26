import { GroupField } from 'payload'
import { OptionalImage } from '../OptionalImage'
import { NoQuestion } from './NoQuestion'
import { DateQuestion } from './DateQuestion'
import { NumberQuestion } from './NumberQuestion'
import { TextQuestion } from './TextQuestion'
import { ChoiceQuestion } from './ChoiceQuestion'
import { CheckQuestion } from './CheckQuestion'
import { EmailQuestion } from './EmailQuestion'
import { PhoneQuestion } from './PhoneQuestion'

export const SurveyPage: GroupField = {
    name: 'survey_page',
    label: 'Survey page',
    type: 'group',
    fields: [
        {
            type: 'collapsible',
            label: 'Top information',
            admin: { initCollapsed: true },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'subtitle',
                    type: 'text',
                },
                OptionalImage,
            ],
        },

        {
            name: 'questions',
            type: 'blocks',
            blocks: [
                TextQuestion,
                NumberQuestion,
                DateQuestion,
                ChoiceQuestion,
                CheckQuestion,
                EmailQuestion,
                PhoneQuestion,
                NoQuestion,
            ],
        },

        {
            type: 'row',
            fields: [
                {
                    name: 'back',
                    type: 'checkbox',
                    label: 'Show back button',
                    defaultValue: false,
                    admin: {
                        className: 'justify-end',
                    },
                },
                {
                    name: 'progress',
                    type: 'checkbox',
                    label: 'Show progress bar',
                    defaultValue: true,
                    admin: {
                        className: 'justify-end',
                    },
                },
                {
                    name: 'action',
                    type: 'select',
                    required: true,
                    defaultValue: 'next',
                    options: [
                        { label: 'None', value: 'none' },
                        { label: 'Next', value: 'next' },
                        { label: 'Submit', value: 'submit' },
                    ],
                    admin: {
                        isClearable: false,
                    },
                },
            ],
        },
    ],
}
