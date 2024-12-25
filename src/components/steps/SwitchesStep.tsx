import Switch from "../ui/Switch";

interface IProps {
    switches: string[]
    nextStep: () => void
}

export default function SwitchesStep({ switches, nextStep }: IProps) {
    
    
    return (
        <div className="flex flex-col gap-[18px] h-full w-full ">
            <div className="flex flex-col gap-[18px]">
                {switches?.map((item) => (
                    <Switch
                        key={item}
                        onChange={(e) => console.log(e)}
                        label={item}
                    />
                ))}
            </div>
            <div
                onClick={nextStep}
                className="absolute zoom bottom-8 py-3 rounded-xl left-4 max-w-[calc(100%-32px)] flex items-center justify-center w-full bg-[#323131]">
                Next
            </div>
        </div>
    );
}
