import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { displayConfig } from '../../../../../components/Typography';

import { Display } from './Display';
import { config } from './Display.config';

const meta: Meta<typeof Display> = {
    title: 'typography/Old/Display',
    decorators: [WithTheme],
    component: Display,
    argTypes: argTypesFromConfig(mergeConfig(displayConfig, config)),
    args: {
        breakWord: true,
    },
};

export default meta;

export const Default: StoryObj<typeof Display> = {
    render: (props) => {
        return (
            <Display {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Display>
        );
    },
};
