import { general } from '@salutejs/plasma-colors';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { PalleteItem } from './PalleteItem';
import type { colorItem } from './PalleteItem';
import { Color } from './Color';

const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    padding: 2px;
    box-sizing: border-box;
`;
const StyledColors = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
`;

export const Pallete: React.FC = () => {
    const colors = Object.keys(general).map((key) => ({
        name: key,
        // @ts-ignore
        colors: general[key],
    }));

    const [selectColorItem, setSelectColorItem] = useState<null | undefined | colorItem>(null);
    const [selectColor, setSelectColor] = useState<null | string | undefined>(null);

    const handlerSetColorPage = (color?: string, colorItem?: colorItem) => {
        setSelectColor(color);
        setSelectColorItem(colorItem);
    }

    const handlerOnClose  = ()  =>  {
        if(selectColorItem && selectColor){
            setSelectColorItem(null);
            setSelectColor(null);
        }else{
            window.location.href = '/';
        };
    }

    const headerText = selectColorItem ? `${selectColorItem?.name}` : `Палитра`;

    return (
        <StyledWrapper>
            <Header text={headerText} onClose={handlerOnClose} />
            <StyledColors>
                {colors.map((color, index) => (
                    <PalleteItem key={index} colorItem={color} handlerSetColorPage={handlerSetColorPage} />
                ))}
            </StyledColors>
            { (selectColor && selectColorItem )&& (
                <Color color={selectColor} colorItem={selectColorItem} />
            )}
        </StyledWrapper>
    );
};
