import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

import { Tree } from './Tree';

type StoryTreeProps = ComponentProps<typeof Tree>;

const view = ['default'];
const size = ['xs', 's', 'm', 'l'];
const itemVariant = ['default', 'fill'];

const meta: Meta<StoryTreeProps> = {
    title: 'plasma_b2c/Tree',
    decorators: [WithTheme],
    component: Tree,
    argTypes: {
        view: {
            control: 'select',
            options: view,
        },
        size: {
            control: 'select',
            options: size,
        },
        inverted: {
            control: 'boolean',
        },
        itemVariant: {
            control: 'select',
            options: itemVariant,
        },
    },
    args: {
        view: 'default',
        size: 'm',
        inverted: false,
        itemVariant: 'default',
    },
};

export default meta;

const StoryDefault = (args: StoryTreeProps) => {
    return <Tree {...args} />;
};

export const Default: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDefault {...args} />,
};
