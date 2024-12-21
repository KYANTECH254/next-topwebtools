import { Metadata } from 'next';
import { PropsWithChildren, Suspense } from 'react';
import '../styles/main.css';
import React from 'react';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/NavBar';
import { Toaster } from '../components/ui/Toasts/toaster';

const title = 'TopWebTools - API Services for Developers';
const description = 'Access free and paid APIs including the Deriv Aviator API and Aviator API for provably fair systems.';

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        images: ['/favicon/favicon-32x32.png'],
    }
};

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="keywords"
                    content="API, free API, paid API, Deriv Aviator API, provably fair system, developers tools"
                />
                <meta name="author" content="TopWebTools" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
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
