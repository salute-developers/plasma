import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { paragraphConfig } from '../../../../../components/Typography';

import { Paragraph } from './Paragraph';
import { config } from './Paragraph.config';

export default {
    title: 'typograhpy/Old/Paragraph',
    decorators: [WithTheme],
    component: Paragraph,
    argTypes: argTypesFromConfig(mergeConfig(paragraphConfig, config)),
    args: {
        breakWord: true,
        resetMargin: false,
        m: 2,
    },
} as ComponentMeta<typeof Paragraph>;

export const Default: ComponentStory<typeof Paragraph> = (props) => {
    return (
        <Paragraph {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Paragraph>
    );
};
