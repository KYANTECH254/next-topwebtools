
import { Metadata } from 'next';

import { PropsWithChildren, Suspense } from 'react';
import '../styles/main.css';
import React from 'react';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/NavBar';
import { Toaster } from '../components/ui/Toasts/toaster';

const title = 'Topwetools';
const description = 'All the tools you need.';

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description
    }
};

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="assets/favicon/site.webmanifest" />
            </head>
            <body className="bg-black">
                <Navbar />
                <main
                    id="skip"
                    className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
                >
                    {children}
                </main>
                <Footer />
                <Suspense>
                    <Toaster />
                </Suspense>
            </body>
        </html>
    );
}
