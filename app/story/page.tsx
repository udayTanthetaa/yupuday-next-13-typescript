const StoryPage = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full min-h-screen p-3 place-content-start">
                <div className="w-1 rounded-full h-96 bg-gradient-to-b from-isBlack to-isSystemDarkTertiary"></div>

                <div className="relative w-full my-12 h-96 rounded-3xl bg-gradient-to-br from-isSystemDarkTertiary to-isSystemDarkSecondary">
                    <div className="grid">

                    </div>
                </div>

                <div className="grid gap-1 py-12 text-6xl text-center lowercase font-700 text-isLabelDarkTertiary">
                    <div className="text-4xl italic">People just wanted</div>
                    <div className="font-sans text-transparent bg-gradient-to-r from-isMintDarkEmphasis to-isGreenDarkEmphasis bg-clip-text font-800">
                        convenience
                    </div>
                </div>

                <div className="w-1 rounded-full h-96 bg-gradient-to-b from-isBlack to-isSystemDarkTertiary"></div>

                <div className="grid gap-1 py-12 font-serif text-6xl text-center lowercase font-500 text-isLabelDarkTertiary">
                    <div>Then</div>
                    <div className="italic">Something</div>
                    <div className="pt-3 font-sans tracking-wide text-transparent uppercase bg-gradient-to-r from-isBlueDarkEmphasis to-isPurpleDarkEmphasis bg-clip-text font-800">
                        Crazy
                    </div>
                    <div>Happened</div>
                </div>
            </div>
        </>
    );
};

export default StoryPage;
