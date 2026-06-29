import React from 'react';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { SSRProvider } from '@salutejs/sdds-serv/styled-components';
import { sdds_serv__dark as sddsServDarkTheme } from '@salutejs/sdds-themes';

const Theme = createGlobalStyle(sddsServDarkTheme);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SSRProvider>
            <Theme />
            <Component {...pageProps} />
        </SSRProvider>
    );
}
