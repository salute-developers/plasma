import { styled } from '@linaria/react';
import { use } from 'react';
import { getThemeNames } from '../../data';

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
            <select defaultValue={active}>
                {themeNames.map((name) => {
                    return <option key={name}>{name}</option>;
                })}
            </select>
        </Root>
    );
};
