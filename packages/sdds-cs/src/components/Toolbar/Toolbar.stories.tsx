import React from 'react';
import type { ComponentProps } from 'react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import { IconEdit } from '@salutejs/plasma-icons';

import { Button } from '../Button';

import { Toolbar, ToolbarDivider } from './Toolbar';

const orientations: Array<string> = ['vertical', 'horizontal'];
const size: Array<string> = ['s'];

const ToolbarWrapper = (props: ComponentProps<typeof Toolbar>) => {
    return (
        <Toolbar {...props}>
            <Button square size={props.size} view="clear" contentLeft={<IconEdit />} />
            <Button square size={props.size} view="clear" contentLeft={<IconEdit />} />
            <Button square size={props.size} view="clear" contentLeft={<IconEdit />} />
            <ToolbarDivider />
            <Button square size={props.size} view="clear" contentLeft={<IconEdit />} />
            <Button square size={props.size} view="clear" contentLeft={<IconEdit />} />
        </Toolbar>
    );
};

const meta: Meta<typeof Toolbar> = {
    title: 'Overlay/Toolbar',
    component: ToolbarWrapper,
    decorators: [InSpacingDecorator],
    argTypes: {
        orientation: {
            options: orientations,
            control: {
                type: 'select',
            },
        },
        hasShadow: {
            control: {
                type: 'boolean',
            },
        },
        size: {
            options: size,
            control: {
                type: 'select',
            },
        },
        ...disableProps(['view', 'size']),
    },
    args: {
        orientation: 'vertical',
        hasShadow: true,
        size: 's',
    },
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
    args: {},
};
