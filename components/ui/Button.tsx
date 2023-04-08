import { cx } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const Button = () => {
    return (
        <button
            className={cx(
                'text-md rounded-lg bg-gradient-to-br from-isSystemDarkSecondary to-isSystemDarkPrimary px-3 py-2 font-600 leading-none text-isSystemLightTertiary shadow-[inset_1.5px_1.5px_0.5px_0.3px_rgba(58,58,60,0.8)] transition-all duration-300 ease-in-out hover:text-isSystemLightSecondary'
            )}
        >
            button
        </button>
    );
};
