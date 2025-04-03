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
    argTypes: {
        ...argTypesFromConfig(mergeConfig(dsplConfig, config)),
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

export const Default: StoryObj<typeof Heading> = {
    render: (props) => {
        return (
            <Heading {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
                <br />
                1234567890
            </Heading>
        );
    },
};
