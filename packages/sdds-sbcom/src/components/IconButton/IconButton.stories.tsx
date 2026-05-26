import * as React from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMic } from '@salutejs/plasma-icons';
import { action } from 'storybook/actions';
import { disableProps, getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { h4Medium, textPrimary, textSecondary } from '@salutejs-ds/sdds_sbcom/theme/tokens';
import styled from 'styled-components';

import { IconButton } from './IconButton';
import { config } from './IconButton.config';

type IconButtonProps = ComponentProps<typeof IconButton>;

const { sizes: configSizes, views: configViews } = getConfigVariations(config);

const meta: Meta<IconButtonProps> = {
    title: 'Data Entry/⚠️ IconButton',
    decorators: [InSpacingDecorator],
    component: IconButton,
    args: {
        view: 'accentFiled',
        size: '40',
        disabled: false,
        focused: true,
        isLoading: false,
    },
    argTypes: {
        view: {
            options: configViews,
            control: { type: 'select' },
        },
        size: {
            options: configSizes,
            control: { type: 'select' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        isLoading: {
            control: { type: 'boolean' },
        },
        ...disableProps([
            'focused',
            'children',
            'theme',
            'loader',
            'onClick',
            'onFocus',
            'onBlur',
            'pin',
        ]),
    },
};

export default meta;

const onClick = action('onClick');

/** Размер иконки в px для IconButton 48 → 24 (соответствует макету 24 / 24 / 20). */
const iconButtonSizeToIconPx: Record<string, number> = {
    '48': 24,
    '40': 24,
    '32': 20,
};

const sizeTypography: Record<
    string,
    { token: string; fontFamily: string; fontSize: string; lineHeight: string }
> = {
    '48': { token: 'h4Medium', ...h4Medium },
    '40': { token: 'h4Medium', ...h4Medium },
    '32': { token: 'h4Medium', ...h4Medium },
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
    const px = iconButtonSizeToIconPx[buttonSize] ?? ICON_MIC_BASE_PX;
    const scale = px / ICON_MIC_BASE_PX;

    return (
        <IconOuter $px={px}>
            <IconInner $scale={scale}>
                <IconMic size="s" color="inherit" />
            </IconInner>
        </IconOuter>
    );
}

/** Колонки слева направо: от большего размера к меньшему */
const showcaseSizes = [...configSizes].reverse();

const showcaseViews = configViews;

const stateMatrix = [
    { disabled: false, isLoading: false },
    { disabled: true, isLoading: false },
    { disabled: false, isLoading: true },
] as const;

const StateColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
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

function MatrixIconButton({
    size,
    view,
    disabled,
    isLoading,
}: {
    size: string;
    view: string;
    disabled: boolean;
    isLoading: boolean;
}) {
    return (
        <IconButton
            view={view}
            size={size}
            disabled={disabled}
            isLoading={isLoading}
            focused
            pin="circle-circle"
            onClick={onClick}
        >
            <ShowcaseIcon buttonSize={size} />
        </IconButton>
    );
}

export const Default: StoryObj<IconButtonProps> = {
    argTypes: { ...disableProps(['children']) },
    render: (args) => (
        <IconButton {...args} pin="circle-circle" onClick={onClick}>
            <ShowcaseIcon buttonSize={args.size ?? '40'} />
        </IconButton>
    ),
};

export const Showcase: StoryObj<IconButtonProps> = {
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <Row>
            {showcaseSizes.map((size) => (
                <Column key={size}>
                    <SizeCaption>{`IconButton_${size}`}</SizeCaption>
                    <TypographyMetaBlock size={size} />
                    {showcaseViews.map((view) => (
                        <ViewBlock key={view}>
                            <ViewCaption>{view}</ViewCaption>
                            <StateColumn>
                                {stateMatrix.map((state) => (
                                    <MatrixIconButton
                                        key={`${view}-${size}-${String(state.disabled)}-${String(state.isLoading)}`}
                                        size={size}
                                        view={view}
                                        disabled={state.disabled}
                                        isLoading={state.isLoading}
                                    />
                                ))}
                            </StateColumn>
                        </ViewBlock>
                    ))}
                </Column>
            ))}
        </Row>
    ),
};
