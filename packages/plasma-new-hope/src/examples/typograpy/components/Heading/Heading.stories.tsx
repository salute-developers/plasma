import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { dsplConfig } from '../../../../components/Typography';

import { Heading } from './Heading';
import { config } from './Heading.config';

export default {
    title: 'typograhpy/Heading',
    decorators: [WithTheme],
    component: Heading,
    argTypes: argTypesFromConfig(mergeConfig(dsplConfig, config)),
    args: {
        breakWord: true,
        bold: false,
    },
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (props) => {
    return (
        <Heading {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Heading>
    );
};
