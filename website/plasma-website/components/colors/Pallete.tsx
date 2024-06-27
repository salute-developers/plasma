import { general } from '@salutejs/plasma-colors';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { PalleteItem } from './PalleteItem';
import type { colorItem } from './PalleteItem';
import { Color } from './Color';
import { GradientScroll } from './GradientScroll';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { hexToHSL } from '../../utils';

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

const useReactPath = () => {
    const [path, setPath] = React.useState('');
    const listenToPopstate = () => {
      const winPath = window.location.href;
      setPath(winPath);
    };
    React.useEffect(() => {
      window.addEventListener("popstate", listenToPopstate);
      return () => {
        window.removeEventListener("popstate", listenToPopstate);
      };
    }, []);
    return path;
};

export const Pallete: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState({scrollTop: 0, scrollHeight: 0, clientHeight: 0});
    const [selectColorItem, setSelectColorItem] = useState<null | undefined | colorItem>(null);
    const [selectColor, setSelectColor] = useState<null | string | undefined>(null);
    const [selectCode, setSelectCode] = useState<null | string | undefined>(null);

    const router = useRouter();
    const path = useReactPath();

    const scrollRef = useRef<null | HTMLDivElement>(null);

    const handlerSetColorPage = (color?: string, colorItem?: colorItem, code?: string) => {
        setSelectColor(color);
        setSelectColorItem(colorItem);
        setSelectCode(code);

        router.push({pathname: '/colors', query: {
            color: colorItem?.name,
            code: code
        }});
    }

    const handlerOnClose  = ()  =>  {
        if(selectColorItem && selectColor){
            setSelectColorItem(null);
            setSelectColor(null);
            setSelectCode(null);

            router.push({pathname: '/colors', query: {}});
        }else{
            router.push({pathname: '/'});
        };
    }

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            setScrollPosition({scrollTop, scrollHeight, clientHeight});
        }
      };

    const allColors = _.omit(general,['gray', 'coolGray']);

    const colors = Object.keys(allColors).map((key) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        // @ts-ignore
        colors: _.omit(allColors[key], '50'),
        // @ts-ignore
        h: hexToHSL(allColors[key][600])[0],
    })).sort((a,b) => {
        return  a.h - b.h;
    });

    const headerText = selectColorItem ? `${selectColorItem?.name} ${selectCode}` : `Палитра`;
    const colorsForGradiend = colors.map((color)  =>  (color.colors[500]));
    const colorsHSL = colors.map((color)  =>  (color.h));

    // const setPage = () => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const color = urlParams.get('color');
    //     const code = urlParams.get('code');

    //     if(code && color){
    //         const colorItemQuery = colors.find((colorItem) => colorItem.name.toLowerCase() == color.toLowerCase());
    //         if(colorItemQuery){handlerSetColorPage(colorItemQuery.colors[code], colorItemQuery, code)};
    //     }else{
    //         router.push({pathname: '/colors', query: {}});
    //     }
    // }
    useLayoutEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const color = urlParams.get('color');
        const code = urlParams.get('code');

        if(code && color){
            const colorItemQuery = colors.find((colorItem) => colorItem.name.toLowerCase() == color.toLowerCase());
            if(colorItemQuery){handlerSetColorPage(colorItemQuery.colors[code], colorItemQuery, code)};
        }else{
            setSelectColorItem(null);
            setSelectColor(null);
            setSelectCode(null);

            router.push({pathname: '/colors', query: {}});
        }
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const color = urlParams.get('color');
        const code = urlParams.get('code');

        if(code && color){
            const colorItemQuery = colors.find((colorItem) => colorItem.name.toLowerCase() == color.toLowerCase());
            if(colorItemQuery){
                handlerSetColorPage(colorItemQuery.colors[code], colorItemQuery, code)
            }
        }else{
            setSelectColorItem(null);
            setSelectColor(null);
            setSelectCode(null);

            router.push({pathname: '/colors', query: {}});
        }
    }, [path]);

    return (
        <StyledWrapper ref={scrollRef} onScroll={handleScroll}>
            <Header text={headerText} onClose={handlerOnClose} />
            <GradientScroll hsl={colorsHSL} colors={colorsForGradiend} scrollHeight={scrollPosition.scrollHeight} scrollTop={scrollPosition.scrollTop} height={scrollPosition.clientHeight} />
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
