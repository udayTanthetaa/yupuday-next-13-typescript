import { cx } from 'class-variance-authority';
import { Button } from '@/components/ui';

const LabPage = async () => {
    const shadow =
        'shadow-[inset_1.5px_1.5px_0.5px_1px_rgba(58,58,60,0.8),1.5px_1.5px_3.5px_0.5px_rgba(28,28,30,0.8)]';
    return (
        <>
            <div className="flex flex-col items-center w-full min-h-screen space-y-5 place-content-center">
                {/* <Button /> */}

                {/* <div
                    className={cx(
                        'flex h-64 w-96 grid-cols-1 flex-col place-content-center items-center rounded-3xl bg-gradient-to-br from-isSystemDarkSecondary to-isSystemDarkPrimary p-5',
                        shadow
                    )}
                >
                    <div className="py-1 font-serif text-3xl text-center font-400 text-isSystemLightSecondary">
                        Heading
                    </div>

                    <div className="py-1 leading-tight text-center text-md font-300 text-isLabelDarkSecondary">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </div>
                </div> */}

                <div className="w-full h-16 max-w-6xl p-px rounded-xl bg-gradient-to-br from-isLabelDarkSecondary to-isSystemDarkPrimary">
                    <div className="w-full h-full rounded-xl bg-isBlack"></div>
                </div>

                <div className="h-36 w-full max-w-6xl rounded-xl bg-isSystemDarkPrimary/50 bg-[url('/grid.svg')] p-px"></div>

                <div className="relative w-full max-w-6xl p-3 border-2 border-dashed h-36 rounded-xl border-isLabelDarkTertiary bg-isBlack">
                    <div className="absolute -top-[0.7rem] left-3 flex gap-x-1 uppercase leading-none tracking-wide md:left-5">
                        <div className="p-px rounded-full bg-gradient-to-br from-isLabelDarkSecondary to-isSystemDarkPrimary">
                            <div className="px-2 text-sm rounded-full shadow-sm bg-gradient-to-br from-isSystemDarkPrimary to-isBlack font-700 text-isLabelDarkSecondary">
                                Demo
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row space-x-3">
                    <div className="rounded-full bg-isGreenLightEmphasis  px-2 py-[0.2rem] text-xs font-700 uppercase leading-none tracking-widest text-isWhite">
                        Success
                    </div>
                    <div className="rounded-full bg-isRedLightEmphasis px-2 py-[0.2rem] text-xs font-700 uppercase leading-none tracking-widest text-isWhite">
                        Error
                    </div>
                    <div className="rounded-full bg-isOrangeLightEmphasis  px-2 py-[0.2rem] text-xs font-700 uppercase leading-none tracking-widest text-isWhite">
                        Warning
                    </div>
                </div>

                <div className="flex flex-row space-x-3">
                    <div className="rounded-full bg-isSystemDarkPrimary px-2 py-[0.2rem] text-xs font-700 uppercase leading-none tracking-widest text-isSystemLightPrimary">
                        General
                    </div>
                    <div className="rounded-full bg-isBlueLight px-2 py-[0.2rem] text-xs font-700 uppercase leading-none tracking-widest text-isSystemLightPrimary">
                        Info
                    </div>
                </div>
            </div>
        </>
    );
};

export default LabPage;
