'use client';

import Image from 'next/image';
import { cx } from 'class-variance-authority';
import { useState } from 'react';

export const Apple = () => {
    const [active, setActive] = useState(0);
    const animate = 'transition-all duration-200 ease-in-out';
    const shadow = 'shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]';

    const ctaIcons = [
        {
            name: 'arc',
            image: {
                src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62c8b436355950582b0f0695_arc-logo.webp',
                alt: 'logo',
            },
            subIcons: [
                {
                    image: {
                        src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62fea18b827b4062f0c095a9_index.png',
                        alt: 'logo',
                    },
                    title: 'Marco Cornacchia',
                    content: 'https://marcooo.xyz',
                },
                {
                    image: {
                        src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62fea18b827b4062f0c095a9_index.png',
                        alt: 'logo',
                    },
                    title: 'Marco Cornacchia',
                    content: 'https://marcooo.xyz',
                },
                {
                    image: {
                        src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62fea18b827b4062f0c095a9_index.png',
                        alt: 'logo',
                    },
                    title: 'Marco Cornacchia',
                    content: 'https://marcooo.xyz',
                },
                {
                    image: {
                        src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62fea18b827b4062f0c095a9_index.png',
                        alt: 'logo',
                    },
                    title: 'Marco Cornacchia',
                    content: 'https://marcooo.xyz',
                },
            ],
        },
        {
            name: 'figma',
            image: {
                src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62c909916f6892fbf32c42dc_figma.webp',
                alt: 'logo',
            },
            subIcons: [
                {
                    image: {
                        src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62fea18b827b4062f0c095a9_index.png',
                        alt: 'logo',
                    },
                    title: 'Marco Cornacchia',
                    content: 'https://marcooo.xyz',
                },
            ],
        },
        {
            name: 'webflow',
            image: {
                src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62c90418ca69f34b8f9203e2_webflow.webp',
                alt: 'logo',
            },
            subIcons: [
                {
                    image: {
                        src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62fea18b827b4062f0c095a9_index.png',
                        alt: 'logo',
                    },
                    title: 'Marco Cornacchia',
                    content: 'https://marcooo.xyz',
                },
            ],
        },
        {
            name: 'linear',
            image: {
                src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62c906ccc50496a2c7a8ac80_Linear.webp',
                alt: 'logo',
            },
            subIcons: [
                {
                    image: {
                        src: 'https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62fea18b827b4062f0c095a9_index.png',
                        alt: 'logo',
                    },
                    title: 'Marco Cornacchia',
                    content: 'https://marcooo.xyz',
                },
            ],
        },
    ];

    return (
        <>
            <div className="flex w-full max-w-xl flex-col place-content-center items-center space-y-2 rounded-[2rem] bg-isSystemLightSecondary py-3">
                {/* <div className="flex flex-row w-full space-x-2 overflow-x-hidden">
                    {ctaIcons[active].subIcons.map((subIcon, subIconIndex) => {
                        return (
                            <div
                                key={subIconIndex}
                                className="relative p-px rounded-lg bg-gradient-to-br from-isLabelDarkSecondary to-isSystemDarkPrimary"
                            >
                                <div className="flex flex-col px-2 py-1 rounded-lg bg-isBlack">
                                    <div className="w-full text-left">
                                        {subIcon.title}
                                    </div>
                                    <div className="w-full">
                                        {subIcon.content}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div> */}

                <div className="w-full px-3">
                    <div
                        className={cx(
                            'flex w-full flex-row space-x-2 overflow-x-hidden rounded-3xl border-2 border-isSystemLightTertiary bg-transparent pl-[0.6rem]',
                            animate
                        )}
                    >
                        {ctaIcons[active].subIcons.map(
                            (subIcon, subIconIndex) => {
                                return (
                                    <div
                                        key={subIconIndex}
                                        className="group flex flex-col place-content-center place-items-center items-center py-[0.6rem]"
                                    >
                                        <div
                                            className={cx(
                                                'flex flex-col rounded-2xl border-4 border-isWhite bg-isWhite px-2 py-1 hover:border-isBlueLight',
                                                shadow
                                            )}
                                        >
                                            <div className="w-full text-left font-500 text-isLabelLightPrimary">
                                                {subIcon.title}
                                            </div>
                                            <hr className="my-1 border-t border-isSeparatorLightTransparent" />
                                            <div className="w-full font-400 text-isLabelLightSecondary">
                                                {subIcon.content}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>

                <div className="w-full px-3">
                    <div
                        className={cx(
                            'z-10 flex w-full flex-row space-x-2 overflow-x-hidden rounded-3xl bg-isWhite p-1 pl-[0.6rem] hover:shadow-xl',
                            animate,
                            shadow
                        )}
                    >
                        {ctaIcons.map((ctaIcon, ctaIconIndex) => {
                            return (
                                <div
                                    onClick={() => {
                                        setActive(ctaIconIndex);
                                    }}
                                    key={ctaIconIndex}
                                    className="group flex h-[3.6rem] w-[3rem] flex-col place-content-center place-items-center items-center"
                                >
                                    <div
                                        className={cx(
                                            'relative h-[3rem] w-[3rem] rounded-2xl border-4',

                                            animate,
                                            active === ctaIconIndex
                                                ? 'border-isGreenLight'
                                                : 'border-0 group-hover:border-4 group-hover:border-isSystemLightTertiary'
                                        )}
                                    >
                                        <Image
                                            fill
                                            {...ctaIcon.image}
                                            className={cx(
                                                'rounded-xl object-cover',
                                                shadow
                                            )}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
