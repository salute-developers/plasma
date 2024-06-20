import React from 'react';
import styled, { css } from 'styled-components';

type IconInfoProps = {
    name: string;
    sizes: Record<'16' | '24' | '36', boolean>;
};

const StyledSizeList = styled.div`
    display: flex;
    column-gap: 0.75rem;
    padding-top: 0.5rem;
`;

const StyleSizeItem = styled.span<{ isDisable?: boolean }>`
    ${({ isDisable }) =>
        isDisable &&
        css`
            color: rgba(255, 255, 255, 0.28);
            transition: var(--color-transition);
        `}
`;

export const IconHoverDetails = ({ name, sizes }: IconInfoProps) => {
    return (
        <>
            {name}
            <StyledSizeList>
                {Object.entries(sizes).map(([key, value]) => (
                    <StyleSizeItem isDisable={!value} key={key}>
                        {key}
                    </StyleSizeItem>
                ))}
            </StyledSizeList>
        </>
    );
};
