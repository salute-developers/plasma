import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMic } from '@salutejs/plasma-icons';
import { action } from 'storybook/actions';
import { getButtonStories, getConfigVariations } from '@salutejs/plasma-sb-utils';
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

/** Размер иконки в px для кнопки XL → S (соответствует макету 24 / 24 / 20 / 16). */
const buttonSizeToIconPx: Record<string, number> = {
    xl: 24,
    l: 24,
    m: 20,
    s: 16,
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
                    {showcaseViews.map((view) => (
                        <ViewBlock key={view}>
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
