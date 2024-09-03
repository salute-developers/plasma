import React, { useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { general } from '@salutejs/plasma-colors';

const NoScroll = createGlobalStyle`
    html, body {
        overscroll-behavior: none;
    }
`;

const PaletteContainer = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: #000;

    position: relative;
`;

export interface BackgroundGradient {
    1000: string;
    800: string;
    500: string;
    250: string;
    100: string;
}

const PaletteWrapper = styled.div`
    position: absolute;
    inset: 20px;
    border-radius: 0.5rem;

    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;

    .transitionOpacity {
        opacity: 1;
    }
`;

const PaletteColors = styled.div<{ colors: BackgroundGradient }>`
    position: absolute;
    inset: 0;

    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    /* stylelint-disable */
    background: linear-gradient(
        90deg,
        ${({ colors }) => colors[1000]} 5%,
        ${({ colors }) => colors[800]} 30%,
        ${({ colors }) => colors[500]} 50%,
        ${({ colors }) => colors[250]} 70%,
        ${({ colors }) => colors[100]} 95%
    );

    padding: 2rem;
    color: #ffffff17;
    font-size: 4rem;
`;

const GradientScrollHeight2 = styled.div<{ colors: string[] }>`
    width: 0.25rem;
    position: absolute;

    top: 7.375rem;
    bottom: 4.125rem;
    left: 1.25rem;
    border-radius: 0.125rem;

    filter: blur(32px);
    opacity: 0.6;

    background: linear-gradient(
        180deg,
        ${({ colors }) =>
            colors.map((color: string, index: number) => `${color} ${(100 / colors.length) * index}%`).join(',')}
    );
`;

const GradientScrollHeight = styled.div<{ colors: string[] }>`
    width: 0.25rem;
    position: relative;

    --private-gradient-scroll-height: calc(100vh - 4 * 2.875rem);
    top: 6.125rem;
    height: var(--private-gradient-scroll-height);
    left: 1.5rem;

    border-radius: 0.125rem;

    background: linear-gradient(
        180deg,
        ${({ colors }) =>
            colors.map((color: string, index: number) => `${color} ${(100 / colors.length) * index}%`).join(',')}
    );
`;

const Slider = styled.input`
    appearance: none;
    background: transparent;
    cursor: pointer;
    margin: 0;
    opacity: 0;

    position: absolute;
    transform: rotate(90deg);
    transform-origin: 0 0;

    left: 12px;
    height: 20px;
    padding: 0 8px;
    width: calc(var(--private-gradient-scroll-height) - 16px);

    :focus {
        outline: none;
    }

    /* slider thumb */
    ::-webkit-slider-thumb {
        appearance: none;
        position: relative;

        /*custom styles*/
        border-radius: 0.5rem;
        height: 0.25rem;
        width: 0.25rem;
        outline: 0.5rem solid white;
    }

    /* slider thumb */
    ::-moz-range-thumb {
        border: none;
        border-radius: 0;
        background: transparent;

        /*custom styles*/
        border-radius: 0.5rem;
        height: 0.25rem;
        width: 0.25rem;
        outline: 0.5rem solid white;
    }
`;

const Pseudo = styled.div`
    transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: transform;

    top: 18px;

    position: absolute;
    border-radius: 0.5rem;
    height: 0.25rem;
    width: 0.25rem;
    outline: 0.5rem solid white;
`;

// [ ] - придумать как определять мышь или трекапд и в зависимости от этого задавать velocity
// [x] - придумать как обойти баг, когда при быстром скроле туда/сюда классы не успевают удаляться

const isTrackPad = (e: any) => {
    // console.log('e.deltaY', e);

    return e.deltaY && !Number.isInteger(e.deltaY) ? false : true;
};

export const ColorGenerator2: React.FC = () => {
    const refs = useRef<HTMLDivElement[]>([]);
    const sliderRef = useRef<HTMLDivElement>(null);
    const delta = useRef<number>(0);
    const pseudoRef = useRef<HTMLDivElement>(null);
    const velocityRef = useRef(15);

    const [colorIndexValue, setColorIndexValue] = useState(0);

    const gradients = Object.entries(general)
        .map(([shade, saturation]) => ({
            shade,
            colors: {
                1000: saturation['1000'],
                800: saturation['800'],
                500: saturation['500'],
                250: saturation['250'],
                100: saturation['100'],
            },
        }))
        .slice(0, -2);

    useEffect(() => {
        refs.current?.[0]?.classList.add('transitionOpacity');

        // document.addEventListener('DOMMouseScroll', (e: any) => {
        //     // var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0;

        //     console.log('test DOMMouseScroll', e);
        // });
    }, []);

    useEffect(() => {
        const MIN = 0;
        const MAX = 15;
        const thumbWidth = 20;
        const de = ((colorIndexValue - MIN) / (MAX - MIN)).toFixed(3);

        pseudoRef.current!.style.transform = `translateY(calc(${de} * calc(var(--private-gradient-scroll-height) - ${thumbWidth}px) - 10px))`;
    }, [colorIndexValue]);

    const onChangeSliderValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectShadeIndex = Number(event.target.value);

        if (selectShadeIndex < colorIndexValue) {
            for (let a = 15; a > selectShadeIndex; a--) {
                refs.current?.[a]?.classList.remove('transitionOpacity');
            }
        } else {
            for (let a = 0; a <= selectShadeIndex; a++) {
                refs.current?.[a]?.classList.add('transitionOpacity');
            }
        }

        delta.current = selectShadeIndex * velocityRef.current;
        setColorIndexValue(selectShadeIndex);
    };

    return (
        <PaletteContainer>
            <PaletteWrapper
                onTouchStart={() => {
                    console.log('onTouchStart');
                }}
                onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
                    velocityRef.current = isTrackPad(e) ? 5 : 5; // 2 - для мыши, 15 - для тачпада

                    console.log('velocityRef.current', e.deltaY, velocityRef.current);

                    const min = 0;
                    const max = 15 * velocityRef.current;
                    if (e.deltaY < 0) {
                        if (delta.current <= min) {
                            delta.current = min;
                        } else {
                            delta.current -= 1;
                        }
                    } else {
                        if (delta.current >= max) {
                            delta.current = max;
                        } else {
                            delta.current += 1;
                        }
                    }
                    const selectShadeIndex = Math.floor(delta.current / velocityRef.current);

                    if (e.deltaY > 0) {
                        refs.current?.[selectShadeIndex]?.classList.add('transitionOpacity');
                    } else {
                        refs.current?.[selectShadeIndex + 1]?.classList.remove('transitionOpacity');
                    }

                    setColorIndexValue(selectShadeIndex);
                }}
            >
                {gradients.map(({ colors, shade }, index) => (
                    <PaletteColors
                        ref={(el: HTMLDivElement) => {
                            if (refs.current) {
                                refs.current[index] = el;
                            }
                        }}
                        colors={colors}
                    >
                        {shade}
                    </PaletteColors>
                ))}
                <GradientScrollHeight2 colors={gradients.map((item) => item.colors[500])} />
                <GradientScrollHeight ref={sliderRef} colors={gradients.map((item) => item.colors[500])}>
                    <Pseudo ref={pseudoRef} />
                    <Slider type="range" value={colorIndexValue} onChange={onChangeSliderValue} min="0" max="15" />
                </GradientScrollHeight>
                {/* <Header text="Палитра" link="/" /> */}
            </PaletteWrapper>

            <NoScroll />
        </PaletteContainer>
    );
};
