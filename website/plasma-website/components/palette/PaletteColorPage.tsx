import React from 'react';
import styled from 'styled-components';
import { useToast } from '@salutejs/plasma-b2c';
import type { ShowToastArgs } from '@salutejs/plasma-b2c';
import { IconCopyOutline } from '@salutejs/plasma-icons';
import { ContrastRatioChecker } from 'contrast-ratio-checker';
import { useRouter } from 'next/router';
import _ from 'lodash';

import { convertHexToRgb, paletteColors, checkColor } from '../../utils';

import { TextReadble } from './TextReadble';
import { Header } from './Header';

const widthText = 570;

const toastData: ShowToastArgs = {
    text: '',
    position: 'bottom',
    role: 'status',
    size: 'm',
    view: 'dark',
    timeout: 1000,
};

const ColorWrapper = styled.div<{ background: string }>`
    position: fixed;
    inset: 0;
    background: ${({ background }) => background};
    z-index: 99;
    transition: 400ms;
`;

const ColorPalette = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 15rem);
    box-sizing: border-box;
    padding: 0.125rem;
    display: flex;
    gap: 0.125rem;
`;

const ColorItem = styled.div<{ color: string; colorText: boolean }>`
    font-size: 0.75rem;
    width: calc(100% / 15);
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: flex-end;
    padding-left: 0.375rem;
    padding-bottom: 0.375rem;
    /* stylelint-disable */
    background: linear-gradient(
        180deg,
        ${({ color }) => {
                return color;
            }}
            12%,
        ${({ color }) => {
                return color;
            }}85
            40%,
        ${({ color }) => {
                return color;
            }}76
            45%,
        ${({ color }) => {
                return color;
            }}66
            50%,
        ${({ color }) => {
                return color;
            }}55
            54.5%,
        ${({ color }) => {
                return color;
            }}44
            59.75%,
        ${({ color }) => {
                return color;
            }}33
            65%,
        ${({ color }) => {
                return color;
            }}23
            69.5%,
        ${({ color }) => {
                return color;
            }}14
            75%,
        ${({ color }) => {
                return color;
            }}08
            80%,
        ${({ color }) => {
                return color;
            }}03
            85%,
        ${({ color }) => {
                return color;
            }}01
            89.6%,
        transparent 95%
    );
    /* stylelint-enable */
    cursor: pointer;
    position: relative;
    transition: 400ms;
    color: ${({ colorText }) => (colorText ? 'rgba(255, 255, 255,0.28)' : 'rgba(0, 0, 0,0.28)')};
    font-weight: var(--plasma-typo-body1-font-weight);

    &:hover {
        font-weight: var(--plasma-typo-headline1-font-weight);
        color: ${({ colorText }) => (colorText ? 'rgba(255, 255, 255,0.56)' : 'rgba(0, 0, 0, 0.56)')};
    }

    &.selected {
        font-weight: var(--plasma-typo-headline1-font-weight);
        width: calc(100% / 7.5);
        color: ${({ colorText }) => (colorText ? 'rgba(255, 255, 255,1)' : 'rgba(0, 0, 0, 1)')};
    }
`;

const ColorItemText = styled.div<{ direction: string }>`
    position: absolute;
    bottom: 10%;
    height: 11rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    ${({ direction }) => direction}: 0.5rem;
    z-index: 9998;
    transition: 200ms;
`;

const ColorIndex = styled.div<{ colorText: boolean; direction: string }>`
    font-size: 4rem;
    height: 4rem;
    z-index: 9999;
    font-weight: var(--plasma-typo-body1-font-weight);
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-direction: ${({ direction }) => (direction === 'left' ? 'row' : 'row-reverse')};
    color: ${({ colorText }) => (colorText ? 'rgba(255, 255, 255,1)' : 'rgba(0, 0, 0, 1)')};

    &:hover .copyIcon {
        opacity: 0.6;
        visibility: visible;
        transition-delay: 0s;
    }
`;

const ColorItemWrapperText = styled.div`
    display: flex;
    font-family: var(--plasma-typo-headline1-font-family);
`;
const ColorItemWrapperOpacityText = styled.div`
    opacity: 0.6;
`;

const ColorItemWrapperIconCopy = styled(IconCopyOutline)`
    scale: 1.7;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0s linear 0.2s;
`;

const TextReadableWrapper = styled.div`
    width: 100%;
    height: 15rem;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 7.5rem 7.5rem;
`;

export const PaletteColorPage: React.FC<{
    query: string | string[] | undefined;
}> = ({ query }) => {
    const checker = new ContrastRatioChecker();

    const color = query?.[1] ?? '';
    const colorCode = query?.[3] ?? '';

    const router = useRouter();
    const { showToast } = useToast();

    if (!checkColor(color, colorCode)) {
        return null;
    }

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);

            showToast({
                ...toastData,
                text: 'Скопировано',
            });
        } catch (err) {
            showToast({
                ...toastData,
                text: 'Ошибка при копировании текста',
            });
        }
    };

    const handlerSetColor = (code: string) => {
        router.push(`/palette/color/${color}/code/${code}`);
    };

    const paletteColor = paletteColors[color];
    const selectedColor = paletteColor[colorCode];
    const colorCodes = Object.keys(_.omit(paletteColor, '50')).reverse();

    const rgb = convertHexToRgb(selectedColor);
    const colorIndex = colorCodes.findIndex((code) => paletteColor[code] === selectedColor);
    const colorText =
        Math.round(checker.getContrastRatioByHex(paletteColors[color][colorCode], '#FFFFFF') * 100) / 100 > 3;

    const windowWidth = window.innerWidth;
    const item = windowWidth / 15;
    const direction = item * colorIndex < windowWidth - widthText ? 'left' : 'right';

    return (
        <ColorWrapper background={selectedColor}>
            <Header text={`${color[0].toUpperCase() + color.slice(1)} ${colorCode}`} link="/palette/" />
            <ColorPalette>
                {colorCodes.map((code) => (
                    <ColorItem
                        onClick={() => handlerSetColor(code)}
                        color={paletteColor[code]}
                        colorText={colorText}
                        className={selectedColor === paletteColor[code] ? 'selected' : ''}
                        key={code}
                    >
                        {selectedColor === paletteColor[code] && direction && (
                            <ColorItemText direction={direction}>
                                <ColorIndex
                                    direction={direction}
                                    colorText={colorText}
                                    onClick={() => copyToClipboard(`rgb(${rgb.red},${rgb.green},${rgb.blue})`)}
                                >
                                    <ColorItemWrapperText>
                                        <ColorItemWrapperOpacityText>rgb&nbsp;</ColorItemWrapperOpacityText>
                                        {`${rgb.red},${rgb.green},${rgb.blue}`}
                                    </ColorItemWrapperText>
                                    <ColorItemWrapperIconCopy className="copyIcon" color="inhert" size="m" />
                                </ColorIndex>
                                <ColorIndex
                                    direction={direction}
                                    colorText={colorText}
                                    onClick={() => copyToClipboard(selectedColor)}
                                >
                                    <ColorItemWrapperText>
                                        <ColorItemWrapperOpacityText>#</ColorItemWrapperOpacityText>
                                        {selectedColor.slice(1)}
                                    </ColorItemWrapperText>
                                    <ColorItemWrapperIconCopy className="copyIcon" color="inhert" size="m" />
                                </ColorIndex>
                            </ColorItemText>
                        )}
                        {code}
                    </ColorItem>
                ))}
            </ColorPalette>
            <TextReadableWrapper>
                <TextReadble color="#000000" background={selectedColor} alignX="left" alignY="top" />
                <TextReadble color="#FFFFFF" background={selectedColor} alignX="right" alignY="top" />
                <TextReadble color={selectedColor} background="#000000" alignX="left" alignY="bottom" />
                <TextReadble color={selectedColor} background="#FFFFFF" alignX="right" alignY="bottom" />
            </TextReadableWrapper>
        </ColorWrapper>
    );
};
