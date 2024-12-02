// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { s3Storage } from '@payloadcms/storage-s3'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { seoPlugin } from '@payloadcms/plugin-seo'

import { en } from '@payloadcms/translations/languages/en'
import { de } from '@payloadcms/translations/languages/de'
import { sk } from '@payloadcms/translations/languages/sk'
import { ru } from '@payloadcms/translations/languages/ru'
import { uk } from '@payloadcms/translations/languages/uk'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { FAQEntries } from './collections/FAQEntries'
import { Partners } from './collections/Partners'
import { Testimonials } from './collections/Testimonials'
import { Websites } from './collections/websites'
import { Locales } from './collections/locales'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const MediaStorage =
    process.env.S3_ACCESS_KEY_ID && process.env.S3_SECRET_ACCESS_KEY
        ? [
              s3Storage({
                  collections: {
                      media: true,
                  },
                  bucket: process.env.S3_BUCKET || '',
                  config: {
                      credentials: {
                          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
                      },
                      region: process.env.S3_REGION,
                      // ... Other S3 configuration
                  },
                  acl: 'public-read', // Make files public by default
              }),
          ]
        : []

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },

    collections: [Users, Media, Pages, FAQEntries, Partners, Testimonials, Websites, Locales],
    editor: lexicalEditor({ features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()] }),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        seoPlugin({
            collections: [
                // 'pages'
            ],
            // uploadsCollection: 'media',
            generateTitle: ({ doc }) => doc.title || '',
            generateDescription: ({ doc }) => doc.excerpt,
        }),
        // storage-adapter-placeholder
        ...MediaStorage,
    ],
    i18n: {
        fallbackLanguage: 'en',
        supportedLanguages: { en, de, sk, ru, uk },
    },
    // localization: {
    //     locales: ['en'],
    //     defaultLocale: 'en',
    //     fallback: true,
    // },
})
