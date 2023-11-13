import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { dsplConfig } from '../../../../components/Typography';

import { Dspl } from './Dspl';
import { config } from './Dspl.config';

const meta: Meta<typeof Dspl> = {
    title: 'typography/Dspl',
    decorators: [WithTheme],
    component: Dspl,
    argTypes: argTypesFromConfig(mergeConfig(dsplConfig, config)),
    args: {
        breakWord: true,
        bold: false,
    },
};

export default meta;

export const Default: StoryObj<typeof Dspl> = {
    render: (props) => {
        return (
            <Dspl {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Dspl>
        );
    },
};
