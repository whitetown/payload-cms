import { Field } from 'payload'

export const OptionalImage: Field = {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
}
