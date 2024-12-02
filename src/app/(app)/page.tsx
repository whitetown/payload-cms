import type { NextPage } from 'next'

import React from 'react'

const Page: NextPage = () => {
    return (
        <div id='root-page' className='container mx-auto grid gap-4 lg:grid-cols-3 p-8'>
            <div className='text-xs text-red-500'>text-xs</div>
            <div className='text-sm text-green-500'>text-sm</div>
            <div className='text-base text-blue-500'>text-base</div>
            <div className='text-lg text-orange-500'>text-lg</div>
            <div className='text-xl text-purple-500'>text-xl</div>
            <div className='text-2xl text-teal-500'>text-2xl</div>
            <div className='text-3xl text-pink-500'>text-3xl</div>
            <div className='text-4xl text-sky-500'>text-4xl</div>
            <div className='text-5xl text-lime-500'>text-5xl</div>
            <div className='text-6xl text-slate-500'>text-6xl</div>
            <div className='text-7xl text-fuchsia-500'>text-7xl</div>
            <div className='text-8xl text-amber-500'>text-8xl</div>
            <div className='text-9xl text-cyan-500'>text-9xl</div>
        </div>
    )
}

export default Page
