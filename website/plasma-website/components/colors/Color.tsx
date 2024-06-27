import React from 'react';
import styled from 'styled-components';
import { useToast } from '@salutejs/plasma-b2c';
import type { ShowToastArgs } from '@salutejs/plasma-b2c';
import { IconCopyOutline } from '@salutejs/plasma-icons';

import { convertHexToRgb } from '../../utils';

import { TextReadble } from './TextReadble';
import type { colorItemType } from './PalleteItem';

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

const ColorItem = styled.div<{ color: string; number: undefined | string }>`
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
        ${({ color }) => {
                return color;
            }}
            5rem,
        ${({ color }) => {
                return color;
            }}10
            70%,
        ${({ color }) => {
                return color;
            }}05
            78%,
        ${({ color }) => {
                return color;
            }}02
            85%,
        transparent 90%
    );
    /* stylelint-enable */
    cursor: pointer;
    position: relative;
    transition: 400ms;
    color: ${({ number }) => (Number(number) > 400 ? 'rgba(255, 255, 255,0.28)' : 'rgba(0, 0, 0,0.28)')};
    font-weight: var(--plasma-typo-body1-font-weight);

    &.selected {
        width: calc(100% / 7.5);
        color: ${({ number }) => (Number(number) > 400 ? 'rgba(255, 255, 255,1)' : 'rgba(0, 0, 0, 1)')};
    }
`;

const ColorItemText = styled.div<{ number: number | string }>`
    position: absolute;
    bottom: 10%;
    height: 11rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    ${({ number }) => (Number(number) > 400 ? 'left' : 'right')}: 0.5rem;
    z-index: 9998;
    transition: 200ms;
`;

const ColorIndex = styled.div<{ number: number | string }>`
    font-size: 4rem;
    height: 4rem;
    z-index: 9999;
    font-weight: var(--plasma-typo-body1-font-weight);
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-direction: ${({ number }) => (Number(number) > 400 ? 'row' : 'row-reverse')};
    color: ${({ number }) => (Number(number) > 400 ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)')};

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

const TextReadbleWrapper = styled.div`
    width: 100%;
    height: 15rem;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 7.5rem 7.5rem;
`;

export const Color: React.FC<{
    color: string;
    colorItem: colorItemType;
    handlerSetColor: (color?: string, colorItem?: colorItemType, code?: string) => void;
}> = ({ color, colorItem, handlerSetColor }) => {
    const { showToast } = useToast();

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

    const colorsKeys = Object.keys(colorItem.colors).reverse() ?? [];

    const rgb = convertHexToRgb(color);
    const colorKeySelected = colorsKeys.find((colorKey) => colorItem.colors[colorKey] === color);

    return (
        <ColorWrapper background={color}>
            <ColorPalette>
                {colorsKeys.map((colorKey) => (
                    <ColorItem
                        number={colorKeySelected}
                        onClick={() => handlerSetColor(colorItem.colors[colorKey], colorItem, colorKey)}
                        color={colorItem.colors[colorKey]}
                        className={color === colorItem.colors[colorKey] ? 'selected' : ''}
                        key={colorKey}
                    >
                        {color === colorItem.colors[colorKey] && (
                            <ColorItemText number={colorKey}>
                                <ColorIndex
                                    number={colorKey}
                                    onClick={() => copyToClipboard(`rgb(${rgb.red},${rgb.green},${rgb.blue})`)}
                                >
                                    <ColorItemWrapperText>
                                        <ColorItemWrapperOpacityText>rgb&nbsp;</ColorItemWrapperOpacityText>
                                        {`${rgb.red},${rgb.green},${rgb.blue}`}
                                    </ColorItemWrapperText>
                                    <ColorItemWrapperIconCopy className="copyIcon" color="inhert" size="m" />
                                </ColorIndex>
                                <ColorIndex number={colorKey} onClick={() => copyToClipboard(color)}>
                                    <ColorItemWrapperText>
                                        <ColorItemWrapperOpacityText>#</ColorItemWrapperOpacityText>
                                        {color.slice(1)}
                                    </ColorItemWrapperText>
                                    <ColorItemWrapperIconCopy className="copyIcon" color="inhert" size="m" />
                                </ColorIndex>
                            </ColorItemText>
                        )}
                        {colorKey}
                    </ColorItem>
                ))}
            </ColorPalette>
            <TextReadbleWrapper>
                <TextReadble color="#000000" background={color} alignX="left" alignY="top" />
                <TextReadble color="#FFFFFF" background={color} alignX="right" alignY="top" />
                <TextReadble color={color} background="#000000" alignX="left" alignY="bottom" />
                <TextReadble color={color} background="#FFFFFF" alignX="right" alignY="bottom" />
            </TextReadbleWrapper>
        </ColorWrapper>
    );
};
