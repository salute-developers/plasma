import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { IconDone } from '../../../../components/_Icon';
import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';

import { Toolbar, ToolbarDivider } from './Toolbar';

const orientations: Array<string> = ['vertical', 'horizontal'];
const size: Array<string> = ['xs', 's', 'm', 'l'];

const ToolbarWrapper = (props: ComponentProps<typeof Toolbar>) => {
    return (
        <Toolbar {...props}>
            <Button square size={props.size} view="clear" contentLeft={<IconDone />} />
            <Button square size={props.size} view="clear" contentLeft={<IconDone />} />
            <Button square size={props.size} view="clear" contentLeft={<IconDone />} />
            <ToolbarDivider />
            <Button square size={props.size} view="clear" contentLeft={<IconDone />} />
            <Button square size={props.size} view="clear" contentLeft={<IconDone />} />
        </Toolbar>
    );
};

const meta: Meta<typeof Toolbar> = {
    title: 'plasma_web/Toolbar',
    component: ToolbarWrapper,
    decorators: [WithTheme],
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
    },
    args: {
        orientation: 'vertical',
        hasShadow: true,
        size: 'm',
    },
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
    args: {},
};
