import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { captionConfig } from '../../../../../components/Typography';

import { Caption } from './Caption';
import { config } from './Caption.config';

export default {
    title: 'typograhpy/Old/Caption',
    decorators: [WithTheme],
    component: Caption,
    argTypes: argTypesFromConfig(mergeConfig(captionConfig, config)),
    args: {
        breakWord: true,
    },
} as ComponentMeta<typeof Caption>;

export const Default: ComponentStory<typeof Caption> = (props) => {
    return (
        <Caption {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Caption>
    );
};
