import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { headlineConfig } from '../../../../../components/Typography';

import { Headline } from './Headline';
import { config } from './Headline.config';

export default {
    title: 'typograhpy/Old/Headline',
    decorators: [WithTheme],
    component: Headline,
    argTypes: argTypesFromConfig(mergeConfig(headlineConfig, config)),
    args: {
        breakWord: true,
    },
} as ComponentMeta<typeof Headline>;

export const Default: ComponentStory<typeof Headline> = (props) => {
    return (
        <Headline {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Headline>
    );
};
