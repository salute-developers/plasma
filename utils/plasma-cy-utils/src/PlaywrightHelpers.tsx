import React, { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);
export const ColorB2CStyle = createGlobalStyle(dark);

// eslint-disable-next-line func-names
export const getComponentPw = function <T = PropsWithChildren<{}>>(componentName: string): React.FC<T> {
    const pkgName = process.env.PACKAGE as string | undefined;

    if (!pkgName) {
        throw new Error('Add "PACKAGE" env to your Playwright config');
    }

    function check<T>(component: T): asserts component is NonNullable<T> {
        if (!component) {
            throw new Error(`Library ${pkgName} has no ${componentName}`);
        }
    }

    if (pkgName === 'plasma-b2c') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        const pkg = require('../../../packages/plasma-b2c') as Record<string, React.FC<T> | undefined>;
        const component = pkg[componentName];

        check(component);

        return component;
    }

    throw new Error(`Library ${pkgName} is not required in plasma-core/PlaywrightHelpers:getComponent`);
};

interface CYTDec {
    noSSR?: boolean;
}

const SSRProvider = getComponentPw('SSRProvider');

const SSR: React.FC<PropsWithChildren<CYTDec>> = ({ noSSR: _noSSR, children }) => {
    if (_noSSR) {
        return <>{children}</>;
    }
    return <SSRProvider>{children}</SSRProvider>;
};

export const PlaywrightTestDecorator: React.FC<PropsWithChildren<CYTDec>> = ({ noSSR, children }) => {
    const pkgName = process.env.PACKAGE as string;

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
