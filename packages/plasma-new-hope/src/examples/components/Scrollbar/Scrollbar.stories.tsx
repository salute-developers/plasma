import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';

import { Scrollbar } from './Scrollbar';

const views = ['default'];
const sizes = ['m', 's'];

const meta: Meta<typeof Scrollbar> = {
    title: 'Data Display/Scrollbar',
    component: Scrollbar,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        placement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Scrollbar> & {
    hasValue?: boolean;
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 's',
        offset: 8,
        autoHide: true,
        autoHideDelay: 3000,
        verticalOffset: 8,
        placement: 'right',
    },
    render: ({ ...args }) => (
        <Scrollbar {...args} style={{ height: '400px', width: '300px' }}>
            <div>
                {Array.from({ length: 50 }, (_, i) => (
                    <div key={i} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        Item {i + 1}
                    </div>
                ))}
            </div>
        </Scrollbar>
    ),
};
