import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { footnoteConfig } from '../../../../../components/Typography';

import { Footnote } from './Footnote';
import { config } from './Footnote.config';

const meta: Meta<typeof Footnote> = {
    title: 'typography/Old/Footnote',
    decorators: [WithTheme],
    component: Footnote,
    argTypes: argTypesFromConfig(mergeConfig(footnoteConfig, config)),
    args: {
        breakWord: true,
    },
};

export default meta;

export const Default: StoryObj<typeof Footnote> = {
    render: (props) => {
        return (
            <Footnote {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Footnote>
        );
    },
};
