import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { paragraphConfig } from '../../../../../components/Typography';

import { Paragraph } from './Paragraph';
import { config } from './Paragraph.config';

const meta: Meta<typeof Paragraph> = {
    title: 'Data Display/Typography/Old/Paragraph',
    decorators: [WithTheme],
    component: Paragraph,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(paragraphConfig, config)),
        color: {
            control: {
                type: 'color',
            },
        },
    },
    args: {
        noWrap: false,
        breakWord: true,
        resetMargin: false,
        m: 2,
    },
};

export default meta;

export const Default: StoryObj<typeof Paragraph> = {
    render: (props) => {
        return (
            <Paragraph {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Paragraph>
        );
    },
};
