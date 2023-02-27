import { useCallback } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { DeviceThemeProvider, ToastProvider, Container, NeuHeader } from '@salutejs/plasma-ui';

import { GlobalStyle } from '../components';

if (typeof window !== 'undefined') {
    // @ts-ignore
    import('@salutejs/spatial-navigation');
}

function MyApp({
    Component,
    pageProps,
    router: r,
}: AppProps<{
    back: boolean;
    title: string;
    subtitle: string;
}>) {
    const router = useRouter();

    const onArrowClick = useCallback(() => {
        if (pageProps.back) {
            router.back();
        }
    }, [router, pageProps]);

    return (
        <>
            <Head>
                <title>Demo Canvas App</title>
            </Head>
            <DeviceThemeProvider>
                <ToastProvider>
                    <Container>
                        <NeuHeader
                            arrow={pageProps.back ? 'back' : 'minimize'}
                            onArrowClick={onArrowClick}
                            title={pageProps.title}
                            subTitle={pageProps.subtitle}
                        />
                        <Component {...pageProps} />
                        <GlobalStyle />
                    </Container>
                </ToastProvider>
            </DeviceThemeProvider>
        </>
    );
}

export default MyApp;
