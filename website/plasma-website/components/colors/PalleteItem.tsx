import React, { useState } from 'react';
import styled from 'styled-components';

export type colorItem = {
    colors: {
        [key in number | string]: string;
    };
    name: string;
};

const classes = {
    active: 'palette-active'
}

const StyledMask = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: hidden;
    opacity: 0;
    z-index: 2;
    position: absolute;
    inset: 0;

    &.${classes.active}{
        opacity: 1;
    }
`;

const StyledMaskItem = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 1rem;
    color: rgba(0, 0, 0, 0);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        box-shadow: 0rem 0rem 0 1rem #000;
        border-radius: 0.5rem;
        box-sizing: border-box;
        border-left: 0.0625rem solid black;
        border-right: 0.0625rem solid black;
        cursor: pointer;
    }

    &:hover{
        color: rgba(0, 0, 0, 0.5);
    }
`;

const StyledContent  = styled.div`
    position: absolute;
    inset: 0;
    padding: 2rem;
    display: flex;
    z-index: 1;
    justify-content: flex-end;
`;

const StyledText = styled.div`
    opacity: 0.3;
    font-size: 4rem;
    color: black;
    font-weight: 400;

    &.${classes.active}{
        opacity: 1;
    }
`;

const StyledColorItem = styled.div<{colors: any}>`
        background: linear-gradient(
            90deg,
            ${({colors}) => colors?.[1000]} 5%,
            ${({colors}) => colors?.[800]} 30%,
            ${({colors}) => colors?.[500]} 50%,
            ${({colors}) => colors?.[250]} 70%,
            ${({colors}) => colors?.[100]} 95%
        );
        width: 100%;
        height: 13.125rem;
        border-radius: 0.5rem;
        position: relative;
    `;

export const PalleteItem: React.FC<{ colorItem: colorItem, handlerSetColorPage: (color?: string, colorItem?: colorItem) => void }> = ({ colorItem, handlerSetColorPage }) => {
    const [hover, setHover] = useState(false);

    const colorsKeys = Object.keys(colorItem.colors).reverse();

    return (
        <StyledColorItem colors={colorItem.colors} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <StyledMask className={hover ? classes.active : ''}>
                {colorsKeys.map((colorKey) => (
                    <StyledMaskItem key={colorKey} onClick={() => {handlerSetColorPage(colorItem.colors[colorKey], colorItem); setHover(false);}}>
                        {colorKey}
                    </StyledMaskItem>
                ))}
            </StyledMask>
            <StyledContent>
                <StyledText className={hover ? classes.active : ''}>{colorItem.name}</StyledText>
            </StyledContent>
        </StyledColorItem>
    );
};
