import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'

const lucideIcons = Object.keys(dynamicIconImports) as (keyof typeof dynamicIconImports)[]

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
}

const LucideIcon = ({ name, ...props }: IconProps) => {
    const Icon = dynamic(dynamicIconImports[name])

    // console.log(name, LucideIcon, dynamicIconImports)

    return <Icon {...props} />
}

export default LucideIcon
export { lucideIcons }
