import type { Block } from 'payload'
import { MediaItem } from '../objects/MediaItem'

export const Medias: Block = {
    slug: 'medias',
    interfaceName: 'Medias',
    fields: [
        {
            name: 'layout',
            type: 'select',
            options: [
                { label: '1 Column', value: 'column-1' },
                { label: '2 Columns', value: 'column-2' },
                { label: 'Flex', value: 'flex' },
                { label: 'Zigzag', value: 'zigzag' },
                { label: 'Slideshow', value: 'slideshow' },
            ],
            required: true,
            defaultValue: 'column-1',
            admin: {
                isClearable: false,
            },
        },
        {
            name: 'items',
            type: 'array',
            fields: [MediaItem],
            required: true,
        },
        {
            name: 'options',
            type: 'json',
            defaultValue: {},
        },
    ],
}
