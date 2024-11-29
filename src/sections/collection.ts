import type { Block } from 'payload'
import { Brick } from '@/objects/Brick'

export const Collection: Block = {
    slug: 'collection',
    interfaceName: 'Collection',
    fields: [
        {
            name: 'kind',
            type: 'select',
            options: [
                { label: 'Cards', value: 'cards' },
                { label: 'Tabs', value: 'tabs' },
                { label: 'Grid', value: 'grid' },
                { label: 'Flex', value: 'flex' },
                { label: 'List', value: 'list' },
                { label: 'Progress', value: 'progress' },
                { label: 'Instructions', value: 'instructions' },
            ],
            required: true,
            defaultValue: 'cards',
        },
        {
            name: 'items',
            type: 'array',
            fields: [Brick],
        },
        {
            name: 'options',
            type: 'json',
            defaultValue: '{}',
        },
    ],
}
