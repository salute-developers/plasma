import React from 'react';
import { ToastProvider } from '@salutejs/plasma-b2c';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { PaletteColorPage } from '../../components/palette/PaletteColorPage';

export default function Page() {
    const router = useRouter();

    const color = router.query.query?.[1];
    const code = router.query.query?.[3];

    return (
        <ToastProvider>
            <Head>
                <title>
                    {color} {code}
                </title>
            </Head>
            <PaletteColorPage query={router.query.query} />
        </ToastProvider>
    );
}
