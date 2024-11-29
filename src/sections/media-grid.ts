import type { Block } from 'payload'
import { Media } from '../objects/Media'

export const MediaGrid: Block = {
    slug: 'mediagrid',
    interfaceName: 'MediaGrid',
    fields: [
        {
            name: 'items',
            type: 'array',
            fields: [Media],
        },
    ],
}
