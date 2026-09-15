import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import { IconCross } from '@salutejs/plasma-icons';
import { plasma_homeds__dark as plasmaHomedsDark } from '@salutejs/plasma-themes';

import { BodyXXS, H2, H3, TextM } from '.';

/**
 * TMP: лендинг из smarthome generic_settings.cy.ts
 * (features/landing/page.tsx + mocks/landing.json). Удалить после проверки.
 */
const meta: Meta = {
    title: '1.TMP/Landing label',
    parameters: {
        controls: { disable: true },
        layout: 'fullscreen',
    },
    globals: {
        theme: 'plasma-homeds:dark',
    },
};

export default meta;

type Story = StoryObj;

const LANDING_IMAGE =
    'https://img.iot.sberdevices.ru/p/q100/a4/37/a44037bc360943cecb1fc88d38ef9f252eff82d9ca084fd4f37b56d450d77d7a.png';

const LAYOUT_IMAGE =
    'https://img.iot.sberdevices.ru/p/q100/d8/5e/d85d5e00e9ae91b248f5662c21bd1cc2480157756a268e395ffb83ef08819cf6.png';

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

const ForceDark = createGlobalStyle(plasmaHomedsDark);

const Page = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1rem;
`;

const Caption = styled.div`
    margin-bottom: 0.5rem;
    font-family: 'SB Sans Text', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: var(--text-secondary);
`;

const Phone = styled.div<{ $clip?: boolean }>`
    width: 390px;
    ${({ $clip }) => ($clip ? 'height: 884px; overflow: hidden;' : '')}
    background-color: var(--background-primary);
    color: var(--text-primary);
`;

const Container = styled.div`
    max-width: 45rem;
    margin: 0 auto;
    overflow: hidden;
    background-color: var(--background-primary);
`;

const Header = styled.div`
    position: relative;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 25%;
        background: linear-gradient(to top, var(--background-primary) 0%, transparent 100%);
        pointer-events: none;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 50%;
    background-color: var(--surface-transparent-secondary);
    color: var(--text-primary);
`;

const Image = styled.div`
    width: 100%;
    padding-top: 100%;
    background-color: #07352f;
    background-image: url(${JSON.stringify(LANDING_IMAGE)});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
`;

const labelCss = css<{ $fontFamily?: string; $midline?: boolean }>`
    position: absolute;
    z-index: 3;
    left: 1rem;
    bottom: 3rem;
    padding: 0.25rem 0.5rem;
    border-radius: 2rem;
    background-color: rgba(74, 250, 113, 1);
    color: var(--inverse-text-primary);
    text-transform: uppercase;
    ${({ $fontFamily }) => ($fontFamily ? `font-family: ${$fontFamily};` : '')}

    ${({ $midline }) =>
        $midline &&
        css`
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
        `}
`;

const Label = styled(BodyXXS)<{ $fontFamily?: string; $midline?: boolean }>`
    ${labelCss}
`;

const BDUIContainer = styled.div`
    position: relative;
    z-index: 2;
    padding: 0 1rem 8rem;
`;

const BDUITitle = styled(H2)<{ $fontFamily?: string }>`
    margin-top: -2rem;
    hyphens: none;
    ${({ $fontFamily }) => ($fontFamily ? `font-family: ${$fontFamily};` : '')}
`;

const LayoutImage = styled.div`
    display: block;
    width: 100%;
    height: 220px;
    margin-top: 32px;
    border-radius: 1.5rem;
    background-color: #0b3d38;
    background-image: url(${JSON.stringify(LAYOUT_IMAGE)});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const LayoutTitle = styled(H3)`
    margin-top: 16px;
`;

const BulletList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 8px;
`;

const BulletRow = styled.div`
    display: flex;
    gap: 0.25rem;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

type LandingCloneProps = {
    fontFamily?: string;
    midline?: boolean;
    clip?: boolean;
    withLayout?: boolean;
};

const LandingClone = ({ fontFamily, midline, clip, withLayout }: LandingCloneProps) => (
    <Phone $clip={clip}>
        <Container>
            <Header data-cy="landing-header">
                <Image />
                <CloseButton type="button" aria-label="close">
                    <IconCross />
                </CloseButton>
                <Label bold $fontFamily={fontFamily} $midline={midline}>
                    Про устройства
                </Label>
            </Header>
            <BDUIContainer>
                <BDUITitle bold={false} $fontFamily={fontFamily}>
                    Что умеет выключатель с нейтралью
                </BDUITitle>
                {withLayout ? (
                    <>
                        <LayoutImage />
                        <LayoutTitle bold={false}>Настраивайте сценарии для клавиш</LayoutTitle>
                        <BulletList>
                            <BulletRow>
                                <TextM>•</TextM>
                                <TextM>
                                    Каждая клавиша может не только включать одно или несколько устройств, но и запускать
                                    сценарии.
                                </TextM>
                            </BulletRow>
                            <BulletRow>
                                <TextM>•</TextM>
                                <TextM>
                                    К примеру, по нажатию на левую клавишу выключается свет во всём доме, а на правую —
                                    запускается сценарий «Доброе утро»
                                </TextM>
                            </BulletRow>
                        </BulletList>
                    </>
                ) : null}
            </BDUIContainer>
        </Container>
    </Phone>
);

export const Landing: Story = {
    name: 'generic_settings лендинг',
    render: () => (
        <Page>
            <FontFaces />
            <ForceDark />
            <Col>
                <Caption>
                    Копия features/landing/page.tsx — снепшот generic_settings, 390×884, dark. Красная линия — центр
                    pill. В обычном Chrome съезд слабый, как в Docker/WebView не будет.
                </Caption>
                <LandingClone midline clip withLayout />
            </Col>
        </Page>
    ),
};

const DiffPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    color: var(--text-primary);
`;

const Legend = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 44rem;
    font-family: 'SB Sans Text', sans-serif;
    font-size: 13px;
    line-height: 18px;
    color: var(--text-secondary);
`;

const Swatch = styled.span<{ $color: string }>`
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.35rem;
    vertical-align: -1px;
    border-radius: 2px;
    background: ${({ $color }) => $color};
`;

const DiffRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: flex-start;
`;

const ZoomFrame = styled.div<{ $zoom: number }>`
    width: fit-content;
    padding: 0.75rem;
    overflow: hidden;
    border: 1px dashed var(--outline-solid-secondary);
    border-radius: 1rem;
    background: var(--background-primary);
    zoom: ${({ $zoom }) => $zoom};
`;

const DarkZoomFrame = styled(ZoomFrame)`
    background: #000;
`;

const PillBox = styled.div`
    position: relative;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 2rem;
    background-color: rgb(74, 250, 113);

    &::after {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: 50%;
        z-index: 3;
        height: 1px;
        background: rgba(243, 25, 49, 0.85);
        pointer-events: none;
    }
`;

const TextStack = styled.div`
    position: relative;
    isolation: isolate;
`;

const Ghost = styled(BodyXXS)<{ $color: string; $fontFamily?: string; $transform?: string }>`
    margin: 0;
    color: ${({ $color }) => $color};
    text-transform: ${({ $transform }) => $transform || 'none'};
    ${({ $fontFamily }) => ($fontFamily ? `font-family: ${$fontFamily};` : '')}
`;

const GhostOver = styled(Ghost)`
    position: absolute;
    inset: 0;
`;

const overlayFlicker = keyframes`
    0%,
    49% {
        opacity: 1;
    }

    50%,
    100% {
        opacity: 0;
    }
`;

const GhostFlicker = styled(GhostOver)`
    animation: ${overlayFlicker} 0.7s steps(1, end) infinite;

    ${ZoomFrame}:hover & {
        animation-play-state: paused;
    }
`;

const TitleStack = styled.div`
    position: relative;
    isolation: isolate;
    max-width: 22rem;
`;

const TitleGhost = styled(H2)<{ $color: string; $fontFamily?: string }>`
    margin: 0;
    hyphens: none;
    color: ${({ $color }) => $color};
    ${({ $fontFamily }) => ($fontFamily ? `font-family: ${$fontFamily};` : '')}
`;

const TitleOver = styled(TitleGhost)`
    position: absolute;
    inset: 0;
`;

const FONT_NEW = "'SB Sans Display 0.3', sans-serif";
const COLOR_OLD = '#ff3355';
const COLOR_NEW = '#00e8ff';

const OverlayPill = ({
    mode,
    children,
    transform = 'none',
}: {
    mode: 'ghost' | 'difference' | 'flicker';
    children: string;
    transform?: 'none' | 'uppercase';
}) => {
    const oldLayer = (
        <Ghost bold $color={mode === 'difference' ? '#fff' : COLOR_OLD} $transform={transform}>
            {children}
        </Ghost>
    );
    const newColor = mode === 'difference' ? '#fff' : COLOR_NEW;
    const newLayer =
        mode === 'flicker' ? (
            <GhostFlicker bold $color={COLOR_OLD} $fontFamily={FONT_NEW} $transform={transform}>
                {children}
            </GhostFlicker>
        ) : (
            <GhostOver
                bold
                $color={newColor}
                $fontFamily={FONT_NEW}
                $transform={transform}
                style={mode === 'difference' ? { mixBlendMode: 'difference' } : { mixBlendMode: 'screen' }}
            >
                {children}
            </GhostOver>
        );

    return (
        <PillBox>
            <TextStack>
                {oldLayer}
                {newLayer}
            </TextStack>
        </PillBox>
    );
};

const OverlayTitle = () => (
    <TitleStack>
        <TitleGhost bold={false} $color={COLOR_OLD}>
            Что умеет выключатель с нейтралью
        </TitleGhost>
        <TitleOver bold={false} $color={COLOR_NEW} $fontFamily={FONT_NEW} style={{ mixBlendMode: 'screen' }}>
            Что умеет выключатель с нейтралью
        </TitleOver>
    </TitleStack>
);

export const LandingCompare: Story = {
    name: 'Display / Text / 0.3.0',
    render: () => (
        <Page>
            <FontFaces />
            <ForceDark />
            <Col>
                <Caption>SB Sans Display 0.2.0 — как в тесте</Caption>
                <LandingClone midline />
            </Col>
            <Col>
                <Caption>SB Sans Text</Caption>
                <LandingClone midline fontFamily="'SB Sans Text', sans-serif" />
            </Col>
            <Col>
                <Caption>SB Sans Display 0.3.0</Caption>
                <LandingClone midline fontFamily="'SB Sans Display 0.3', sans-serif" />
            </Col>
        </Page>
    ),
};

export const PixelDiff: Story = {
    name: '1px overlay',
    render: () => (
        <DiffPage>
            <FontFaces />
            <ForceDark />
            <Legend>
                <span>
                    <Swatch $color={COLOR_OLD} />
                    красный — Display 0.2.0
                </span>
                <span>
                    <Swatch $color={COLOR_NEW} />
                    голубой — Display 0.3.0
                </span>
                <span>где глифы совпали — белое; цветная кайма — сдвиг. ×8, 1 css-px = 8 экранных.</span>
            </Legend>
            <DiffRow>
                <Col>
                    <Caption>Ghost overlay ×8 — кайма 1px сразу видна</Caption>
                    <ZoomFrame $zoom={8}>
                        <OverlayPill mode="ghost" transform="uppercase">
                            Про устройства
                        </OverlayPill>
                    </ZoomFrame>
                </Col>
                <Col>
                    <Caption>Difference ×8 — чёрное = совпало, светлая кромка = дельта</Caption>
                    <DarkZoomFrame $zoom={8}>
                        <OverlayPill mode="difference" transform="uppercase">
                            Про устройства
                        </OverlayPill>
                    </DarkZoomFrame>
                </Col>
                <Col>
                    <Caption>Мерцание ×8 — 0.2 ↔ 0.3, наведи чтобы стоп</Caption>
                    <ZoomFrame $zoom={8}>
                        <OverlayPill mode="flicker" transform="uppercase">
                            Про устройства
                        </OverlayPill>
                    </ZoomFrame>
                </Col>
            </DiffRow>
            <Caption>
                Регистр не причина: метрики ascent/descent одни на весь шрифт. На капсе пусто над буквами и нет
                выносных, поэтому съезд к верху pill заметнее. Строчные с у/д/р/ц заполняют descent и выглядят ровнее.
            </Caption>
            <DiffRow>
                <Col>
                    <Caption>uppercase — как в лендинге</Caption>
                    <ZoomFrame $zoom={8}>
                        <OverlayPill mode="ghost" transform="uppercase">
                            Про устройства
                        </OverlayPill>
                    </ZoomFrame>
                </Col>
                <Col>
                    <Caption>как написано (смешанный)</Caption>
                    <ZoomFrame $zoom={8}>
                        <OverlayPill mode="ghost">Про устройства</OverlayPill>
                    </ZoomFrame>
                </Col>
                <Col>
                    <Caption>строчные без выносных</Caption>
                    <ZoomFrame $zoom={8}>
                        <OverlayPill mode="ghost">оаесн</OverlayPill>
                    </ZoomFrame>
                </Col>
                <Col>
                    <Caption>строчные с выносными у д р ц</Caption>
                    <ZoomFrame $zoom={8}>
                        <OverlayPill mode="ghost">удруц</OverlayPill>
                    </ZoomFrame>
                </Col>
            </DiffRow>
            <Col>
                <Caption>Тот же приём на H2 ×4</Caption>
                <ZoomFrame $zoom={4}>
                    <OverlayTitle />
                </ZoomFrame>
            </Col>
        </DiffPage>
    ),
};
