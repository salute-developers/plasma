import React, { useState } from 'react';
import styled from 'styled-components';

export type colorItem = {
    colors: {
        [key in number | string]: string;
    };
    name: string;
    h: number;
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
    visibility: hidden;
    transition: opacity 1s, visibility 0s linear 1s;

    &.${classes.active}{
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }
`;

const StyledMaskItem = styled.div<{number: string | number}>`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 1rem;
    padding-left: 1rem;
    color: rgba(0, 0, 0, 0);
    transition: 0.2s;

    &::before {
        content: '';
        position: absolute;
        inset: -0.0625rem;
        box-shadow: 0;
        border-radius: 0rem;
        box-sizing: border-box;
        border-left: 0rem solid transparent;
        border-right: 0rem solid transparent;
        cursor: pointer;
        transition: ease-in 0.3s;
    }

    &.${classes.active}{
        transition: 0.2s;

        &:hover{
            color: ${({number}) => Number(number) > 500 ? 'white' : 'black'};
            opacity: 0.56;
            transition: 0.2s;
        }

        &::before {
            box-shadow: 0rem 0rem 0 1rem #000;
            border-radius: 0.5rem;
            border-left: 0.0625rem solid black;
            border-right: 0.0625rem solid black;
            inset: 0;
            transition: ease-in 0.3s;
        }
    }
`;

const StyledContent  = styled.div`
    position: absolute;
    inset: 0;
    padding: 2rem;
    display: flex;
    z-index: 1;
    flex-direction: column;
    align-items: flex-end;
`;

const StyledText = styled.div`
    opacity: 0.28;
    font-size: 4rem;
    padding: 1rem 0 1.65rem 0;
    color: black;
    font-weight: 400;
    transition: 0.3;
    transition: opacity 0.3s, visibility 0s linear 0.3s;
    overflow: hidden;

    &.${classes.active}{
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }
`;

const StyledSmall = styled.div`
    opacity: 0.28;
    font-size: 1rem;
    color: black;
    font-weight: 400;
    transition: 0.3;
    transition: opacity 0.3s, visibility 0s linear 0.3s;
    overflow: hidden;
    margin-top: 0.2rem;

    &.${classes.active}{
        opacity: 0.56;
        visibility: visible;
        transition-delay: 0s;
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

export const PalleteItem: React.FC<{ colorItem: colorItem, handlerSetColorPage: (color?: string, colorItem?: colorItem, index?: string) => void }> = ({ colorItem, handlerSetColorPage }) => {
    const [hover, setHover] = useState(false);

    const colorsKeys = Object.keys(colorItem.colors).reverse();

    return (
        <StyledColorItem colors={colorItem.colors} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <StyledMask className={hover ? classes.active : ''}>
                {colorsKeys.map((colorKey) => (
                    <StyledMaskItem number={colorKey} className={hover ? classes.active : ''} key={colorKey} onClick={() => {handlerSetColorPage(colorItem.colors[colorKey], colorItem, colorKey); setHover(false);}}>
                        {colorKey}
                    </StyledMaskItem>
                ))}
            </StyledMask>
            <StyledContent>
                <StyledText className={hover ? classes.active : ''}>{colorItem.name}</StyledText>
                <StyledSmall className={hover ? classes.active : ''}>H: {colorItem.h}</StyledSmall>
            </StyledContent>
        </StyledColorItem>
    );
};
