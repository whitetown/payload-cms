import type { CollectionConfig } from 'payload'

import { MetaDescriptionField, MetaTitleField } from '@payloadcms/plugin-seo/fields'

import { Collection } from '@/sections/collection'
import { Content } from '@/sections/content'
import { Header } from '@/sections/header'
import { Hero } from '@/sections/hero'
import { Longread } from '@/sections/longread'
import { Medias } from '@/sections/medias'
import { FAQ } from '@/sections/FAQ'
import { Partners } from '@/sections/Partners'
import { Testimonials } from '@/sections/Testimonials'
import { plain } from './plain'
import { Metatags } from '@/objects/Metatag'
import { Survey } from '@/sections/survey'
import { Forms } from '@/sections/forms'

export const Pages: CollectionConfig = {
    slug: 'pages',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'slug',
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'path',
                    type: 'text',
                    required: true,
                    validate: (value: any, arg: any) => (value?.startsWith('/') ? true : 'Path must start with /'),
                },
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'website',
                    type: 'relationship',
                    relationTo: 'websites',
                    required: true,
                    defaultValue: 1,
                },
                {
                    name: 'locale',
                    type: 'relationship',
                    relationTo: 'locales',
                    required: true,
                    defaultValue: 1,
                },
            ],
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },

        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'sections',
                            type: 'blocks',
                            blocks: [
                                Header,
                                Hero,
                                Content,
                                Collection,
                                Longread,
                                Medias,
                                FAQ,
                                Partners,
                                Testimonials,
                                Survey,
                                Forms,
                            ],
                        },
                    ],
                },
                {
                    name: 'meta',
                    label: 'SEO',
                    fields: [
                        MetaTitleField({
                            hasGenerateFn: true,
                        }),
                        MetaDescriptionField({ hasGenerateFn: true }),
                        {
                            name: 'metatags',
                            type: 'array',
                            fields: [Metatags],
                            defaultValue: [],
                        },
                    ],
                },
            ],
        },
    ],
    endpoints: [plain('pages')],
}
