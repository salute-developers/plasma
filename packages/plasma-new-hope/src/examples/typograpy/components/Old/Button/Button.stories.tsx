import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { buttonTypographyConfig } from '../../../../../components/Typography';

import { Button } from './Button';
import { config } from './Button.config';

export default {
    title: 'typograhpy/Old/Button',
    decorators: [WithTheme],
    component: Button,
    argTypes: argTypesFromConfig(mergeConfig(buttonTypographyConfig, config)),
    args: {
        breakWord: true,
    },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => {
    return (
        <Button {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi distinctio
            modi quo, provident quod.
        </Button>
    );
};
