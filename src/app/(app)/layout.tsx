import type { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
}

import './globals.css'

const Layout = ({ children }: LayoutProps) => {
    return (
        <html lang='en'>
            <body className='text-red-500'>{children}</body>
        </html>
    )
}

export default Layout
