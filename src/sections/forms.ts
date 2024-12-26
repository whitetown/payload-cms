import type { Block } from 'payload'

export const Forms: Block = {
    slug: 'forms',
    interfaceName: 'Forms',
    fields: [
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
        },
    ],
}
