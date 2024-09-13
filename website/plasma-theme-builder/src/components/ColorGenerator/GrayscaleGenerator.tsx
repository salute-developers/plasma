import React, { ChangeEvent, UIEvent, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { onLightTextPrimary, onLightTextSecondary } from '@salutejs/plasma-tokens-b2c/new';
import { Container as ContainerBase, Col, Row } from '@salutejs/plasma-b2c';
import { general } from '@salutejs/plasma-colors';
import { upperFirstLetter } from '@salutejs/plasma-tokens-utils';

import { Header } from './Header';
import { BackgroundGradientSaturation } from './types';
import { RadioboxButton } from './RadioboxButton';

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

const grayShadeIndex = Math.max(Object.entries(general).length - 2, 1);

const toneColorsName = Object.keys(general).slice(grayShadeIndex).reverse();

const gradients = Object.entries(general)
    .map(([_, saturation]) => ({
        1000: saturation['1000'],
        800: saturation['800'],
        500: saturation['500'],
        250: saturation['250'],
        100: saturation['100'],
    }))
    .slice(grayShadeIndex)
    .reverse();

const formatColorToneName = (value: string) => {
    return upperFirstLetter(value).replace(/([a-z])([A-Z])/g, '$1 $2');
};

interface GrayscaleGeneratorProps {
    onNextPage?: () => void;
    onPreviousPage?: () => void;
}

export const GrayscaleGenerator = (props: GrayscaleGeneratorProps) => {
    const colorRefs = useRef<HTMLDivElement[]>([]);
    const hiddenContainerRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    const sliderMin = 0;
    const sliderMax = gradients.length - 1;

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

    const onScrollHiddenContainer = (event: UIEvent<HTMLDivElement>) => {
        const selectColorIndex = Math.round(event.currentTarget.scrollTop / event.currentTarget.offsetHeight);
        const withAutoScroll = false;

        updateSliderValue(selectColorIndex, withAutoScroll);
    };

    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateSliderValue(Number(event.target.value));
    };

    return (
        <Container>
            <Header text="Оттенок серого" onClick={props.onPreviousPage} />
            <Wrapper>
                {gradients.map((colors, index) => (
                    <ColorTone ref={(element: HTMLDivElement) => getColorRefs(element, index)} colors={colors} />
                ))}

                <Grid view="default">
                    <Row>
                        <Col offset={16} size={6}>
                            <ColorToneDisplay>
                                <ColorToneDescription>Определяет оттенок серого для текста и фона</ColorToneDescription>
                                <ColorToneName>{formatColorToneName(toneColorsName[colorIndexValue])}</ColorToneName>
                            </ColorToneDisplay>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={16} size={7}>
                            <div
                                style={{
                                    position: 'relative',
                                    zIndex: 999,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    top: '13rem',
                                }}
                            >
                                <RadioboxButton
                                    id="test-1"
                                    label="Без примесей"
                                    view="black"
                                    value={0}
                                    checked={colorIndexValue === 0}
                                    onChange={handleOptionChange}
                                    onClick={() => {
                                        props.onNextPage?.();
                                    }}
                                />
                                <RadioboxButton
                                    id="test-2"
                                    label="Холодный"
                                    view="black"
                                    value={1}
                                    checked={colorIndexValue === 1}
                                    onChange={handleOptionChange}
                                    onClick={() => {
                                        props.onNextPage?.();
                                    }}
                                />
                            </div>
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
