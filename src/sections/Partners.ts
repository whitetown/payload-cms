import type { Block } from 'payload'

export const Partners: Block = {
    slug: 'partners',
    interfaceName: 'Partners',
    fields: [
        {
            name: 'items',
            type: 'relationship',
            relationTo: 'partners',
            hasMany: true,
            required: true,
        },
    ],
}
