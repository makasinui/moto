import { useEffect, useState } from "react";
import AddPhoto from "../AddPhoto";

interface IProps {
    onChange: (files: string[]) => void
}

export default function PhotoStep({onChange}: IProps) {
    const [files, setFiles] = useState(['']);

    const deleteFile = (idx: number) => {
        const newFiles = JSON.parse(JSON.stringify(files));
        newFiles[idx] = '';
        setFiles(newFiles);
    };

    const addFile = (url: string, idx: number) => {
        setFiles((files) => {
            if (files?.length) {
                const newFiles = JSON.parse(JSON.stringify(files));
                if (newFiles[idx] === '') {
                    newFiles[idx] = url;
                    return [...newFiles];
                }

                return [...files, url];
            }
            return [url];
        });
    };

    useEffect(() => {
        onChange(files)
    }, [files, onChange])

    return (
        <div className="flex mt-[100px] items-center justify-center flex-col pb-4">
            <h2 className="text-2xl text-center">Add photo</h2>
            <h3 className="pt-3 text-sm">First foto will be displsayed on main. Make sure it is a good foto.</h3>
            <div className="w-full grid grid-cols-2 justify-between gap-3 mt-6">
                {files.map((_item, i) =>
                    i !== 5 ? (
                        <AddPhoto
                            big={i === 0}
                            image={files[i + 1]}
                            onAdd={(e) => addFile(e, i + 1)}
                            deleteFile={() => deleteFile(i + 1)}
                        />
                    ) : null,
                )}
            </div>
        </div>
    );
}
