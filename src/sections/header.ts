import type { Block } from 'payload'

export const Header: Block = {
    slug: 'header',
    interfaceName: 'Header',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'subtitle',
            type: 'text',
        },
    ],
}
