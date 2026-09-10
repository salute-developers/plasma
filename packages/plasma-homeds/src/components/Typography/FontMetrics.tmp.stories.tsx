import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import styled, { createGlobalStyle, css } from 'styled-components';

import { BodyXXS, H3 } from '.';

/**
 * TMP: воспроизведение съезда SB Sans Display.
 * Удалить файл после проверки.
 *
 * На Mac/Retina смещение ~0.4px и почти не видно.
 * На Cypress Linux 1× / WebView хинтинг даёт 1–2px — текст прилипает к верху pill.
 */
const meta: Meta = {
    title: '1.TMP/SB Sans Display metrics',
    parameters: {
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj;

const FontFaces = createGlobalStyle`
    @font-face {
        font-family: 'SB Sans Display 0.3';
        src: url('fonts/SBSansDisplay.0.3.0/SBSansDisplay-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'SB Sans Display 0.3';
        src: url('fonts/SBSansDisplay.0.3.0/SBSansDisplay-Semibold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
    }
`;

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    color: var(--text-primary);
`;

const Note = styled.p`
    max-width: 40rem;
    margin: 0;
    font-family: 'SB Sans Text', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: var(--text-secondary);
`;

const Screens = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
`;

const Screen = styled.div`
    width: 390px;
    height: 420px;
    padding: 1.5rem;
    overflow: hidden;
    background: #080808;
    color: #fff;
`;

const ScreenTitle = styled.div`
    margin-bottom: 0.75rem;
    font-family: 'SB Sans Text', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff8f;
`;

const labelCss = css`
    position: relative;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 2rem;
    background-color: rgb(74, 250, 113);
    color: #fff;
    text-transform: uppercase;

    /* как в Docker/Cypress: без сглаживания, 1 css-пиксель = 1 device-pixel */
    -webkit-font-smoothing: none;
    -moz-osx-font-smoothing: unset;
    text-rendering: optimizeSpeed;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: 50%;
        height: 1px;
        background: rgba(243, 25, 49, 0.85);
        pointer-events: none;
    }
`;

const Label = styled(BodyXXS)`
    ${labelCss}
`;

const LabelText = styled(BodyXXS)`
    ${labelCss}
    font-family: 'SB Sans Text', sans-serif;
`;

const LabelFixed = styled(BodyXXS)`
    ${labelCss}
    font-family: 'SB Sans Display 0.3', sans-serif;
`;

const Heading = styled(H3)`
    margin-top: 1rem;
    color: #fffffff5;
`;

const Crisp = styled.div`
    /* уменьшаем до 1×, чтобы увидеть хинтинг как в Cypress 390×884 */
    zoom: 1;
    transform: scale(1);
`;

const PixelFrame = styled.div`
    width: 390px;
    /* форсируем растр 1dppx: рисуем в 390 логических px на экране без retina */
    transform: scale(1);
    image-rendering: pixelated;
`;

const CompareRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: flex-start;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Caption = styled.div`
    font-family: 'SB Sans Text', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: var(--text-secondary);
`;

const ZoomWrap = styled.div`
    width: fit-content;
    padding: 0.75rem;
    border: 1px dashed var(--outline-solid-secondary);
    border-radius: 1rem;
`;

const ZoomInner = styled.div`
    width: fit-content;
    zoom: 2;
`;

const Scene = ({ LabelCmp, title }: { LabelCmp: typeof Label; title: string }) => (
    <Screen>
        <ScreenTitle>{title}</ScreenTitle>
        <PixelFrame>
            <Crisp>
                <LabelCmp>про устройства</LabelCmp>
                <Heading bold={false}>Что умеет выключатель с нейтралью</Heading>
            </Crisp>
        </PixelFrame>
    </Screen>
);

export const Reproduce: Story = {
    render: () => (
        <Page>
            <FontFaces />
            <Note>
                В обычном Chrome/Storybook проблемы не будет — так и задумано. WebView рисует шрифт другим
                растеризатором (без LCD-сглаживания, без subpixel positioning, hinting slight). CSS это не эмулирует.
            </Note>
            <Screens>
                <Scene LabelCmp={Label} title="Display — как в homeds / сломанный снепшот" />
                <Scene LabelCmp={LabelText} title="SB Sans Text" />
                <Scene LabelCmp={LabelFixed} title="Display 0.3.0 — метрики 95% / 25% в файле" />
            </Screens>
            <Note>Тот же лейбл ×2. Красная линия — геометрический центр pill.</Note>
            <CompareRow>
                <Col>
                    <Caption>Display</Caption>
                    <ZoomWrap>
                        <ZoomInner>
                            <Label>про устройства</Label>
                        </ZoomInner>
                    </ZoomWrap>
                </Col>
                <Col>
                    <Caption>Text</Caption>
                    <ZoomWrap>
                        <ZoomInner>
                            <LabelText>про устройства</LabelText>
                        </ZoomInner>
                    </ZoomWrap>
                </Col>
                <Col>
                    <Caption>Display 0.3.0</Caption>
                    <ZoomWrap>
                        <ZoomInner>
                            <LabelFixed>про устройства</LabelFixed>
                        </ZoomInner>
                    </ZoomWrap>
                </Col>
            </CompareRow>
        </Page>
    ),
};
