import React from 'react';
import { ToastProvider } from '@salutejs/plasma-b2c';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Palette } from '../components/palette/PalettePage';
import { PaletteColorPage } from '../components/palette/PaletteColorPage';

export default function Home() {
    const router = useRouter();

    const color = router.query?.color;
    const code = router.query?.code;

    return (
        <ToastProvider>
            <Head>
                {color && code ? (
                    <title>
                        {color} {code}
                    </title>
                ) : (
                    <title>Colors</title>
                )}
            </Head>
            {color && code ? <PaletteColorPage color={String(color)} code={String(code)} /> : <Palette />}
        </ToastProvider>
    );
}
