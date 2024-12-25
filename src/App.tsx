import { useState } from 'react';

import Icon from './components/icons/Icon';

import { stepsData } from './consts';
import PhotoStep from './components/steps/PhotoStep';
import SwitchesStep from './components/steps/SwitchesStep';

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

    return (
        <main className="dark:bg-[#080808] bg-white dark:text-light-dark text-light min-h-svh">
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
                                    className={`bg-[#323131] w-full text-white py-3 zoom rounded-lg active:dark:bg-accent-dark active:bg-accent`}>
                                    {btn.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        {step === 5 && (
                            <div className="flex flex-col h-full w-full mt-[50px]">
                                <div className="w-full flex items-center gap-3 px-4">
                                    <input
                                        type="text"
                                        className="px-3 w-full rounded-xl bg-[#080808] border py-3"
                                    />
                                </div>
                                <div
                                    onClick={nextStep}
                                    className="absolute zoom bottom-8 py-3 rounded-xl left-4 max-w-[calc(100%-32px)] flex items-center justify-center w-full bg-[#323131]">
                                    Next
                                </div>
                            </div>
                        )}
                        {step === 6 && (
                            <div className="flex flex-col h-full w-full ">
                                <div className="w-full flex items-center gap-3">
                                    <input
                                        type="text"
                                        className="basis-[95%] px-3 rounded-xl bg-[#080808] border py-3"
                                    />
                                    <div>km</div>
                                </div>
                                <div
                                    onClick={nextStep}
                                    className="absolute zoom bottom-8 py-3 rounded-xl left-4 max-w-[calc(100%-32px)] flex items-center justify-center w-full bg-[#323131]">
                                    Next
                                </div>
                            </div>
                        )}
                        {step === 7 && (
                            <SwitchesStep
                                switches={item.switches as string[]}
                                nextStep={nextStep}
                            />
                        )}
                    </div>
                ))}
                {step === 8 ? <PhotoStep onChange={setFiles} /> : null}
            </section>
        </main>
    );
}

export default App;
