import type { Block } from 'payload'
import { MediaItem } from '../objects/MediaItem'

export const Medias: Block = {
    slug: 'medias',
    interfaceName: 'Medias',
    fields: [
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
