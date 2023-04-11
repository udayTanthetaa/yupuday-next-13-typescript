import { Apple } from './Apple';

const LabPage = async () => {
    return (
        <>
            <div className="flex flex-col items-center w-full min-h-screen space-y-5 place-content-center">
                <Apple />
            </div>
        </>
    );
};

export default LabPage;
