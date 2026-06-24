import React, { useState, createContext, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { plasma, ruler, sage, mage, soulmate } from '@salutejs/plasma-typo';
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { text } from '@salutejs/plasma-tokens-b2c';
import { b2c } from '@salutejs/plasma-tokens-b2c/typo';

import { SBSansTextMono } from './components/mixins';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
    }

    body {
        margin: 0;
    }

    /* stylelint-disable-next-line selector-max-universal */
    * {
        ${SBSansTextMono};
    }
`;

const DarkThemeStyle = createGlobalStyle(dark);
const OldTypoStyle = createGlobalStyle(b2c);

const archetypeMap = {
    plasma: createGlobalStyle(plasma),
    ruler: createGlobalStyle(ruler),
    sage: createGlobalStyle(sage),
    mage: createGlobalStyle(mage),
    soulmate: createGlobalStyle(soulmate),
};

export type Archetype = keyof typeof archetypeMap;

const ThemeContext = createContext<{
    toggleArchetype: (value: Archetype) => void;
}>({
    toggleArchetype: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const GlobalStyle = ({ children }: any) => {
    const [archetype, setArchetype] = useState<Archetype>('plasma');

    const toggleArchetype = (value: Archetype) => {
        setArchetype(value);
    };

    const TypoStyle = archetypeMap[archetype];

    return (
        <ThemeContext.Provider
            value={{
                toggleArchetype,
            }}
        >
            <DocumentStyle />
            <DarkThemeStyle />
            <TypoStyle />
            <OldTypoStyle />
            {children}
        </ThemeContext.Provider>
    );
};
