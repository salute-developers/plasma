import React, { useCallback } from 'react';
import styled from 'styled-components';
import { primary, tertiary } from '@salutejs/plasma-tokens-b2c';

const Root = styled.div`
    display: flex;
    gap: 1rem;
    margin: 0;
    margin-top: 1rem;
`;

interface ColorTypeTabItemProps {
    isSelectedItem: boolean;
}

const ColorTypeTabItem = styled.button<ColorTypeTabItemProps>`
    font-family: inherit;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;

    color: ${({ isSelectedItem }) => (isSelectedItem ? primary : tertiary)};
`;

interface TypeTabsProps<T> {
    items: readonly T[];
    selectedItem: T;
    onSelectTab: (value: T) => void;
}

export const TypeTabs = <T extends string>({ items, selectedItem, onSelectTab }: TypeTabsProps<T>) => {
    const onClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const { name } = event.currentTarget;

            onSelectTab?.(name as T);
        },
        [onSelectTab],
    );

    return (
        <Root>
            {items.map((item, index) => (
                <ColorTypeTabItem
                    key={`${index}_${item}`}
                    onClick={onClick}
                    isSelectedItem={selectedItem === item}
                    name={item}
                >
                    {item}
                </ColorTypeTabItem>
            ))}
        </Root>
    );
};
