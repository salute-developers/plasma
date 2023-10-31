import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { bodyConfig } from '../../../../components/Typography';

import { Body } from './Body';
import { config } from './Body.config';

export default {
    title: 'typograhpy/Body',
    decorators: [WithTheme],
    component: Body,
    argTypes: argTypesFromConfig(mergeConfig(bodyConfig, config)),
    args: {
        breakWord: true,
        bold: false,
    },
} as ComponentMeta<typeof Body>;

export const Default: ComponentStory<typeof Body> = (props) => {
    return (
        <Body {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Body>
    );
};
