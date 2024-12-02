import { Field } from 'payload'

export const ImagePlacement: Field = {
    name: 'imagePlacement',
    type: 'select',
    options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'Behind', value: 'behind' },
    ],
    required: true,
    defaultValue: 'left',
    admin: {
        isClearable: false,
    },
}
