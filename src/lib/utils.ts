import { type ClassValue,clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const appURL = process.env.NEXT_PUBLIC_APP_URL!

// Metadata
export function constructMetadata(): Metadata {
    return {
        metadataBase: new URL(appURL),
        // manifest: '/manifest.json',
        title: {
            default: 'Pranjal Jain - Portfolio',
            template: 'Pranjal Jain - %s', // it helps in dynamic titles for different pages
        },
        description:
            'This is the portfolio website of Pranjal Jain, a Software Engineer specializing in Full-Stack Development.',
        applicationName: 'Pranjal Jain',
        keywords: [
            'Pranjal Jain',
            'Pranjal',
            'Jain',
            'Portfolio',
            'Pranjal Jain Portfolio',
            'pranjaljain.dev',
            'pranjaljain',
            'Software Engineer',
            'Full-Stack Developer',
            'Web Developer',
            'React Developer',
            'Next.js Developer',
            'JavaScript Developer',
            'TypeScript Developer',
            'Open Source Contributor',
            'Tech Enthusiast',
        ],
        openGraph: {
            title: 'Pranjal Jain - Portfolio',
            description:
                'This is the portfolio website of Pranjal Jain, a Software Engineer specializing in Full-Stack Development.',
            url: appURL,
            siteName: 'Pranjal Jain - Portfolio',
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: '/opengraph-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'OpenGraph Image',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Pranjal Jain - Portfolio',
            description:
                'This is the portfolio website of Pranjal Jain, a Software Engineer specializing in Full-Stack Development.',
            images: [
                {
                    url: '/twitter-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Twitter Image',
                },
            ],
            creator: '@PranjalJain03',
        },
    }
}
