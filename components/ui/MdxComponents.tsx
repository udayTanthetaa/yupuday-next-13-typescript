import Link from 'next/link';
import Image from 'next/image';
import { CopyCodeButton } from './CopyCodeButton';

export const getMDXComponents = ({ params }) => {
    return {
        Hello: (props) => {
            return <div>{props.content}</div>;
        },
        a: (props) => {
            const Href = props.href;

            if (Href.startsWith('.')) {
                return (
                    <Link
                        className="inline-block transition duration-300 ease-in-out border-b-2 border-transparent cursor-pointer text-isGreenDark hover:border-isGreenDarkEmphasis"
                        href={`/blog/${params.ship}/${Href.slice(
                            2,
                            Href.length - 3
                        )}`}
                    >
                        {props.children}
                    </Link>
                );
            } else if (Href.startsWith('#')) {
                return (
                    <div className="flex flex-row items-center cursor-pointer group">
                        <div className="absolute left-0 -ml-[1.7rem] font-sans font-800 text-isLabelDarkSecondary opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                            #
                        </div>
                        <a
                            target="_self"
                            rel="noopener noreferrer"
                            {...props}
                        />
                    </div>
                );
            } else {
                return (
                    <a
                        className="relative inline-block transition-all duration-300 ease-in-out border-b-2 border-transparent cursor-pointer text-isBlueDarkEmphasis hover:border-isBlueDarkEmphasis"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                    />
                );
            }
        },
        p: (props) => {
            return <p className="leading-relaxed" {...props} />;
        },
        h1: (props) => {
            return <></>;
        },
        h2: (props) => {
            return (
                <h3
                    className="relative mt-3 text-xl transition-all duration-300 ease-in-out border-t-2 border-isSeparatorDarkTransparent pt-9 font-700 text-isSystemLightTertiary hover:text-isLabelDarkPrimary sm:text-2xl"
                    {...props}
                />
            );
        },
        h3: (props) => {
            return (
                <h4
                    className="text-xl font-medium text-isLabelDarkPrimary"
                    {...props}
                />
            );
        },
        h4: (props) => {
            return (
                <h5
                    className="text-lg font-medium text-isLabelDarkPrimary"
                    {...props}
                />
            );
        },
        hr: (props) => {
            return (
                <hr
                    className="relative border-t-2 border-isSeparatorDark pt-9 sm:pt-10"
                    {...props}
                />
            );
        },
        em: (props) => {
            return <span className="italic " {...props} />;
        },
        strong: (props) => {
            return <strong className="font-600" {...props} />;
        },
        blockquote: (props) => {
            return (
                <blockquote
                    className="rounded-r-xl border-l-[6px] border-isBlueDark bg-isSystemDarkTertiary py-2 pl-4 pr-3 italic shadow-sm transition-all duration-300 ease-in-out hover:border-isGreenDark hover:bg-isWhite hover:bg-opacity-10 xl:!col-start-2 xl:!col-end-3"
                    {...props}
                />
            );
        },
        del: (props) => {
            return (
                <del
                    className="line-through text-isLabelDarkSecondary"
                    {...props}
                />
            );
        },
        li: (props) => {
            return <li className=" sm:ml-2" {...props} />;
        },
        ul: (props) => {
            return (
                <div
                    className="space-y-3 md:space-y-1 [&>li]:relative [&>li]:pl-0 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-transparent [li>&]:mt-3"
                    {...props}
                />
            );
        },
        ol: (props) => {
            return <div className="pl-10 space-y-3 list-decimal " {...props} />;
        },
        img: (props) => {
            return (
                <img
                    {...props}
                    className="object-cover rounded-md md:rounded-lg lg:rounded-xl"
                />
            );
        },
        code: (props) => {
            return (
                <code
                    className="inline-block rounded-lg border border-isFillLightPrimary bg-isSystemDarkTertiary px-2 text-[0.85rem] leading-tight text-isSystemLightTertiary shadow-sm transition-all duration-300 ease-in-out hover:bg-isSystemDarkSecondary hover:text-isSystemLightPrimary"
                    {...props}
                />
            );
        },
        pre: (props) => {
            let code = ``;

            for (let i = 0; i < props.children.props.children.length; i++) {
                if (typeof props.children.props.children[i] === 'string') {
                    code += props.children.props.children[i];
                } else {
                    if (
                        typeof props.children.props.children[i].props
                            .children === 'string'
                    ) {
                        code += props.children.props.children[i].props.children;
                    } else if (
                        props.children.props.children[i].props.children
                            .length === undefined
                    ) {
                        code +=
                            props.children.props.children[i].props.children
                                .props.children;
                    } else {
                        for (
                            let j = 0;
                            j <
                            props.children.props.children[i].props.children
                                .length;
                            j++
                        ) {
                            if (
                                typeof props.children.props.children[i].props
                                    .children[j] === 'string'
                            ) {
                                code +=
                                    props.children.props.children[i].props
                                        .children[j];
                            } else {
                                code +=
                                    props.children.props.children[i].props
                                        .children[j].props.children;
                            }
                        }
                    }
                }
            }

            return (
                <>
                    <div className="absolute right-0 top-0 mr-1 mt-[0.15rem] drop-shadow-sm">
                        <CopyCodeButton code={code} />
                    </div>
                    <pre
                        className="py-2 overflow-x-auto font-mono text-xs leading-6 shadow-sm bg-isSystemDarkSecondary sm:text-sm"
                        {...props}
                    />
                </>
            );
        },
    };
};
