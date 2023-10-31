import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { displayConfig } from '../../../../../components/Typography';

import { Display } from './Display';
import { config } from './Display.config';

export default {
    title: 'typograhpy/Old/Display',
    decorators: [WithTheme],
    component: Display,
    argTypes: argTypesFromConfig(mergeConfig(displayConfig, config)),
    args: {
        breakWord: true,
    },
} as ComponentMeta<typeof Display>;

export const Default: ComponentStory<typeof Display> = (props) => {
    return (
        <Display {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Display>
    );
};
