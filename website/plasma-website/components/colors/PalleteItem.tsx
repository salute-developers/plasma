import React, { useState } from 'react';
import styled from 'styled-components';

export type colorItemType = {
    colors: {
        [key in number | string]: string;
    };
    textColor: boolean[];
    name: string;
    h: number;
};

const classes = {
    active: 'palette-active',
};

const StyledColorItem = styled.div<{ colors: colorItemType['colors'] }>`
    /* stylelint-disable */
    background: linear-gradient(
        90deg,
        ${({ colors }) => colors?.[1000]} 5%,
        ${({ colors }) => colors?.[800]} 30%,
        ${({ colors }) => colors?.[500]} 50%,
        ${({ colors }) => colors?.[250]} 70%,
        ${({ colors }) => colors?.[100]} 95%
    );
    /* stylelint-enable */
    width: 100%;
    height: 13.125rem;
    border-radius: 0.5rem;
    position: relative;
`;

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

    &.${classes.active} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }
`;

const StyledMaskItem = styled.div<{ color: string }>`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 0.125rem;
    padding-left: 0.5rem;
    color: rgba(0, 0, 0, 0);
    transition: 0.2s;
    font-size: 0.75rem;
    font-weight: var(--plasma-typo-body1-font-weight);

    &::before {
        content: '';
        position: absolute;
        inset: -0.062rem;
        box-shadow: 0;
        border-radius: 0rem;
        box-sizing: border-box;
        border-left: 0rem solid transparent;
        border-right: 0rem solid transparent;
        cursor: pointer;
        transition: ease-in 0.3s;
    }

    &.${classes.active} {
        transition: 0.2s;

        &:hover {
            color: ${({ color }) => color};
            transition: 0.2s;
        }

        &::before {
            box-shadow: 0rem 0rem 0 1rem rgba(0, 0, 0, 1);
            border-radius: 0.5rem;
            border-left: 0.062rem solid rgba(0, 0, 0, 1);
            border-right: 0.062rem solid rgba(0, 0, 0, 1);
            inset: 0;
            transition: ease-in 0.3s;
        }
    }
`;

const StyledContent = styled.div`
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
    padding: 1rem 0 1.65rem;
    color: rgba(0, 0, 0, 1);
    font-weight: var(--plasma-typo-body1-font-weight);
    transition: 0.3;
    transition: opacity 0.3s, visibility 0s linear 0.3s;
    overflow: hidden;
    font-family: var(--plasma-typo-headline1-font-family);

    &.${classes.active} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }
`;

const StyledSmall = styled.div`
    opacity: 0.28;
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 1);
    font-weight: var(--plasma-typo-body1-font-weight);
    transition: 0.3;
    transition: opacity 0.3s, visibility 0s linear 0.3s;
    overflow: hidden;
    margin-top: 0.2rem;

    &.${classes.active} {
        opacity: 0.56;
        visibility: visible;
        transition-delay: 0s;
    }
`;

export const PalleteItem: React.FC<{
    colorItem: colorItemType;
    handlerSetColorPage: (color?: string, colorItem?: colorItemType, index?: string) => void;
}> = ({ colorItem, handlerSetColorPage }) => {
    const [hover, setHover] = useState(false);

    const colorsKeys = Object.keys(colorItem.colors).reverse();

    return (
        <StyledColorItem
            colors={colorItem.colors}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <StyledMask className={hover ? classes.active : ''}>
                {colorsKeys.map((colorKey, index) => (
                    <StyledMaskItem
                        className={hover ? classes.active : ''}
                        color={
                            colorItem.textColor[colorItem.textColor.length - 1 - index]
                                ? 'rgba(255, 255, 255, 0.56)'
                                : 'rgba(0, 0, 0, 0.56)'
                        }
                        key={colorKey}
                        onClick={() => {
                            handlerSetColorPage(colorItem.colors[colorKey], colorItem, colorKey);
                            setHover(false);
                        }}
                    >
                        {colorKey}
                    </StyledMaskItem>
                ))}
            </StyledMask>
            <StyledContent>
                <StyledText className={hover ? classes.active : ''}>{colorItem.name}</StyledText>
                <StyledSmall className={hover ? classes.active : ''}>H:{colorItem.h}</StyledSmall>
            </StyledContent>
        </StyledColorItem>
    );
};
