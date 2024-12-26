import { Block } from 'payload'
import { QuestionCommon } from './QuestionCommon'

const validateDate = (value: any, arg: any) => {
    const { minDate, maxDate } = arg.siblingData || {}

    try {
        if (!minDate || !maxDate) return true
        if (new Date(minDate) > new Date(maxDate)) return 'Error min/max'
    } catch {}

    return true
}

export const DateQuestion: Block = {
    slug: 'DateQuestion',
    fields: [
        ...QuestionCommon,
        {
            type: 'row',
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    options: [
                        { label: 'Date', value: 'date' },
                        { label: 'DateRange', value: 'daterange' },
                    ],
                    required: true,
                    defaultValue: 'date',
                    admin: {
                        isClearable: false,
                    },
                },
            ],
        },

        {
            type: 'row',
            fields: [
                { name: 'minDate', type: 'date', validate: validateDate },
                {
                    name: 'defaultDate',
                    type: 'select',
                    options: [
                        { label: 'Today', value: 'today' },
                        { label: 'Current month', value: 'current_month' },
                        { label: 'Month to date', value: 'month_to_date' },
                        { label: 'Current year', value: 'current_year' },
                        { label: 'Year to date', value: 'year_to_date' },
                    ],
                },
                { name: 'maxDate', type: 'date', validate: validateDate },
            ],
            admin: {
                condition: (_, siblingData) => ['date', 'daterange'].includes(siblingData.type),
            },
        },
    ],
}
