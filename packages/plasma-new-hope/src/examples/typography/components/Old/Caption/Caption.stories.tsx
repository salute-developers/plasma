import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { captionConfig } from '../../../../../components/Typography';

import { Caption } from './Caption';
import { config } from './Caption.config';

const meta: Meta<typeof Caption> = {
    title: 'Data Display/Typography/Old/Caption',
    decorators: [WithTheme],
    component: Caption,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(captionConfig, config)),
        color: {
            control: {
                type: 'color',
            },
        },
    },
    args: {
        noWrap: false,
        breakWord: true,
    },
};

export default meta;

export const Default: StoryObj<typeof Caption> = {
    render: (props) => {
        return (
            <Caption {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Caption>
        );
    },
};
