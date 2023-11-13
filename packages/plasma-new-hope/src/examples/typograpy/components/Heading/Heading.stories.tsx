import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { dsplConfig } from '../../../../components/Typography';

import { Heading } from './Heading';
import { config } from './Heading.config';

const meta: Meta<typeof Heading> = {
    title: 'typography/Heading',
    decorators: [WithTheme],
    component: Heading,
    argTypes: argTypesFromConfig(mergeConfig(dsplConfig, config)),
    args: {
        breakWord: true,
        bold: false,
    },
};

export default meta;

export const Default: StoryObj<typeof Heading> = {
    render: (props) => {
        return (
            <Heading {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Heading>
        );
    },
};
