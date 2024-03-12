import React from 'react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import { IconEdit } from '@salutejs/plasma-icons';
import { ToolbarProps } from '@salutejs/plasma-new-hope';

import { Button } from '../Button';

import { Toolbar, ToolbarDivider } from './Toolbar';

const placements: Array<string> = ['vertical', 'horizontal'];
const size: Array<string> = ['xs', 's', 'm', 'l'];

const ToolbarWrapper = (props: ToolbarProps) => {
    return (
        <Toolbar {...props}>
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconEdit />} />
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconEdit />} />
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconEdit />} />
            <ToolbarDivider />
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconEdit />} />
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconEdit />} />
        </Toolbar>
    );
};

const meta: Meta<typeof Toolbar> = {
    title: 'Controls/Toolbar',
    component: ToolbarWrapper,
    decorators: [InSpacingDecorator],
    argTypes: {
        placement: {
            options: placements,
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
    },
    args: {
        placement: 'vertical',
        hasShadow: true,
        size: 'm',
    },
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
    args: {},
};
