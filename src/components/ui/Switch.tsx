import { useState } from "react"

interface IProps {
    onChange: (active: boolean) => void
    label: string
}

export default function Switch({onChange, label}: IProps) {
    const [active, setActive] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActive(!active)
        onChange(active);
    }
    const switchClass = `switch ${active ? 'switch__active' : ''}`;
    return (
        <div className="flex items-center justify-between text-2xl">
            {label}
            <label className={switchClass} onClick={handleClick}>
            </label>
        </div>
    )
}