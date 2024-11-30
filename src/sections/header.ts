import type { Block } from 'payload'

const validator = (value: any, arg: any) => {
    if (arg.siblingData.title || arg.siblingData.subtitle) return true
    return 'Either Title or Subtitle or Text is required.'
}

export const Header: Block = {
    slug: 'header',
    interfaceName: 'Header',
    fields: [
        {
            name: 'title',
            type: 'text',
            validate: validator,
        },
        {
            name: 'subtitle',
            type: 'text',
            validate: validator,
        },
    ],
}
