import React, { ChangeEvent, UIEvent, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { textPrimary, onLightTextPrimary, onLightTextSecondary } from '@salutejs/plasma-tokens-b2c/new';
import { Container as ContainerBase, Col, Row, Button } from '@salutejs/plasma-b2c';
import { general } from '@salutejs/plasma-colors';
import { IconArrowRight } from '@salutejs/plasma-icons';
import { getHSLARawColor, upperFirstLetter } from '@salutejs/plasma-tokens-utils';

import { GradientVerticalSlider } from './GradientVerticalSlider';
import { Header } from './Header';
import { BackgroundGradientSaturation } from './types';

const NoScroll = createGlobalStyle`
    html, body {
        overscroll-behavior: none;
    }
`;

const Container = styled.div`
    position: relative;

    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: #000;
`;

const Wrapper = styled.div`
    position: absolute;
    inset: 0.125rem;
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

const ColorTone = styled.div<{ colors: BackgroundGradientSaturation }>`
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

const ScrollableHiddenContainer = styled.div`
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-bar-width: none;
    opacity: 0;

    position: absolute;
    inset: 0;
`;

const HiddenColorTone = styled.div`
    position: relative;
    height: 100vh;

    scroll-snap-align: center;
    opacity: 1;

    background: transparent;
`;

const ColorBox = styled.div`
    position: absolute;
    z-index: 999;

    left: 3.375rem;
    bottom: 3.875rem;

    width: 11rem;

    color: ${textPrimary};
`;

const InputLabel = styled.div`
    margin-bottom: 1rem;

    font-family: var(--plasma-typo-body-s-font-family);
    font-size: var(--plasma-typo-body-s-font-size);
    font-weight: var(--plasma-typo-body-s-font-weight);
    line-height: var(--plasma-typo-body-s-line-height);
`;

const InputHex = styled.input`
    width: inherit;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;

    caret-color: ${textPrimary};

    ::placeholder {
        opacity: 0.28;
    }

    font-family: var(--plasma-typo-h1-font-family);
    font-size: var(--plasma-typo-h1-font-size);
    font-weight: var(--plasma-typo-h1-font-weight);
    line-height: var(--plasma-typo-h1-line-height);
`;

const Grid = styled(ContainerBase)`
    position: absolute;
`;

const ColorToneDisplay = styled.div`
    position: relative;
    top: 6.125rem;
    height: 15.25rem;
`;

const ColorToneDescription = styled.div`
    width: 16.25rem;
    margin-bottom: 1.5rem;

    color: ${onLightTextSecondary};

    font-family: var(--plasma-typo-text-s-font-family);
    font-size: var(--plasma-typo-text-s-font-size);
    font-weight: var(--plasma-typo-text-s-font-weight);
    line-height: var(--plasma-typo-text-s-line-height);
`;

const ColorToneName = styled.div`
    color: ${onLightTextPrimary};

    font-family: var(--plasma-typo-dspl-m-font-family);
    font-size: var(--plasma-typo-dspl-m-font-size);
    font-weight: var(--plasma-typo-dspl-m-font-weight);
    line-height: var(--plasma-typo-dspl-m-line-height);
`;

const ContinueButton = styled(Button)`
    position: relative;
    z-index: 999;
    top: 13rem;
`;

const toneColorsName = Object.keys(general).slice(2, -2);

const gradients = Object.entries(general)
    .map(([_, saturation]) => ({
        1000: saturation['1000'],
        800: saturation['800'],
        500: saturation['500'],
        250: saturation['250'],
        100: saturation['100'],
    }))
    .slice(2, -2);

const findNearestIndex = (inputNumber: number, numbers: number[]) => {
    return numbers.reduce((closestIndex, curr, index, arr) => {
        return Math.abs(curr - inputNumber) < Math.abs(arr[closestIndex] - inputNumber) ? index : closestIndex;
    }, 0);
};

const formatColorToneName = (value: string) => {
    return upperFirstLetter(value).replace(/([a-z])([A-Z])/g, '$1 $2');
};

interface ToneGeneratorProps {
    onNextPage?: () => void;
    onPreviousPage?: () => void;
}

export const ToneGenerator = (props: ToneGeneratorProps) => {
    const colorRefs = useRef<HTMLDivElement[]>([]);
    const hiddenContainerRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    const sliderMin = 0;
    const sliderMax = gradients.length - 1;

    const [colorHex, setColorHex] = useState('');
    const [colorIndexValue, setColorIndexValue] = useState(0);

    useEffect(() => {
        colorRefs.current?.[0]?.classList.add('transitionOpacity');
    }, []);

    useEffect(() => {
        const scaledColorValue = ((colorIndexValue - sliderMin) / (sliderMax - sliderMin)).toFixed(3);

        if (thumbRef.current) {
            thumbRef.current.style.transform = `translateY(calc(${scaledColorValue} * calc(var(--private-gradient-scroll-height) - 0.25rem)))`;
        }
    }, [colorIndexValue, sliderMax]);

    const getColorRefs = (element: HTMLDivElement, index: number) => {
        if (colorRefs.current) {
            colorRefs.current[index] = element;
        }
    };

    const updateTransitionOpacityClass = (selectColorIndex: number) => {
        if (selectColorIndex < colorIndexValue) {
            for (let index = sliderMax; index > selectColorIndex; index--) {
                colorRefs.current?.[index]?.classList.remove('transitionOpacity');
            }

            return;
        }

        for (let index = sliderMin; index <= selectColorIndex; index++) {
            colorRefs.current?.[index]?.classList.add('transitionOpacity');
        }
    };

    const updateSliderValue = (selectColorIndex: number, withAutoScroll = true) => {
        updateTransitionOpacityClass(selectColorIndex);
        setColorIndexValue(selectColorIndex);

        if (withAutoScroll && hiddenContainerRef.current) {
            hiddenContainerRef.current.scrollTo({
                top: hiddenContainerRef.current.offsetHeight * selectColorIndex,
            });
        }
    };

    const onChangeSliderValue = (event: ChangeEvent<HTMLInputElement>) => {
        const selectColorIndex = Number(event.target.value);

        updateSliderValue(selectColorIndex);
    };

    const onScrollHiddenContainer = (event: UIEvent<HTMLDivElement>) => {
        const selectColorIndex = Math.round(event.currentTarget.scrollTop / event.currentTarget.offsetHeight);
        const withAutoScroll = false;

        updateSliderValue(selectColorIndex, withAutoScroll);
    };

    const onChangeColorHex = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const hue = getHSLARawColor(value).color[0];
        const huesArray = gradients.map((item) => getHSLARawColor(item['500']).color[0]);
        const nearestIndex = findNearestIndex(hue, huesArray);

        updateSliderValue(nearestIndex);
        setColorHex(value);
    };

    return (
        <Container>
            <Header text="Тон" onClick={props.onPreviousPage} />
            <Wrapper>
                {gradients.map((colors, index) => (
                    <ColorTone ref={(element: HTMLDivElement) => getColorRefs(element, index)} colors={colors} />
                ))}
                <GradientVerticalSlider
                    value={colorIndexValue}
                    gradients={gradients}
                    min={sliderMin}
                    max={sliderMax}
                    thumbRef={thumbRef}
                    onChange={onChangeSliderValue}
                />
                <ColorBox>
                    <InputLabel>Подобрать ближайший по hex-коду</InputLabel>
                    <InputHex
                        onScroll={(e) => e.preventDefault()}
                        value={colorHex}
                        onChange={onChangeColorHex}
                        placeholder="#HEX"
                    />
                </ColorBox>

                <Grid view="default">
                    <Row>
                        <Col offset={16} size={6}>
                            <ColorToneDisplay>
                                <ColorToneDescription>Влияет на оттенок акцентного цвета темы</ColorToneDescription>
                                <ColorToneName>{formatColorToneName(toneColorsName[colorIndexValue])}</ColorToneName>
                            </ColorToneDisplay>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={16} size={5}>
                            <ContinueButton
                                onClick={() => {
                                    props.onNextPage?.();
                                }}
                                contentRight={<IconArrowRight />}
                                size="l"
                                stretching="filled"
                                text="Продолжить"
                                pin="circle-circle"
                                view="black"
                            />
                        </Col>
                    </Row>
                </Grid>

                <ScrollableHiddenContainer ref={hiddenContainerRef} onScroll={onScrollHiddenContainer}>
                    {gradients.map(() => (
                        <HiddenColorTone />
                    ))}
                </ScrollableHiddenContainer>
            </Wrapper>
            <NoScroll />
        </Container>
    );
};
