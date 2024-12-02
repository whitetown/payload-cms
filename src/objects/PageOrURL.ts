import { Field } from 'payload'

export const PageOrURL: Field[] = [
    {
        name: 'page',
        type: 'relationship',
        relationTo: 'pages',
        admin: {
            condition: (_, siblingData) => siblingData.type === 'page',
        },
    },

    {
        name: 'url',
        type: 'text',
        admin: {
            condition: (_, siblingData) => ['url', 'url_top'].includes(siblingData.type),
        },
    },
]

export const optionalPageOrURL = (): Field[] => {
    return PageOrURL
}

export const requiredPageOrURL = (): Field[] => {
    return PageOrURL.map((v) => ({ ...v, required: true }))
}
