import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { underlineConfig } from '../../../../../components/Typography';

import { Underline } from './Underline';
import { config } from './Underline.config';

export default {
    title: 'typograhpy/Old/Underline',
    decorators: [WithTheme],
    component: Underline,
    argTypes: argTypesFromConfig(mergeConfig(underlineConfig, config)),
    args: {
        breakWord: true,
    },
} as ComponentMeta<typeof Underline>;

export const Default: ComponentStory<typeof Underline> = (props) => {
    return (
        <Underline {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Underline>
    );
};
