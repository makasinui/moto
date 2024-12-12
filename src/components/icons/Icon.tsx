import { ArrowLeft, Location, Search, Settings } from "./components"

type TIconProps = {
    type: string
    className?: string
}

export default function Icon({ type }: TIconProps) {
    return {
        'arrow-left': <ArrowLeft />,
        'location': <Location />,
        'search': <Search />,
        'settings': <Settings />
    }[type]
}