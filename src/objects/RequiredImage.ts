import { Field } from 'payload'

export const RequiredImage: Field = {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
}
