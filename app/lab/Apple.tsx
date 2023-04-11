'use client';

import Image from 'next/image';
import { cx } from 'class-variance-authority';
import { useState } from 'react';

export const Apple = () => {
    const [active, setActive] = useState(0);
    const animate = 'transition-all duration-200 ease-in-out';

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
            <div className="flex flex-col items-center w-full max-w-6xl p-3 space-y-2 rounded-3xl bg-isSystemDarkPrimary/70">
                <div className="flex flex-row space-x-2">
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
                </div>

                <div className="flex flex-row">
                    {ctaIcons.map((ctaIcon, ctaIconIndex) => {
                        return (
                            <div
                                onClick={() => {
                                    setActive(ctaIconIndex);
                                }}
                                key={ctaIconIndex}
                                className="group relative flex h-[4rem] w-[4rem] flex-col place-content-center place-items-center items-center"
                            >
                                <div className="absolute h-[3rem] w-[3rem]">
                                    <Image
                                        fill
                                        {...ctaIcon.image}
                                        className="rounded-[0.75rem] object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* <div className="flex flex-row">
                    {ctaIcons.map((ctaIcon, ctaIconIndex) => {
                        return (
                            <div
                                onClick={() => {
                                    setActive(ctaIconIndex);
                                }}
                                key={ctaIconIndex}
                                className="group relative flex h-[4rem] w-[4rem] flex-col place-content-center place-items-center items-center"
                            >
                                <div
                                    className={cx(
                                        animate,
                                        'absolute h-[3.6rem] w-[3.6rem] rounded-[0.875rem]',
                                        active === ctaIconIndex
                                            ? 'bg-gradient-to-br from-isGreenDarkEmphasis to-isGreenLightEmphasis'
                                            : 'bg-transparent group-hover:bg-gradient-to-br group-hover:from-isSystemDarkTertiary group-hover:to-isSystemDarkPrimary'
                                    )}
                                />
                                <div className="absolute h-[3rem] w-[3rem]">
                                    <Image
                                        fill
                                        {...ctaIcon.image}
                                        className="rounded-[0.75rem] object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </>
    );
};
