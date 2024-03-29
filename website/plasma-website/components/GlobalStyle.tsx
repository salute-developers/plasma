import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { body1, text, background } from '@salutejs/plasma-tokens-b2c';
import { plasma, compatible } from '@salutejs/plasma-typo';
import { light, dark } from '@salutejs/plasma-tokens-b2c/themes';

import { Context } from '../store';

const themes = {
    light: createGlobalStyle(light),
    dark: createGlobalStyle(dark),
};

const DocumentStyle = createGlobalStyle`
    html, body {
        box-sizing: border-box;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;
    }

    /* stylelint-disable-next-line selector-nested-pattern */
    body {
        ${body1}

        background: ${background};
        color: ${text};

        transition: padding 0.15s ease-in-out;
        will-change: contents;

        &.plasma-panel-open {
            padding-right: 23.5rem;
        }
    }
`;
const TypoStyle = createGlobalStyle(plasma);
const CompatibleTypoStyle = createGlobalStyle(compatible);

export const GlobalStyle = () => {
    const { state } = useContext(Context);
    const Theme = themes[state.theme];

    return (
        <>
            <DocumentStyle />
            <Theme />
            <TypoStyle />
            <CompatibleTypoStyle />
        </>
    );
};
