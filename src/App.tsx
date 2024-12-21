import { useState } from 'react';

import Icon from './components/icons/Icon';

import { stepsData } from './consts';
import AddPhoto from './components/AddPhoto';

function App() {
    const [step, setStep] = useState(0);
    const [files, setFiles] = useState(['']);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        if (step === 0) return;
        setStep(step - 1);
    };

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

    return (
        <main className="bg-[#080808] text-[#B4B4B4] h-svh">
            <header className="py-[13px] px-4">
                <div onClick={prevStep}>
                    <Icon type="arrow-left" />
                </div>
            </header>
            <section className="content px-4">
                {stepsData.map((item) => (
                    <div
                        key={item.step}
                        className={`${step === item.step ? 'flex' : 'hidden'} mt-[100px] items-center justify-center flex-col`}>
                        <h2 className="text-2xl text-center">{item.title}</h2>
                        <div className={`grid w-full gap-2 grid-cols-2 mt-[56px] `}>
                            {item?.buttons?.map((btn, i) => (
                                <button
                                    key={i}
                                    onClick={nextStep}
                                    className={`bg-[#323131] w-full text-white py-3 zoom rounded-lg active:bg-[#E82521]`}>
                                    {btn.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        {step === 6 && (
                            <div className="flex flex-col h-full w-full">
                                <div className="w-full flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="basis-[95%] px-3 rounded-xl bg-[#080808] border py-3"
                                    />
                                    <div>km</div>
                                </div>
                                <div onClick={nextStep} className="absolute zoom bottom-8 py-3 rounded-xl left-4 max-w-[calc(100%-32px)] flex items-center justify-center w-full bg-[#323131]">
                                    Next
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                {step === 7 ? (
                    <div className="flex mt-[100px] items-center justify-center flex-col">
                        <h2 className="text-2xl text-center">Add photo</h2>
                        <h3 className="pt-3 text-sm">First foto will be displsayed on main. Make sure it is a good foto.</h3>
                        <div className="w-full flex flex-wrap justify-between gap-3 mt-6">
                            {files.map((item, i) =>
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
                ) : null}
            </section>
        </main>
    );
}

export default App;
