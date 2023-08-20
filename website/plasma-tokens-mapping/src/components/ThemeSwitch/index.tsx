import { styled } from '@linaria/react';
import { use } from 'react';
import { getThemeNames } from '../../data';
import Link from 'next/link';

// @ts-ignore
import { bodyM } from '@salutejs/plasma-typo/lib/esm/tokens';

const Root = styled.div`
    ${bodyM}
`;

interface ThemeSwitchProps {
    active: string;
}

export const ThemeSwitch = ({ active }: ThemeSwitchProps) => {
    const themeNames = use(getThemeNames());

    return (
        <Root>
            <span>Theme: </span>
            <menu>
                {themeNames.map((name) => {
                    if (name == active) {
                        return <li key={name}>{name}</li>
                    }
                    return <li key={name}><Link href={`?theme=${name}`}>{name}</Link></li>
                })}
            </menu>
        </Root>
    );
};
