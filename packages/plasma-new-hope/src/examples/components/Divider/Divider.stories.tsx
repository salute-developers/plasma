import React from 'react';
import type { ComponentProps } from 'react';
import { styled } from '@linaria/react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../_helpers';
import { bodyS } from '../../../mixins';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
    title: 'Data Display/Divider',
    decorators: [WithTheme],
    argTypes: {
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'horizontal' } },
        },
        view: {
            options: ['default', 'dark', 'light', 'inverse'],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'default' } },
        },
        length: { control: 'text' },
    },
};

export default meta;

const StyledWrapper = styled.div<{ orientation?: string }>`
    display: inline-flex;
    gap: 0.5rem;
    padding: 1rem;
    background: #aab1e9;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => (props.orientation === 'horizontal' ? 'column' : 'row')};
`;

const StyledBody = styled.div`
    ${bodyS};
`;

export const Default: StoryObj<ComponentProps<typeof Divider>> = {
    args: {
        view: 'default',
        orientation: 'horizontal',
        length: '100%',
    },
    render: (args) => (
        <StyledWrapper orientation={args.orientation}>
            <StyledBody>Before</StyledBody>
            <Divider {...args} />
            <StyledBody>After</StyledBody>
        </StyledWrapper>
    ),
};
