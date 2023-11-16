import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { subtitleConfig } from '../../../../../components/Typography';

import { Subtitle } from './Subtitle';
import { config } from './Subtitle.config';

const meta: Meta<typeof Subtitle> = {
    title: 'typography/Old/Subtitle',
    decorators: [WithTheme],
    component: Subtitle,
    argTypes: argTypesFromConfig(mergeConfig(subtitleConfig, config)),
};

export default meta;

export const Default: StoryObj<typeof Subtitle> = {
    render: (props) => {
        return (
            <Subtitle {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Subtitle>
        );
    },
};
