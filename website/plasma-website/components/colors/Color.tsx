import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { TextReadble } from './TextReadble';
import { useToast } from '@salutejs/plasma-b2c';
import type { ShowToastArgs } from '@salutejs/plasma-b2c';
import { IconCopyOutline } from '@salutejs/plasma-icons';
import {ContrastRatioChecker} from 'contrast-ratio-checker';
import { convertHexToRgb } from '../../utils'; 
import type  { colorItem  }  from  './PalleteItem';

const ColorItemBackground  =  styled.div<{background: string}>`
    position: fixed;
    inset: 0;
    background: ${({background}) => background};
    z-index: 99;
`;

const ColorItem = styled.div<{color: string}>`
    font-size: 0.75rem;
    width: calc(100% / 16);
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: 0.2s;
    background: linear-gradient( 
        ${({color}) => {return color}} 5rem,
        transparent 100%
    );
    cursor: pointer;
    position: relative;

    &:hover{
        transition: .2s;
        background: linear-gradient(
            ${({color}) => {return color}} 8rem,
            transparent 100%
        );
    }

    &.selected{
        width: calc(100% / 8);
    }
`;

const ColorItemText = styled.div<{number: number | string}>`
    position: absolute;
    bottom: 3rem;
    height: 11rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    ${({number}) => Number(number) > 400 ? 'left' : 'right'}: 0;
    z-index: 9998;
`;

const Colors = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 12.5rem);
    box-sizing: border-box;
    padding: 0.125rem;
    display: flex;
    gap: 0.125rem;
`;

const TextReadbleWrapper =  styled.div`
    width: 100%;
    height: 12.5rem;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 6.25rem 6.25rem;
`;

const toastData: ShowToastArgs = {
    text: '',
    position: 'bottom',
    role: 'status',
    size: 'm',
    view: 'dark',
    timeout: 1000,
};


const ColorIndex = styled.div<{number: number | string}>`
    font-size: 4rem;
    height: 4rem;
    z-index: 9999;
    font-weight: 400;
    opacity: 0.7;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: ${({number}) => Number(number) > 400 ? 'row' : 'row-reverse'};
    color: ${({number}) => Number(number) > 400 ? 'white' : 'black'};

    &:hover{
        opacity: 1;
    }
`;

export const Color: React.FC<{ color: string, colorItem: colorItem}> = ({ color , colorItem }) => {
    const checker = new ContrastRatioChecker();
    const colorsKeys = Object.keys(colorItem.colors).reverse() ?? [];
    const [selectedColor, setSelectedColor] = useState(color);

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

    const rgb = convertHexToRgb(selectedColor);

    return (
        <ColorItemBackground background={selectedColor}>
            <Colors>
                {colorsKeys.map((colorKey) => (
                    <ColorItem onClick={() => setSelectedColor(colorItem.colors[colorKey])} color={colorItem.colors[colorKey]} className={selectedColor === colorItem.colors[colorKey] ? 'selected' : ''} key={colorKey}>
                        {selectedColor === colorItem.colors[colorKey] && <ColorItemText number={colorKey}>
                            <ColorIndex number={colorKey} onClick={() => copyToClipboard(`rgb(${rgb.red},${rgb.green},${rgb.blue})`)}>{`rgb(${rgb.red},${rgb.green},${rgb.blue})`} <IconCopyOutline color='inhert' size='m' /></ColorIndex>
                            <ColorIndex number={colorKey} onClick={() => copyToClipboard(selectedColor)}>{selectedColor} <IconCopyOutline color='inhert' size='m' /></ColorIndex>
                        </ColorItemText>}
                        {colorKey}
                    </ColorItem>
                ))}
            </Colors>
            <TextReadbleWrapper>
                <TextReadble color={'#000000'} background={selectedColor} alignX='left' alignY='top'/>
                <TextReadble color={'#FFFFFF'} background={selectedColor} alignX='right' alignY='top'/>
                <TextReadble color={selectedColor} background={'#000000'} alignX='left' alignY='bottom'/>
                <TextReadble color={selectedColor} background={'#FFFFFF'} alignX='right' alignY='bottom'/>
            </TextReadbleWrapper>
        </ColorItemBackground>
    );
}

// {colorsKeys.map((colorKey) => {
//     <ColorItem key={colorKey} style={{background: colorItem.colors[colorKey]}}>{colorKey}</ColorItem>
// })}