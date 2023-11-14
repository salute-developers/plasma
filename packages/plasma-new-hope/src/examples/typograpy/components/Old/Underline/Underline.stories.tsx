import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { underlineConfig } from '../../../../../components/Typography';

import { Underline } from './Underline';
import { config } from './Underline.config';

const meta: Meta<typeof Underline> = {
    title: 'typography/Old/Underline',
    decorators: [WithTheme],
    component: Underline,
    argTypes: argTypesFromConfig(mergeConfig(underlineConfig, config)),
    args: {
        breakWord: true,
    },
};

export default meta;

export const Default: StoryObj<typeof Underline> = {
    render: (props) => {
        return (
            <Underline {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Underline>
        );
    },
};
