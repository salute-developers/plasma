import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export type colorItemType = {
    colors: {
        ratio: number;
        color: string;
        code: string;
    }[];
    name: string;
    h: number;
};

const classes = {
    active: 'palette-item-active',
    mask: 'styled-mask',
    maskItem: 'styled-mask-item',
    nameColor: 'styled-name-color',
    text: 'styled-text',
    smallText: 'styled-text-small',
};

const StyledColorItem = styled.div<{ colors: colorItemType['colors'] }>`
    /* stylelint-disable */
    background: linear-gradient(
        90deg,
        ${({ colors }) => colors?.find((c) => c.code === '1000')?.color ?? ''} 5%,
        ${({ colors }) => colors?.find((c) => c.code === '800')?.color ?? ''} 30%,
        ${({ colors }) => colors?.find((c) => c.code === '500')?.color ?? ''} 50%,
        ${({ colors }) => colors?.find((c) => c.code === '250')?.color ?? ''} 70%,
        ${({ colors }) => colors?.find((c) => c.code === '100')?.color ?? ''} 95%
    );
    /* stylelint-enable */
    width: 100%;
    height: 13.125rem;
    border-radius: 0.5rem;
    position: relative;
    cursor: pointer;

    &:hover .${classes.mask} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }

    &:hover .${classes.maskItem} {
        transition: 0.2s;

        &::before {
            box-shadow: 0rem 0rem 0 1rem rgba(0, 0, 0, 1);
            border-radius: 0.5rem;
            border-left: 0.062rem solid rgba(0, 0, 0, 1);
            border-right: 0.062rem solid rgba(0, 0, 0, 1);
            inset: 0;
            transition: ease-in 0.3s;
        }
    }

    &:hover .${classes.text} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }

    &:hover .${classes.smallText} {
        opacity: 0.56;
        visibility: visible;
        transition-delay: 0s;
    }
`;

const StyledMask = styled.div`
    display: flex;
    flex-direction: row-reverse;
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
    cursor: pointer;
`;

const StyledMaskItem = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 0.125rem;
    padding-left: 0.5rem;
    transition: 0.2s;
    font-size: 0.75rem;
    font-weight: var(--plasma-typo-body1-font-weight);
    cursor: pointer;

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

    &:hover .${classes.nameColor} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }
`;

const StyledNameColor = styled.div<{ color: string }>`
    color: ${({ color }) => color};
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0s linear 0.3s;
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
    transition: opacity 0.3s, visibility 0s linear 0.3s;
    overflow: hidden;
    font-family: var(--plasma-typo-headline1-font-family);
`;

const StyledSmall = styled.div`
    opacity: 0.28;
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 1);
    font-weight: var(--plasma-typo-body1-font-weight);
    transition: opacity 0.3s, visibility 0s linear 0.3s;
    overflow: hidden;
    margin-top: 0.2rem;
`;

export const PaletteItem: React.FC<{
    paletteColor: colorItemType;
}> = ({ paletteColor }) => {
    const router = useRouter();

    const handlerColorClick = (code: string) => {
        router.push(`/palette/color/${paletteColor.name}/code/${code}`);
    };

    return (
        <StyledColorItem colors={paletteColor.colors}>
            <StyledMask className={classes.mask}>
                {paletteColor.colors.map((item, index) => (
                    <StyledMaskItem
                        className={classes.maskItem}
                        key={index}
                        onClick={() => {
                            handlerColorClick(item.code);
                        }}
                    >
                        <StyledNameColor
                            className={classes.nameColor}
                            color={
                                paletteColor.colors[index].ratio > 3
                                    ? 'rgba(255, 255, 255, 0.56)'
                                    : 'rgba(0, 0, 0, 0.56)'
                            }
                        >
                            {item.code}
                        </StyledNameColor>
                    </StyledMaskItem>
                ))}
            </StyledMask>
            <StyledContent>
                <StyledText className={classes.text}>
                    {paletteColor.name.charAt(0).toUpperCase() + paletteColor.name.slice(1)}
                </StyledText>
                <StyledSmall className={classes.smallText}>H:{paletteColor.h}</StyledSmall>
            </StyledContent>
        </StyledColorItem>
    );
};
