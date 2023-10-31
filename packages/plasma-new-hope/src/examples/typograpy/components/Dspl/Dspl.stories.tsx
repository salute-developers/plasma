import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { dsplConfig } from '../../../../components/Typography';

import { Dspl } from './Dspl';
import { config } from './Dspl.config';

export default {
    title: 'typograhpy/Dspl',
    decorators: [WithTheme],
    component: Dspl,
    argTypes: argTypesFromConfig(mergeConfig(dsplConfig, config)),
    args: {
        breakWord: true,
        bold: false,
    },
} as ComponentMeta<typeof Dspl>;

export const Default: ComponentStory<typeof Dspl> = (props) => {
    return (
        <Dspl {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Dspl>
    );
};
