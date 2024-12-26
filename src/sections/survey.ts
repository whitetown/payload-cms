import type { Block } from 'payload'

export const Survey: Block = {
    slug: 'survey',
    interfaceName: 'Survey',
    fields: [
        {
            name: 'survey',
            type: 'relationship',
            relationTo: 'surveys',
            required: true,
        },
    ],
}
