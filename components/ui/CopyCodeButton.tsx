'use client';

import { useState, useEffect } from 'react';
import { cx } from 'class-variance-authority';
import { Tailwind } from '../utilities';
import { Copy, Check } from '../icons';

export const CopyCodeButton = ({ code }) => {
    const [isCopied, setIsCopied] = useState(false);

    const iconButton = new Tailwind({
        classes:
            'p-[0.25rem] drop-shadow-sm rounded-lg cursor-pointer h-6 bg-transparent backdrop-blur-sm transition-all duration-300 ease-in-out',
    });

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    }, [isCopied]);

    return (
        <div
            onClick={async () => {
                await navigator.clipboard.writeText(code);
                setIsCopied(true);
            }}
            className={cx(
                'flex flex-col transition-all duration-500 ease-in-out',
                isCopied ? 'rotate-[-360deg]' : ''
            )}
        >
            {isCopied ? (
                <Check
                    classes={cx(
                        iconButton.classes,
                        'fill-isGreenDark hover:fill-isGreenDarkEmphasis'
                    )}
                />
            ) : (
                <Copy
                    classes={cx(
                        iconButton.classes,
                        'fill-isSystemLightTertiary hover:fill-isSystemLightPrimary'
                    )}
                />
            )}
        </div>
    );
};
