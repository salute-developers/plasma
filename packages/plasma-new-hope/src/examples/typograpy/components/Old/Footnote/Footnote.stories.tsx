import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { footnoteConfig } from '../../../../../components/Typography';

import { Footnote } from './Footnote';
import { config } from './Footnote.config';

export default {
    title: 'typograhpy/Old/Footnote',
    decorators: [WithTheme],
    component: Footnote,
    argTypes: argTypesFromConfig(mergeConfig(footnoteConfig, config)),
    args: {
        breakWord: true,
    },
} as ComponentMeta<typeof Footnote>;

export const Default: ComponentStory<typeof Footnote> = (props) => {
    return (
        <Footnote {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Footnote>
    );
};
