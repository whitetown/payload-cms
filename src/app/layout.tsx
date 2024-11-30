import { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
}

import './globals.css'

const Layout = ({ children }: LayoutProps) => {
    return <>{children}</>
}

export default Layout
