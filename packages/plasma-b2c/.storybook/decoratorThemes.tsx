import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { b2c } from '@salutejs/plasma-tokens-b2c';
import { plasma_b2c__light, plasma_b2c__dark } from '@salutejs/plasma-themes';
import { link, linkHover, linkActive } from '@salutejs/plasma-tokens-web';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

/* stylelint-disable */
const DocumentStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        background-color: var(--background-primary);
    }
    a {
        color: ${link};
        text-decoration: underline;

        &:hover {
            color: ${linkHover};
        }
      
        &:active {
            color: ${linkActive};
        }
    }
`;
/* stylelint-enable */

const OldTypo = createGlobalStyle(b2c);
const TypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);

const themes = {
    light: createGlobalStyle(plasma_b2c__light),
    dark: createGlobalStyle(plasma_b2c__dark),
};

export const withTheme = (Story, context) => {
    const Theme = themes[context.globals.theme];

    return (
        <>
            {context.globals.typoVersion === 'standard' ? (
                <>
                    <TypoStyle breakWord={context.globals.breakWord === 'yes'} />
                    <CompatibleTypoStyle />
                </>
            ) : (
                <OldTypo />
            )}
            <Theme />
            <DocumentStyle />
            <Story {...context} />
        </>
    );
};
