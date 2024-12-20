import React, { PropsWithChildren } from 'react';
import LayoutProviders from '@theme/Layout/Provider';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import { useColorMode } from '@docusaurus/theme-common';
import { GlobalStyle } from '@salutejs/plasma-docs-ui';

// Set global styles for the entire layout.
function LayoutGlobalStyle() {
    // We can't use this context outside the Layout https://docusaurus.io/docs/api/themes/configuration#use-color-mode
    const { colorMode } = useColorMode();

    // Setting color tokens by theme
    return <GlobalStyle theme={colorMode} />;
}

const Layout = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <LayoutProviders>
            <LayoutGlobalStyle />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </LayoutProviders>
    );
};

export default Layout;
