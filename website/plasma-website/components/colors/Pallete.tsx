import { general } from '@salutejs/plasma-colors';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { ContrastRatioChecker } from 'contrast-ratio-checker';

import { hexToHSL } from '../../utils';

import { Header } from './Header';
import { PalleteItem } from './PalleteItem';
import type { colorItemType } from './PalleteItem';
import { Color } from './Color';
import { GradientScroll } from './GradientScroll';

const PaletteWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    box-sizing: content-box;
    padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
`;
const PaletteColors = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    padding: 2px;
    box-sizing: border-box;
`;

const useReactPath = () => {
    const [path, setPath] = React.useState('');
    const listenToPopstate = () => {
        const winPath = window.location.href;
        setPath(winPath);
    };
    React.useEffect(() => {
        window.addEventListener('popstate', listenToPopstate);
        return () => {
            window.removeEventListener('popstate', listenToPopstate);
        };
    }, []);
    return path;
};

export const Pallete: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState({ scrollTop: 0, scrollHeight: 0, clientHeight: 0 });
    const [selectColorItem, setSelectColorItem] = useState<null | undefined | colorItemType>(null);
    const [selectColor, setSelectColor] = useState<null | string | undefined>(null);
    const [selectCode, setSelectCode] = useState<null | string | undefined>(null);

    const router = useRouter();
    const path = useReactPath();

    const scrollRef = useRef<null | HTMLDivElement>(null);

    const handlerSetColorPage = (color?: string, colorItem?: colorItemType, code?: string) => {
        setSelectColor(color);
        setSelectColorItem(colorItem);
        setSelectCode(code);

        router.push({
            pathname: '/colors',
            query: {
                color: colorItem?.name,
                code,
            },
        });
    };

    const handlerOnClose = () => {
        if (selectColorItem && selectColor) {
            setSelectColorItem(null);
            setSelectColor(null);
            setSelectCode(null);

            router.push({ pathname: '/colors', query: {} });
        } else {
            router.push({ pathname: '/' });
        }
    };

    const handlerScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            setScrollPosition({ scrollTop, scrollHeight, clientHeight });
        }
    };

    const checker = new ContrastRatioChecker();

    const allColors: {
        [key: string]: {
            [key: string]: string;
        };
    } = _.omit(general, ['gray', 'coolGray']);

    const colors = Object.keys(allColors)
        .map((key) => ({
            name: key.charAt(0).toUpperCase() + key.slice(1),
            colors: _.omit(allColors[key], '50'),
            textColor: Object.keys(allColors[key]).map((colorKey) => {
                return Math.round(checker.getContrastRatioByHex(allColors[key][colorKey], '#FFFFFF') * 100) / 100 > 3.5;
            }),
            h: hexToHSL(allColors[key][600])[0],
        }))
        .sort((a, b) => {
            return a.h - b.h;
        });

    const headerText = selectColorItem ? `${selectColorItem?.name} ${selectCode}` : 'Палитра';
    const colorsForGradiend = colors.map((color) => color.colors[500]);
    const colorsHSL = colors.map((color) => color.h);

    const setPage = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const color = urlParams.get('color');
        const code = urlParams.get('code');

        if (code && color) {
            const colorItemQuery = colors.find((colorItem) => colorItem.name.toLowerCase() === color.toLowerCase());
            if (colorItemQuery) {
                handlerSetColorPage(colorItemQuery.colors[code], colorItemQuery, code);
            }
        } else {
            setSelectColorItem(null);
            setSelectColor(null);
            setSelectCode(null);

            router.push({ pathname: '/colors', query: {} });
        }
    };

    useEffect(() => {
        setPage();
        handlerScroll();
    }, [path]);

    useLayoutEffect(() => {
        setPage();
    }, []);

    return (
        <PaletteWrapper ref={scrollRef} onScroll={handlerScroll}>
            <Header text={headerText} onClose={handlerOnClose} />
            <GradientScroll
                hsl={colorsHSL}
                colors={colorsForGradiend}
                scrollHeight={scrollPosition.scrollHeight}
                scrollTop={scrollPosition.scrollTop}
                height={scrollPosition.clientHeight}
            />
            <PaletteColors>
                {colors.map((color, index) => (
                    <PalleteItem key={index} colorItem={color} handlerSetColorPage={handlerSetColorPage} />
                ))}
            </PaletteColors>
            {selectColor && selectColorItem && (
                <Color color={selectColor} colorItem={selectColorItem} handlerSetColor={handlerSetColorPage} />
            )}
        </PaletteWrapper>
    );
};
