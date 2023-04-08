import './globals.css';
import {
    Roboto_Flex,
    Roboto_Mono,
    Roboto_Serif,
    Roboto_Slab,
    Lora,
} from '@next/font/google';
import { cx } from 'class-variance-authority';

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'block',
    variable: '--font-lora',
});

const robotoSerif = Roboto_Serif({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'block',
    variable: '--font-robotoSerif',
});

const robotoSans = Roboto_Flex({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'block',
    variable: '--font-robotoSans',
});

const robotoMono = Roboto_Mono({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'block',
    variable: '--font-robotoMono',
});

export const metadata = {
    title: {
        default: 'Uday Khokhariya',
        template: '%s | Uday Khokhariya',
    },
    description: 'Shipper',
    openGraph: {
        title: 'Uday Khokhariya',
        description: 'Shipper',
        url: 'https://yupuday.vercel.app',
        siteName: 'Uday Khokhariya',
        images: [
            {
                url: 'https://yupuday.vercel.app/og.png',
                width: 1920,
                height: 1080,
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Uday Khokhariya',
        card: 'summary_large_image',
    },
    icons: {
        shortcut: '/favicon.ico',
    },
    verification: {
        google: 'to-be-added',
        yandex: 'to-be-added',
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body
                className={cx(
                    robotoSans.variable,
                    robotoMono.variable,
                    robotoSerif.variable,
                    lora.variable,
                    'flex flex-col place-content-start items-center bg-isBlack font-sans text-isLabelDarkSecondary'
                )}
            >
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
