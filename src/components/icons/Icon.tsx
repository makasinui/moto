import { Trash, Camera, ArrowLeft } from "./components"

type TIconProps = {
    type: string
    className?: string
}

export default function Icon({ type }: TIconProps) {
    return {
        'trash': <Trash />,
        'camera': <Camera />,
        'arrow-left': <ArrowLeft />
    }[type]
}