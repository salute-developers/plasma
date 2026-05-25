import * as React from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMic } from '@salutejs/plasma-icons';
import { action } from 'storybook/actions';
import { getButtonStories, getConfigVariations } from '@salutejs/plasma-sb-utils';
import { bodySMedium, h4Medium, textPrimary, textSecondary } from '@salutejs-ds/sdds_sbcom/theme/tokens';
import styled from 'styled-components';

import { Counter } from '../Counter/Counter';

import { Button } from './Button';
import { config } from './Button.config';

type ButtonProps = ComponentProps<typeof Button>;

const { meta: META, Default, WithValue } = getButtonStories({
    component: Button,
    componentConfig: config,
    additionalComponents: {
        Counter,
    },
});

const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/⚠️ Button',
};

export default meta;

export { Default, WithValue };

const onClick = action('onClick');

/** Размер иконки в px для кнопки 48 → 24 (соответствует макету 24 / 24 / 20 / 16). */
const buttonSizeToIconPx: Record<string, number> = {
    '48': 24,
    '40': 24,
    '32': 20,
    '24': 16,
};

const sizeTypography: Record<
    string,
    { token: string; fontFamily: string; fontSize: string; lineHeight: string }
> = {
    '48': { token: 'h4Medium', ...h4Medium },
    '40': { token: 'h4Medium', ...h4Medium },
    '32': { token: 'h4Medium', ...h4Medium },
    '24': { token: 'bodySMedium', ...bodySMedium },
};

/** IconMic `size="s"` рендерится как 24×24 px при базовом rem. */
const ICON_MIC_BASE_PX = 24;

const IconOuter = styled.span<{ $px: number }>`
    display: inline-flex;
    width: ${({ $px }) => $px}px;
    height: ${({ $px }) => $px}px;
    align-items: center;
    justify-content: center;
`;

const IconInner = styled.span<{ $scale: number }>`
    display: inline-flex;
    transform: ${({ $scale }) => `scale(${$scale})`};
    transform-origin: center center;
`;

function ShowcaseIcon({ buttonSize }: { buttonSize: string }) {
    const px = buttonSizeToIconPx[buttonSize] ?? ICON_MIC_BASE_PX;
    const scale = px / ICON_MIC_BASE_PX;

    return (
        <IconOuter $px={px}>
            <IconInner $scale={scale}>
                <IconMic size="s" color="inherit" />
            </IconInner>
        </IconOuter>
    );
}

const { sizes: configSizes, views } = getConfigVariations(config);
/** Колонки слева направо: от большего размера к меньшему */
const showcaseSizes = [...configSizes].reverse();

const showcaseViews = views;

const stateMatrix = [
    { disabled: false, isLoading: false, text: 'Button' as const },
    { disabled: true, isLoading: false, text: 'Disabled' as const },
    { disabled: false, isLoading: true, text: 'Button' as const },
] as const;

type IconColumn = 'none' | 'start' | 'end';

const iconColumns: IconColumn[] = ['none', 'start', 'end'];

const MatrixGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 0.75rem 1rem;
    align-items: center;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-width: 0;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: flex-start;
`;

const ViewBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SizeCaption = styled.div`
    color: ${textPrimary};
    font-family: ${h4Medium.fontFamily};
    font-size: ${h4Medium.fontSize};
    font-weight: ${h4Medium.fontWeight};
    line-height: ${h4Medium.lineHeight};
`;

const TypographyMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    color: ${textSecondary};
    font-family: monospace;
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-bottom: 0.5rem;
`;

const ViewCaption = styled.div`
    color: ${textSecondary};
    font-family: monospace;
    font-size: 0.75rem;
    line-height: 1.25rem;
`;

/** Скрытый элемент для чтения вычисленных значений CSS-переменных темы. */
const TypographyProbe = styled.span`
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    white-space: nowrap;
`;

type TypographyValues = Pick<typeof h4Medium, 'fontFamily' | 'fontSize' | 'lineHeight'>;

function useResolvedTypography(values: TypographyValues) {
    const probeRef = React.useRef<HTMLSpanElement>(null);
    const [resolved, setResolved] = React.useState<TypographyValues | null>(null);

    React.useLayoutEffect(() => {
        const el = probeRef.current;

        if (!el) {
            return;
        }

        const style = getComputedStyle(el);

        setResolved({
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            lineHeight: style.lineHeight,
        });
    }, [values.fontFamily, values.fontSize, values.lineHeight]);

    return { probeRef, resolved };
}

function TypographyMetaBlock({ size }: { size: string }) {
    const typo = sizeTypography[size];

    if (!typo) {
        return null;
    }

    const { probeRef, resolved } = useResolvedTypography(typo);

    return (
        <TypographyMeta>
            <TypographyProbe
                ref={probeRef}
                style={{
                    fontFamily: typo.fontFamily,
                    fontSize: typo.fontSize,
                    lineHeight: typo.lineHeight,
                }}
            />
            <div>{typo.token}</div>
            {resolved ? (
                <>
                    <div>fontFamily: {resolved.fontFamily}</div>
                    <div>fontSize: {resolved.fontSize}</div>
                    <div>lineHeight: {resolved.lineHeight}</div>
                </>
            ) : null}
        </TypographyMeta>
    );
}

function MatrixButton({
    size,
    view,
    disabled,
    isLoading,
    text,
    iconColumn,
}: {
    size: string;
    view: string;
    disabled: boolean;
    isLoading: boolean;
    text: string;
    iconColumn: IconColumn;
}) {
    const icon = <ShowcaseIcon buttonSize={size} />;

    return (
        <Button
            view={view}
            size={size}
            text={text}
            disabled={disabled}
            isLoading={isLoading}
            focused
            contentLeft={iconColumn === 'start' ? icon : undefined}
            contentRight={iconColumn === 'end' ? icon : undefined}
            onClick={onClick}
        />
    );
}

export const Showcase: StoryObj<ButtonProps> = {
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <Row>
            {showcaseSizes.map((size) => (
                <Column key={size}>
                    <SizeCaption>{`Button_${size}`}</SizeCaption>
                    <TypographyMetaBlock size={size} />
                    {showcaseViews.map((view) => (
                        <ViewBlock key={view}>
                            <ViewCaption>{view}</ViewCaption>
                            <MatrixGrid>
                                {stateMatrix.flatMap((state) =>
                                    iconColumns.map((iconColumn) => (
                                        <MatrixButton
                                            key={`${state.text}-${String(state.disabled)}-${String(
                                                state.isLoading,
                                            )}-${iconColumn}`}
                                            size={size}
                                            view={view}
                                            disabled={state.disabled}
                                            isLoading={state.isLoading}
                                            text={state.text}
                                            iconColumn={iconColumn}
                                        />
                                    )),
                                )}
                            </MatrixGrid>
                        </ViewBlock>
                    ))}
                </Column>
            ))}
        </Row>
    ),
};
