import { cx } from 'class-variance-authority';
import { Button } from '@/components/ui';

const LabPage = async () => {
    const shadow =
        'shadow-[inset_1.5px_1.5px_0.5px_1px_rgba(58,58,60,0.8),1.5px_1.5px_3.5px_0.5px_rgba(28,28,30,0.8)]';
    return (
        <>
            <div className="flex flex-col items-center w-full min-h-screen place-content-center">
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
            </div>
        </>
    );
};

export default LabPage;
