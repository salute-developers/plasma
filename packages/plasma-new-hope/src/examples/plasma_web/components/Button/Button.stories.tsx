import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { buttonConfig } from '../../../../components/Button';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Button.config';
import { Button } from './Button';

export default {
    title: 'plasma_web/Button',
    decorators: [WithTheme],
    component: Button,
    argTypes: argTypesFromConfig(mergeConfig(buttonConfig, config)),
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => {
    return <Button {...props}>Hello</Button>;
};
