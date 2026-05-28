import React, { ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';
import { IconDone } from '@salutejs/plasma-icons';

import { config } from './ColorSwatch.config';
import { ColorSwatch } from './ColorSwatch';

const { views } = getConfigVariations(config);

const meta: Meta<typeof ColorSwatch> = {
    title: 'Data Entry/ColorSwatch',
    component: ColorSwatch,
    decorators: [InSpacingDecorator],
    args: {
        color: 'transparent',
        withShadow: true,
    },
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        color: {
            options: ['red', 'transparent', 'var(--text-accent)', 'rgba(234, 22, 174, 0.5)'],
            control: {
                type: 'select',
            },
        },
    },
    parameters: {
        controls: {
            exclude: ['view'],
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof ColorSwatch>;

const StoryDefault = (args: StoryPropsDefault) => {
    return <ColorSwatch {...args} />;
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
    },
    render: StoryDefault,
};

const StoryWithChildren = (args: StoryPropsDefault) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            Click:
            <ColorSwatch
                as="button"
                {...args}
                style={{
                    color: '#fff',
                    cursor: 'pointer',
                }}
                onClick={() => setChecked(!checked)}
            >
                {checked && <IconDone size="s" color="inherit" />}
            </ColorSwatch>
        </div>
    );
};

export const WithChildren: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        color: '#ae3ec9',
    },
    render: StoryWithChildren,
};
