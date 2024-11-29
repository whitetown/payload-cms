import type { Block } from 'payload'

export const Testimonials: Block = {
    slug: 'testimonials',
    interfaceName: 'Testimonials',
    fields: [
        {
            name: 'items',
            type: 'relationship',
            relationTo: 'testimonials',
            hasMany: true,
        },
    ],
}
