import { ReactNode } from "react"

type TitleProps = {
    children: string | ReactNode
    className?: string
    small?: boolean
}

export default function Title({children, className, small}: TitleProps) {
    return <h2 className={`${small ? 'text-base': 'text-[20px]'} font-bold ${className}`}>{children}</h2>
}