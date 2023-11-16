import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { headlineConfig } from '../../../../../components/Typography';

import { Headline } from './Headline';
import { config } from './Headline.config';

const meta: Meta<typeof Headline> = {
    title: 'typography/Old/Headline',
    decorators: [WithTheme],
    component: Headline,
    argTypes: argTypesFromConfig(mergeConfig(headlineConfig, config)),
    args: {
        breakWord: true,
    },
};

export default meta;

export const Default: StoryObj<typeof Headline> = {
    render: (props) => {
        return (
            <Headline {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Headline>
        );
    },
};
