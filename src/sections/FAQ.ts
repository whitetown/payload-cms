import type { Block } from 'payload'

export const FAQ: Block = {
    slug: 'faq',
    interfaceName: 'FAQ',
    fields: [
        {
            name: 'items',
            type: 'relationship',
            relationTo: 'faqentries',
            hasMany: true,
            required: true,
        },
    ],
}
