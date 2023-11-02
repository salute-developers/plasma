import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { b2c, dark, light } from '@salutejs/plasma-tokens-b2c';
import { link, linkHover, linkActive, surfaceSolid01 } from '@salutejs/plasma-tokens-web';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

/* stylelint-disable */
const DocumentStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        background-color: ${surfaceSolid01};
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
    light: createGlobalStyle(light),
    dark: createGlobalStyle(dark),
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
