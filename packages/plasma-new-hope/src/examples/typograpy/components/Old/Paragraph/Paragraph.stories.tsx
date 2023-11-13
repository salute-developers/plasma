import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { paragraphConfig } from '../../../../../components/Typography';

import { Paragraph } from './Paragraph';
import { config } from './Paragraph.config';

const meta: Meta<typeof Paragraph> = {
    title: 'typography/Old/Paragraph',
    decorators: [WithTheme],
    component: Paragraph,
    argTypes: argTypesFromConfig(mergeConfig(paragraphConfig, config)),
    args: {
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
