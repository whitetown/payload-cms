import type { Block } from 'payload'
import { MediaItem } from '../objects/MediaItem'

export const MediaGrid: Block = {
    slug: 'mediagrid',
    interfaceName: 'MediaGrid',
    fields: [
        {
            name: 'items',
            type: 'array',
            fields: [MediaItem],
            required: true,
        },
    ],
}
