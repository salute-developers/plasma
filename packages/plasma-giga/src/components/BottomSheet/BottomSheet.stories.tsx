import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { Button } from '../Button';
import { BodyM, BodyS } from '../Typography';

import { BottomSheet } from '.';
import type { BottomSheetProps } from '.';

const meta: Meta<BottomSheetProps> = {
    title: 'Overlay/BottomSheet',
    decorators: [InSpacingDecorator],
    argTypes: {
        title: { control: { type: 'text' } },
        hasClose: { control: { type: 'boolean' } },
        hasHandle: { control: { type: 'boolean' } },
        withOverlay: { control: { type: 'boolean' } },
        withBlur: { control: { type: 'boolean' } },
        withTransition: { control: { type: 'boolean' } },
    },
    args: {
        title: 'Сохранить изменения?',
        hasClose: true,
        hasHandle: true,
        withOverlay: true,
        withBlur: false,
        withTransition: true,
    },
};

export default meta;

const StyledImage = styled.div`
    background: linear-gradient(135deg, #d3f8e2 0%, #a0e7e5 50%, #b4a7f5 100%);
`;

const Source = styled.div`
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 0.75rem;
`;

const Actions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SOURCES = [
    { title: 'Эксперты описали двумя словами, что ждать от российской экономики', domain: 'rbc.ru' },
    { title: 'Экономика России в 2025 году: ключевые события, вызовы и прогнозы', domain: 'wikipedia.org' },
    { title: 'На тающей льдине. Экономические итоги 2025 года', domain: 'meduza.io' },
    { title: '«Замедление роста в экономике — это плата за стабильность»', domain: 'theins.ru' },
    { title: 'Промышленное производство: динамика по отраслям', domain: 'gks.ru' },
    { title: 'Аналитики о ключевой ставке и инфляционных ожиданиях', domain: 'kommersant.ru' },
    { title: 'Курс рубля: факторы и сценарии на ближайшие месяцы', domain: 'forbes.ru' },
];

type PlaygroundProps = ComponentProps<typeof BottomSheet> & {
    showImage: boolean;
    showButtons: boolean;
};

const PlaygroundStory = ({ showImage, showButtons, ...rest }: PlaygroundProps) => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Открыть</Button>
            <BottomSheet
                {...rest}
                opened={opened}
                onClose={() => setOpened(false)}
                image={showImage ? <StyledImage /> : undefined}
                buttons={
                    showButtons ? (
                        <Actions>
                            <Button stretching="filled" view="default">
                                Сохранить
                            </Button>
                            <Button stretching="filled" view="secondary">
                                Отменить
                            </Button>
                        </Actions>
                    ) : undefined
                }
            >
                <BodyM>Изменения настроек ассистента будут применены сразу после сохранения.</BodyM>
            </BottomSheet>
        </>
    );
};

export const Default: StoryObj<PlaygroundProps> = {
    argTypes: {
        showImage: { control: { type: 'boolean' } },
        showButtons: { control: { type: 'boolean' } },
    },
    args: {
        showImage: false,
        showButtons: true,
    },
    render: (args) => <PlaygroundStory {...args} />,
};

const ScrollableStory = (props: BottomSheetProps) => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Открыть</Button>
            <BottomSheet
                {...props}
                opened={opened}
                onClose={() => setOpened(false)}
                title="Источники"
                buttons={
                    <Button stretching="filled" view="default">
                        Готово
                    </Button>
                }
            >
                {SOURCES.map((source) => (
                    <Source key={source.title}>
                        <BodyM>{source.title}</BodyM>
                        <BodyS style={{ opacity: 0.5 }}>{source.domain}</BodyS>
                    </Source>
                ))}
            </BottomSheet>
        </>
    );
};

export const Scrollable: StoryObj<BottomSheetProps> = {
    render: (args) => <ScrollableStory {...args} />,
};
