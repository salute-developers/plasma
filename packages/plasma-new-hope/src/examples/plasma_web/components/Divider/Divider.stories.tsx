import React from 'react';
import type { ComponentProps } from 'react';
import { styled } from '@linaria/react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';
import { bodyS } from '../../../../mixins';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
    title: 'plasma_web/Divider',
    decorators: [WithTheme],
    argTypes: {
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'horizontal' } },
        },
    },
};

export default meta;

const StyledWrapper = styled.div<{ orientation?: string }>`
    display: inline-flex;
    gap: 0.5rem;
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
        orientationScale: '100%',
    },
    render: (args) => (
        <StyledWrapper orientation={args.orientation}>
            <StyledBody>Before</StyledBody>
            <Divider {...args} />
            <StyledBody>After</StyledBody>
        </StyledWrapper>
    ),
};
