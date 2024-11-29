import type { Block } from 'payload'
import { Media } from '../objects/Media'

export const Medias: Block = {
    slug: 'medias',
    interfaceName: 'Medias',
    fields: [
        {
            name: 'items',
            type: 'array',
            fields: [Media],
        },
    ],
}
