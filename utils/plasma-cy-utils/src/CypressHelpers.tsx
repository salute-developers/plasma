import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { mount as cyMount } from '@cypress/react';
// plasma-web
import { web } from '@salutejs/plasma-tokens-web/typo';
import { light as webLight } from '@salutejs/plasma-tokens-web/themes';
// plasma-ui
import { darkSber } from '@salutejs/plasma-tokens/themes';
// B2B
import { light as b2bLight } from '@salutejs/plasma-tokens-b2b/themes';
// plasma-b2c
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

// TODO: better naming
const TypoThemeStyle = createGlobalStyle(web);
const WebLightThemeStyle = createGlobalStyle(webLight);

// B2B
const B2BLightThemeStyle = createGlobalStyle(b2bLight);

const ThemeStyle = createGlobalStyle(darkSber);

const StandardTypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);
const ColorB2CStyle = createGlobalStyle(dark);

export const getComponent = function <T = PropsWithChildren<{}>>(componentName: string): React.FC<T> {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const pkgName = Cypress.env('package') as string | undefined;

    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }

    function check<T>(component: T): asserts component is NonNullable<T> {
        if (!component) {
            throw new Error(`Library ${pkgName} has no ${componentName}`);
        }
    }

    if (pkgName === 'plasma-ui') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        const pkg = require('../../../packages/plasma-ui') as Record<string, React.FC<T> | undefined>;
        const component = pkg[componentName];

        check(component);

        return component;
    }

    if (pkgName === 'plasma-web') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        const pkg = require('../../../packages/plasma-web') as Record<string, React.FC<T> | undefined>;
        const component = pkg[componentName];

        check(component);

        return component;
    }

    if (pkgName === 'plasma-b2c') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        const pkg = require('../../../packages/plasma-b2c') as Record<string, React.FC<T> | undefined>;
        const component = pkg[componentName];

        check(component);

        return component;
    }

    throw new Error(`Library ${pkgName} is not required in plasma-core/CypressHelpers:getComponent`);
};

interface CYTDec {
    noSSR?: boolean;
}

export const CypressTestDecorator: React.FC<PropsWithChildren<CYTDec>> = ({ noSSR, children }) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const pkgName = Cypress.env('package') as string;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const tokens = Cypress.env('tokens') as string;
    const SSRProvider = getComponent('SSRProvider');

    const SSR: React.FC<PropsWithChildren<CYTDec>> = ({ noSSR: _noSSR, children }) => {
        if (_noSSR) {
            return <>{children}</>;
        }
        return <SSRProvider>{children}</SSRProvider>;
    };

    if (pkgName === 'plasma-ui') {
        const DeviceThemeProvider = getComponent('DeviceThemeProvider');

        return (
            <DeviceThemeProvider>
                <SSR noSSR={noSSR}>
                    <ThemeStyle />
                    {children}
                </SSR>
            </DeviceThemeProvider>
        );
    }

    // B2B
    if (pkgName === 'plasma-web' && tokens === 'plasma-tokens-b2b') {
        return (
            <SSR noSSR={noSSR}>
                <StandardTypoStyle />
                <CompatibleTypoStyle />
                <B2BLightThemeStyle />
                {children}
            </SSR>
        );
    }

    if (pkgName === 'plasma-web') {
        return (
            <SSR noSSR={noSSR}>
                <TypoThemeStyle />
                <WebLightThemeStyle />
                {children}
            </SSR>
        );
    }

    if (pkgName === 'plasma-b2c') {
        return (
            <SSR noSSR={noSSR}>
                <StandardTypoStyle />
                <CompatibleTypoStyle />
                <ColorB2CStyle />
                {children}
            </SSR>
        );
    }

    return <>{children}</>;
};

export const PadMe = styled.div`
    padding: 5px;
`;

export const SpaceMe = styled.span`
    padding: 5px;
`;

export const withNoAnimation = <P extends {}>(Comp: React.FC<P>) =>
    styled(Comp)`
        animation: none !important;
        /* stylelint-disable-next-line selector-max-universal */
        & * {
            animation: none !important;
        }
    ` as React.FC<P>;

export const mount: typeof cyMount = (...args) => {
    const [jsx, opts = {}] = args;

    opts.stylesheets = (opts?.stylesheets || ([] as string[])).concat(
        'https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.1.0.css',
        'https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.1.0.css',
    );

    const cm = cyMount(jsx, opts);

    cy.waitForResources('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.1.0.css');
    cy.waitForResources('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.1.0.css');
    cy.waitForResources('SBSansText.0.1.0.css', 'SBSansDisplay.0.1.0.css', { timeout: 1500 });

    return cm;
};

// NOTE: check cypress/support/index.d.ts
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    export namespace Cypress {
        interface Chainable {
            waitForResources(...resources: resourceOrOption[]): Chainable;
        }
    }
}

export type resourceOrOption =
    | string
    | {
          timeout?: number;
      };

interface PortalProps {
    id: string;
}

export const Portal: React.FC<PropsWithChildren<PortalProps>> = ({ id, children }) => {
    const el = document.createElement('div');

    React.useEffect(() => {
        const portalRoot = document.getElementById(id);

        portalRoot && portalRoot.appendChild(el);

        return () => {
            portalRoot && portalRoot.removeChild(el);
        };
    }, [el, id]);

    return createPortal(children, el);
};
