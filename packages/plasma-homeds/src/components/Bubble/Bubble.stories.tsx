import React, { useState } from 'react';
import type { Meta, Decorator, StoryFn, StoryObj } from '@storybook/react-vite';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { inverseBackgroundPrimary } from '@salutejs/plasma-themes/tokens/plasma_homeds';

import { Bubble } from '.';
import type { BubbleProps } from '.';

const placements: BubbleProps['placement'][] = ['top-right', 'top-left', 'right', 'left'];

const BgDecorator: Decorator = (Story: StoryFn) => (
    <div style={{ background: inverseBackgroundPrimary, minHeight: '100vh', padding: '4rem 6rem' }}>
        <Story />
    </div>
);

const meta: Meta<BubbleProps> = {
    title: 'Overlay/Bubble',
    component: Bubble,
    decorators: [InSpacingDecorator, BgDecorator],
    parameters: {
        docs: {
            description: {
                component:
                    'Компактная подсказка-бабл. В покое — звезда, в раскрытом состоянии — плашка с контентом. Анимация на чистом CSS: длительность 600ms, easing Quick.',
            },
        },
    },
    argTypes: {
        placement: { control: 'select', options: placements },
        content: { control: 'text' },
        ...disableProps(['theme', 'as', 'forwardedAs', 'onClick', 'opened']),
    },
    args: {
        placement: 'top-right',
        content: 'Прокачать до 100%',
    },
};

export default meta;

const StoryDefault = (args: BubbleProps) => {
    const [opened, setOpened] = useState(false);

    return <Bubble {...args} opened={opened} onClick={() => setOpened((value) => !value)} />;
};

export const Default: StoryObj<BubbleProps> = {
    render: (args) => <StoryDefault {...args} />,
};
