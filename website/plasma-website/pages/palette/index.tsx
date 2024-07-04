import React from 'react';
import { ToastProvider } from '@salutejs/plasma-b2c';
import Head from 'next/head';

import { Palette } from '../../components/palette/PalettePage';

export default function Home() {
    return (
        <ToastProvider>
            <Head>
                <title>Colors</title>
            </Head>
            <Palette />
        </ToastProvider>
    );
}
