import React from 'react';
import type { ComponentProps } from 'react';
import styled from 'styled-components';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { dividerConfig } from '@salutejs/plasma-new-hope/styled-components';

import { BodyS } from '../Typography';
import { hasComponentDraftConfig } from '../../helpers/hasComponentDraftConfig';
import { createComponentByConfig } from '../../helpers/createComponentByConfig';

import { config as defaultConfig } from './Divider.config';
import { config as draftConfig } from './Divider.config.draft';

const config = hasComponentDraftConfig() ? draftConfig : defaultConfig;

const Divider = createComponentByConfig(dividerConfig, config);

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
            options: ['default', 'dark', 'light', 'inverse'],
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
