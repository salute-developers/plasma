import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { oldBodyConfig } from '../../../../../components/Typography';

import { OldBody } from './Body';
import { config } from './Body.config';

export default {
    title: 'typograhpy/Old/Body',
    decorators: [WithTheme],
    component: OldBody,
    argTypes: argTypesFromConfig(mergeConfig(oldBodyConfig, config)),
    args: {
        breakWord: true,
    },
} as ComponentMeta<typeof OldBody>;

export const Default: ComponentStory<typeof OldBody> = (props) => {
    return (
        <OldBody {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </OldBody>
    );
};
