import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { textConfig } from '../../../../components/Typography';

import { Text } from './Text';
import { config } from './Text.config';

export default {
    title: 'typograhpy/Text',
    decorators: [WithTheme],
    component: Text,
    argTypes: argTypesFromConfig(mergeConfig(textConfig, config)),
    args: {
        breakWord: true,
        bold: false,
    },
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (props) => {
    return (
        <Text {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Text>
    );
};
