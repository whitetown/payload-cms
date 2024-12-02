import { Field } from 'payload'
import LucideIcon, { lucideIcons } from './Lucide'

export const IconField: Field = {
    name: 'icon', // Name of the field
    type: 'select', // Dropdown type
    options: lucideIcons.map((icon) => ({
        label: icon, // The label displayed in the dropdown
        value: icon, // The value stored in the database
    })),
    required: false, // Optional: Make the field required
    admin: {
        // description: 'Choose a Lucide icon',
        isClearable: true,
        // components: {
        //     Field: '/objects/LucideInput.jsx',
        // },
    },
}
