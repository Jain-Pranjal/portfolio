import './globals.css'

import type { Metadata } from 'next'

import { constructMetadata } from '@/lib/utils'

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
