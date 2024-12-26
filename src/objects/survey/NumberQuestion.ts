import { Block } from 'payload'
import { QuestionCommon } from './QuestionCommon'

const validateNumber = (value: any, arg: any) => {
    const { min, max, defaultValue, defaultMin, defaultMax, type } = arg.siblingData || {}

    if (['slider', 'range'].includes(type)) {
        if (!min && min !== 0) return 'Min is required'
        if (!max && max !== 0) return 'Max is required'
    }

    // Check if both min and max are defined
    if (typeof min === 'number' && typeof max === 'number' && min > max) {
        return `Validation failed: min (${min}) should be less than max (${max}).`
    }

    if (['range'].includes(type)) {
        if (typeof defaultMin === 'number' && typeof defaultMax === 'number' && defaultMin > defaultMax) {
            return `Validation failed: min (${defaultMin}) should be less than max (${defaultMax}).`
        }

        // Check if defaultValue is defined and within range
        if (typeof defaultMin === 'number') {
            if (typeof min === 'number' && defaultMin < min) {
                return `Validation failed: defaultValue (${defaultMin}) is less than min (${min}).`
            }
        }

        if (typeof defaultMax === 'number') {
            if (typeof max === 'number' && defaultMax > max) {
                return `Validation failed: defaultValue (${defaultMax}) is greater than max (${max}).`
            }
        }
    } else {
        // Check if defaultValue is defined and within range
        if (typeof defaultValue === 'number') {
            if (typeof min === 'number' && defaultValue < min) {
                return `Validation failed: defaultValue (${defaultValue}) is less than min (${min}).`
            }
            if (typeof max === 'number' && defaultValue > max) {
                return `Validation failed: defaultValue (${defaultValue}) is greater than max (${max}).`
            }
        }
    }

    return true // Validation passed
}

export const NumberQuestion: Block = {
    slug: 'NumberQuestion',
    fields: [
        ...QuestionCommon,
        {
            type: 'row',
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    options: [
                        { label: 'Integer', value: 'integer' },
                        { label: 'Double', value: 'double' },
                        { label: 'Slider', value: 'slider' },
                        { label: 'Range', value: 'range' },
                    ],
                    required: true,
                    defaultValue: 'integer',
                    admin: {
                        isClearable: false,
                    },
                },
                {
                    name: 'decimals',
                    type: 'number',
                    min: 0,
                    max: 10,
                    defaultValue: 2,
                    admin: {
                        condition: (_, siblingData) => ['double'].includes(siblingData.type),
                    },
                },
            ],
        },

        {
            type: 'row',
            fields: [
                { name: 'min', type: 'number', validate: validateNumber },
                {
                    name: 'defaultValue',
                    type: 'number',
                    validate: validateNumber,
                    defaultValue: 0,
                    admin: {
                        condition: (_, siblingData) => !['range'].includes(siblingData.type),
                    },
                },
                {
                    name: 'defaultMin',
                    type: 'number',
                    validate: validateNumber,
                    defaultValue: 25,
                    admin: {
                        condition: (_, siblingData) => ['range'].includes(siblingData.type),
                    },
                },
                {
                    name: 'defaultMax',
                    type: 'number',
                    validate: validateNumber,
                    defaultValue: 50,
                    admin: {
                        condition: (_, siblingData) => ['range'].includes(siblingData.type),
                    },
                },
                { name: 'max', type: 'number', validate: validateNumber },
            ],
        },
    ],
}
