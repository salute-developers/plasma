import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { subtitleConfig } from '../../../../../components/Typography';

import { Subtitle } from './Subtitle';
import { config } from './Subtitle.config';

export default {
    title: 'typograhpy/Old/Subtitle',
    decorators: [WithTheme],
    component: Subtitle,
    argTypes: argTypesFromConfig(mergeConfig(subtitleConfig, config)),
} as ComponentMeta<typeof Subtitle>;

export const Default: ComponentStory<typeof Subtitle> = (props) => {
    return (
        <Subtitle {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Subtitle>
    );
};
