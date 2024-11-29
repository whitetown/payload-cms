import type { CollectionConfig } from 'payload'

import { Collection } from '@/sections/collection'
import { Content } from '@/sections/content'
import { Header } from '@/sections/header'
import { Hero } from '@/sections/hero'
import { Longread } from '@/sections/longread'
import { Medias } from '@/sections/medias'
import { MediaGrid } from '@/sections/media-grid'
import { FAQ } from '@/sections/FAQ'
import { Partners } from '@/sections/Partners'
import { Testimonials } from '@/sections/Testimonials'

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
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'sections',
            type: 'blocks',
            blocks: [Header, Hero, Content, Collection, Longread, Medias, MediaGrid, FAQ, Partners, Testimonials],
        },
    ],
}
