import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { textConfig } from '../../../../components/Typography';

import { Text } from './Text';
import { config } from './Text.config';

const meta: Meta<typeof Text> = {
    title: 'typography/Text',
    decorators: [WithTheme],
    component: Text,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(textConfig, config)),
        color: {
            control: {
                type: 'color',
            },
        },
        as: {
            control: 'text',
        },
        bold: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'medium', truthy: false },
        },
        medium: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'bold', truthy: false },
        },
    },
    args: {
        noWrap: false,
        breakWord: true,
        bold: false,
        medium: false,
        isNumeric: false,
    },
};

export default meta;

export const Default: StoryObj<typeof Text> = {
    render: (props) => {
        return (
            <Text {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
                <br />
                1234567890
            </Text>
        );
    },
};
