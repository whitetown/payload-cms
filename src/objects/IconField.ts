import { Field } from 'payload'
import LucideIcon, { lucideIcons } from './custom/Lucide'

export const IconField: Field = {
    name: 'icon',
    type: 'select',
    options: lucideIcons.map((icon) => ({
        label: icon,
        value: icon,
    })),
    required: false,
    admin: {
        isClearable: true,
        // components: {
        //     Field: '/objects/custom/LucideInput.jsx',
        // },
    },
}
