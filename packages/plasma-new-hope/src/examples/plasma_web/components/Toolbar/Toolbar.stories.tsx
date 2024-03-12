import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { IconDone } from '../../../../components/_Icon';
import { ToolbarProps } from '../../../../components/Toolbar';
import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';

import { Toolbar, ToolbarDivider } from './Toolbar';

const placements: Array<string> = ['vertical', 'horizontal'];
const size: Array<string> = ['xs', 's', 'm', 'l'];

const ToolbarWrapper = (props: ToolbarProps) => {
    return (
        <Toolbar {...props}>
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconDone />} />
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconDone />} />
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconDone />} />
            <ToolbarDivider />
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconDone />} />
            <Button square size={props.size} view="clear" contentType="Left" contentLeft={<IconDone />} />
        </Toolbar>
    );
};

const meta: Meta<typeof Toolbar> = {
    title: 'plasma_web/Toolbar',
    component: ToolbarWrapper,
    decorators: [WithTheme],
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
