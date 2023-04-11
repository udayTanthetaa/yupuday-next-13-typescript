import { Apple } from './Apple';

const LabPage = async () => {
    return (
        <>
            <div className="flex flex-col items-center w-full min-h-screen p-3 space-y-5 place-content-center bg-isSystemLightPrimary text-isSystemDarkSecondary">
                <Apple />
            </div>
        </>
    );
};

export default LabPage;
