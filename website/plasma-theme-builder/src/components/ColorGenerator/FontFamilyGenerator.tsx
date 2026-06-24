import React, { ChangeEvent, UIEvent, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { textPrimary } from '@salutejs/plasma-tokens-b2c/new';

import { Container as ContainerBase, Col, Row } from '@salutejs/plasma-b2c';
import {
    h1,
    h1Bold,
    h2,
    h2Bold,
    h3,
    h3Bold,
    h4,
    h4Bold,
    h5,
    h5Bold,
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    bodyXXS,
    bodyXXSBold,
} from '@salutejs/plasma-typo';

import { Header } from './Header';
import { RadioboxButton } from './RadioboxButton';
import { Archetype, useTheme } from '../../GlobalStyle';

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
`;

const ColorTone = styled.div`
    position: absolute;
    inset: 0;

    background: linear-gradient(90deg, #080808 0%, #080808 25.03%, #080808 49.72%, #080808 74.76%, #080808 100%);

    padding: 2rem;
    color: #ffffff17;
    font-size: 4rem;
`;

const ScrollableHiddenContainer = styled.div`
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
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
`;

const ColorToneDescription = styled.div`
    width: 16.25rem;
    margin-bottom: 1.5rem;

    color: ${textPrimary};

    font-family: var(--plasma-typo-text-s-font-family);
    font-size: var(--plasma-typo-text-s-font-size);
    font-weight: var(--plasma-typo-text-s-font-weight);
    line-height: var(--plasma-typo-text-s-line-height);
`;

const ColorToneName = styled.div`
    color: ${textPrimary};

    font-family: var(--plasma-typo-dspl-m-font-family);
    font-size: var(--plasma-typo-dspl-m-font-size);
    font-weight: var(--plasma-typo-dspl-m-font-weight);
    line-height: var(--plasma-typo-dspl-m-line-height);

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const HelperBlock = styled.div`
    flex: 1;
    max-width: calc(100% / var(--plasma_private-grid-cols-count) * var(--plasma_private-grid-col-largeM-offset, 16));
`;

const ColorToneName2 = styled.div`
    margin-top: 0.75rem;

    color: ${textPrimary};

    font-family: var(--plasma-typo-body-m-font-family);
    font-size: var(--plasma-typo-body-m-font-size);
    font-weight: var(--plasma-typo-body-m-font-weight);
    line-height: var(--plasma-typo-body-m-line-height);
`;

const StyledHeader = styled(Header)``;

const TypographyPreview = styled.div`
    position: absolute;
    left: 3.375rem;
    bottom: 2.875rem;
`;

const TypographyPreviewBlock = styled.div`
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const TypographyLabel = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${bodyXXS};
`;

const TypographySeparator = styled.span`
    margin: 0 -0.625rem;
`;

/** HEADER 1 */
const HeaderH1Wrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${h1};

    display: flex;
    gap: 0.5rem;
`;
const HeaderH1Regular = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h1};
`;
const HeaderH1Bold = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h1Bold};
`;
const BodyLWrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${bodyL};

    display: flex;
    gap: 0.5rem;
`;
const BodyLRegular = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyL};
`;
const BodyLBold = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyLBold};
`;

/** HEADER 2 */
const HeaderH2Wrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${h2};

    display: flex;
    gap: 0.5rem;
`;
const HeaderH2Regular = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h2};
`;
const HeaderH2Bold = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h2Bold};
`;
const BodyMWrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${bodyM};

    display: flex;
    gap: 0.5rem;
`;
const BodyMRegular = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyM};
`;
const BodyMBold = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyMBold};
`;

/** HEADER 3 */
const HeaderH3Wrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${h3};

    display: flex;
    gap: 0.5rem;
`;
const HeaderH3Regular = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h3};
`;
const HeaderH3Bold = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h3Bold};
`;
const BodySWrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${bodyS};

    display: flex;
    gap: 0.5rem;
`;
const BodySRegular = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyS};
`;
const BodySBold = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodySBold};
`;

/** HEADER 4 */
const HeaderH4Wrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${h4};

    display: flex;
    gap: 0.5rem;
`;
const HeaderH4Regular = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h4};
`;
const HeaderH4Bold = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h4Bold};
`;
const BodyXSWrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${bodyXS};

    display: flex;
    gap: 0.5rem;
`;
const BodyXSRegular = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyXS};
`;
const BodyXSBold = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyXSBold};
`;

/** HEADER 5 */
const HeaderH5Wrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${h5};

    display: flex;
    gap: 0.5rem;
`;
const HeaderH5Regular = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h5};
`;
const HeaderH5Bold = styled.span`
    color: rgba(255, 255, 255, 0.96);

    ${h5Bold};
`;
const BodyXXSWrapper = styled.div`
    color: rgba(255, 255, 255, 0.28);

    ${bodyXXS};

    display: flex;
    gap: 0.5rem;
`;
const BodyXXSRegular = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyXXS};
`;
const BodyXXSBold = styled.span`
    color: rgba(255, 255, 255, 0.8);

    ${bodyXXSBold};
`;

const fontFamilyMap: {
    archetype: Archetype;
    name: string;
    displayFontFamily: string;
    textFontFamily: string;
}[] = [
    {
        archetype: 'ruler',
        name: 'Правитель',
        displayFontFamily: 'SB Sans Display',
        textFontFamily: 'SB Sans Text',
    },
    {
        archetype: 'sage',
        name: 'Мудрец',
        displayFontFamily: 'SB Serif Display',
        textFontFamily: 'SB Sans Text',
    },
    {
        archetype: 'mage',
        name: 'Маг',
        displayFontFamily: 'SB Sans Display',
        textFontFamily: 'SB Sans Text',
    },
    {
        archetype: 'soulmate',
        name: 'Душа компании',
        displayFontFamily: 'SB Sans Display',
        textFontFamily: 'SB Sans Text',
    },
    {
        archetype: 'soulmate',
        name: 'Длинное название',
        displayFontFamily: 'SB Sans Display SB Sans Display SB Sans Display SB Sans Display SB Sans Display',
        textFontFamily: 'SB Sans Text',
    },
    {
        archetype: 'soulmate',
        name: 'Короткое название',
        displayFontFamily: 'SB Sans',
        textFontFamily: 'SB Sans Text',
    },
];

interface FontFamilyGeneratorProps {
    onNextPage?: () => void;
    onPreviousPage?: () => void;
}

export const FontFamilyGenerator = (props: FontFamilyGeneratorProps) => {
    const hiddenContainerRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    const { toggleArchetype } = useTheme();

    const sliderMin = 0;
    const sliderMax = fontFamilyMap.length - 1;

    const [colorIndexValue, setColorIndexValue] = useState(0);

    useEffect(() => {
        const scaledColorValue = ((colorIndexValue - sliderMin) / (sliderMax - sliderMin)).toFixed(3);

        if (thumbRef.current) {
            thumbRef.current.style.transform = `translateY(calc(${scaledColorValue} * calc(var(--private-gradient-scroll-height) - 0.25rem)))`;
        }
    }, [colorIndexValue, sliderMax]);

    const updateSliderValue = (selectColorIndex: number, withAutoScroll = true) => {
        setColorIndexValue(selectColorIndex);
        toggleArchetype(fontFamilyMap[selectColorIndex].archetype);

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
            <StyledHeader text="Типографика" onClick={props.onPreviousPage} />
            <Wrapper>
                {fontFamilyMap.map(() => (
                    <ColorTone />
                ))}

                <TypographyPreview>
                    <TypographyPreviewBlock>
                        <HeaderH1Wrapper>
                            <HeaderH1Bold>Bold</HeaderH1Bold>
                            <TypographySeparator>&</TypographySeparator>
                            <HeaderH1Regular>Regular</HeaderH1Regular>
                            <TypographyLabel>headerH1</TypographyLabel>
                        </HeaderH1Wrapper>
                        <BodyLWrapper>
                            <BodyLBold>Bold</BodyLBold>
                            <TypographySeparator>&</TypographySeparator>
                            <BodyLRegular>Regular</BodyLRegular>
                            <TypographyLabel>bodyL</TypographyLabel>
                        </BodyLWrapper>
                    </TypographyPreviewBlock>

                    <TypographyPreviewBlock>
                        <HeaderH2Wrapper>
                            <HeaderH2Bold>Bold</HeaderH2Bold>
                            <TypographySeparator>&</TypographySeparator>
                            <HeaderH2Regular>Regular</HeaderH2Regular>
                            <TypographyLabel>headerH2</TypographyLabel>
                        </HeaderH2Wrapper>
                        <BodyMWrapper>
                            <BodyMBold>Bold</BodyMBold>
                            <TypographySeparator>&</TypographySeparator>
                            <BodyMRegular>Regular</BodyMRegular>
                            <TypographyLabel>BodyM</TypographyLabel>
                        </BodyMWrapper>
                    </TypographyPreviewBlock>

                    <TypographyPreviewBlock>
                        <HeaderH3Wrapper>
                            <HeaderH3Bold>Bold</HeaderH3Bold>
                            <TypographySeparator>&</TypographySeparator>
                            <HeaderH3Regular>Regular</HeaderH3Regular>
                            <TypographyLabel>headerH3</TypographyLabel>
                        </HeaderH3Wrapper>
                        <BodySWrapper>
                            <BodySBold>Bold</BodySBold>
                            <TypographySeparator>&</TypographySeparator>
                            <BodySRegular>Regular</BodySRegular>
                            <TypographyLabel>BodyS</TypographyLabel>
                        </BodySWrapper>
                    </TypographyPreviewBlock>

                    <TypographyPreviewBlock>
                        <HeaderH4Wrapper>
                            <HeaderH4Bold>Bold</HeaderH4Bold>
                            <TypographySeparator>&</TypographySeparator>
                            <HeaderH4Regular>Regular</HeaderH4Regular>
                            <TypographyLabel>headerH4</TypographyLabel>
                        </HeaderH4Wrapper>
                        <BodyXSWrapper>
                            <BodyXSBold>Bold</BodyXSBold>
                            <TypographySeparator>&</TypographySeparator>
                            <BodyXSRegular>Regular</BodyXSRegular>
                            <TypographyLabel>BodyXS</TypographyLabel>
                        </BodyXSWrapper>
                    </TypographyPreviewBlock>

                    <TypographyPreviewBlock>
                        <HeaderH5Wrapper>
                            <HeaderH5Bold>Bold</HeaderH5Bold>
                            <TypographySeparator>&</TypographySeparator>
                            <HeaderH5Regular>Regular</HeaderH5Regular>
                            <TypographyLabel>headerH5</TypographyLabel>
                        </HeaderH5Wrapper>
                        <BodyXXSWrapper>
                            <BodyXXSBold>Bold</BodyXXSBold>
                            <TypographySeparator>&</TypographySeparator>
                            <BodyXXSRegular>Regular</BodyXXSRegular>
                            <TypographyLabel>BodyXXS</TypographyLabel>
                        </BodyXXSWrapper>
                    </TypographyPreviewBlock>
                </TypographyPreview>

                <Grid view="default">
                    <Row>
                        <Col offset={16} size={5}>
                            <ColorToneDisplay>
                                <ColorToneDescription>
                                    Определяет шрифты <br /> для заголовков и текста
                                </ColorToneDescription>
                            </ColorToneDisplay>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            style={{
                                width: '100%',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    position: 'relative',
                                    top: '6.125rem',
                                    height: '15.25rem',
                                }}
                            >
                                <HelperBlock />
                                <ColorToneName>
                                    {fontFamilyMap[colorIndexValue].displayFontFamily}
                                    <ColorToneName2>{fontFamilyMap[colorIndexValue].textFontFamily}</ColorToneName2>
                                </ColorToneName>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={16} size={10}>
                            <div
                                style={{
                                    position: 'relative',
                                    zIndex: 999,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    top: '8.55rem',
                                }}
                            >
                                {fontFamilyMap.map((item, index) => (
                                    <RadioboxButton
                                        key={`test-${index}`}
                                        id={`test-${index}`}
                                        label={item.name}
                                        value={index}
                                        view="white"
                                        checked={colorIndexValue === index}
                                        onChange={handleOptionChange}
                                        onClick={() => {
                                            props.onNextPage?.();
                                        }}
                                    />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Grid>

                <ScrollableHiddenContainer ref={hiddenContainerRef} onScroll={onScrollHiddenContainer}>
                    {fontFamilyMap.map(() => (
                        <HiddenColorTone />
                    ))}
                </ScrollableHiddenContainer>
            </Wrapper>
            <NoScroll />
        </Container>
    );
};
