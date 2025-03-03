import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { oldBodyConfig } from '../../../../../components/Typography';

import { OldBody } from './Body';
import { config } from './Body.config';

const meta: Meta<typeof OldBody> = {
    title: 'Data Display/Typography/Old/Body',
    decorators: [WithTheme],
    component: OldBody,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(oldBodyConfig, config)),
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

export const Default: StoryObj<typeof OldBody> = {
    render: (props) => {
        return (
            <OldBody {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </OldBody>
        );
    },
};
