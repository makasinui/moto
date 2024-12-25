import { useRef } from 'react';
import Icon from './icons/Icon';

interface IProps {
    onAdd: (file: string) => void;
    big: boolean;
    image: null | string;
    deleteFile: () => void;
}

export default function AddPhoto({ onAdd, deleteFile, big = false, image }: IProps) {
    const fileRef = useRef<HTMLInputElement>(null)
    const openFile = () => {
        fileRef.current!.click();
    };

    const addFiles = (event: EventTarget & HTMLInputElement) => {
        const reader = new FileReader();

        if (!event?.files) return;

        reader.onload = (e) => {
            if (!e.target) return;
            onAdd(e.target.result as string);
        };

        reader.readAsDataURL(event.files[0]);
    };

    return (
        <div
            className={`${
                big ? 'w-full h-[220px] col-span-2' : 'h-[98px]'
            } bg-[#323131] flex items-center justify-center flex-col rounded-xl gap-3 zoom relative`}
            onClick={() => {
                if (image?.length) return;
                openFile();
            }}>
            {!image?.length ? (
                <>
                    <Icon type="camera" />
                    <span className="text-white">Add photo</span>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileRef}
                        className="hidden"
                        onChange={(e) => addFiles(e.target)}
                    />
                </>
            ) : (
                <div className="h-full">
                    <div onClick={deleteFile} className="p-2 absolute right-2 bottom-2 bg-[#B4B4B4] rounded-xl">
                        <Icon type="trash" />
                    </div>
                    <img
                        src={image as string}
                        alt=""
                        className="rounded-xl w-full h-full object-cover"
                    />
                    {big ? (
                        <div className="absolute top-2 left-2 bg-[#B4B4B4] rounded-xl text-xs text-[#171717] px-5 py-2">Main photo</div>
                    ) : null}
                </div>
            )}
        </div>
    );
}
