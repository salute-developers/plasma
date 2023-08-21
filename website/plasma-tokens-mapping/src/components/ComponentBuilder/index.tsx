import { styled } from '@linaria/react';
// @ts-ignore
// import { h1 } from '@salutejs/plasma-typo/lib/esm/tokens';
import { h1 } from '@salutejs/plasma-typo';
import { ReactNode } from 'react';

import { ComponentTheme, ModifierTokensAPI } from '../../state';
import { ModifierBuilder } from '../ModifierBuilder/client';
import { SaveTheme } from '../Save/client';

const Root = styled.div`
    padding: 1rem;
`;

const Headline1 = styled.h1`
    ${h1 as Record<string, string>}
    margin: 0;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

interface ComponentBuilderProps {
    name: string;
    theme: ComponentTheme;
    themeSwitcher: ReactNode;
    variationsAPI: Record<string, ModifierTokensAPI>;
}

export function ComponentBuilder({ name, theme, themeSwitcher, variationsAPI }: ComponentBuilderProps) {
    const { variations } = theme;

    const mods = [...new Set(Object.keys(variations).concat(Object.keys(variationsAPI)))];

    return (
        <Root>
            <Header>
                <Headline1>Component: {name}</Headline1>
                <SaveTheme />
                {themeSwitcher}
            </Header>
            {mods.map((modName) => {
                // const modifier = variations[modName];
                return (
                    <ModifierBuilder
                        key={modName}
                        componentName={name}
                        name={modName}
                        tokenAPI={variationsAPI[modName]}
                    />
                );
            })}
        </Root>
    );
}
