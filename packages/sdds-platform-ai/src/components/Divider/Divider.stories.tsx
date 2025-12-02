import React from 'react';
import type { ComponentProps } from 'react';
import styled from 'styled-components';
import { disableProps, getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { BodyS } from '../Typography';

import { Divider } from './Divider';
import { config } from './Divider.config';

const { views } = getConfigVariations(config);

const meta: Meta<typeof Divider> = {
    title: 'Data Display/Divider',
    decorators: [InSpacingDecorator],
    argTypes: {
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'horizontal' } },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'default' } },
        },
        ...disableProps(['size']),
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

export const Default: StoryObj<ComponentProps<typeof Divider>> = {
    args: {
        view: 'default',
        orientation: 'horizontal',
        length: '100%',
    },
    render: (args) => (
        <StyledWrapper orientation={args.orientation}>
            <BodyS>Before</BodyS>
            <Divider {...args} />
            <BodyS>After</BodyS>
        </StyledWrapper>
    ),
};
