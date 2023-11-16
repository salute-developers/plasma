import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { buttonTypographyConfig } from '../../../../../components/Typography';

import { Button } from './Button';
import { config } from './Button.config';

const meta: Meta<typeof Button> = {
    title: 'typography/Old/Button',
    decorators: [WithTheme],
    component: Button,
    argTypes: argTypesFromConfig(mergeConfig(buttonTypographyConfig, config)),
    args: {
        breakWord: true,
    },
};

export default meta;

export const Default: StoryObj<typeof Button> = {
    render: (props) => {
        return (
            <Button {...props}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nihil non ut animi
                distinctio modi quo, provident quod.
            </Button>
        );
    },
};
