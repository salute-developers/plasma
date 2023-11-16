import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { bodyConfig } from '../../../../components/Typography';

import { Body } from './Body';
import { config } from './Body.config';

const meta: Meta<typeof Body> = {
    title: 'typography/Body',
    decorators: [WithTheme],
    component: Body,
    argTypes: argTypesFromConfig(mergeConfig(bodyConfig, config)),
    args: {
        breakWord: true,
        bold: false,
    },
};

export default meta;

export const Default: StoryObj<typeof Body> = {
    render: (args) => {
        return (
            <Body {...args}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Body>
        );
    },
};
