import React from 'react';
import { ToastProvider } from '@salutejs/plasma-b2c';
import Head from 'next/head';

import { Pallete } from '../components/colors/Pallete';

export default function Home() {
    return (
        <ToastProvider>
            <Head>
                <title>Colors</title>
            </Head>
            <Pallete />
        </ToastProvider>
    );
}
