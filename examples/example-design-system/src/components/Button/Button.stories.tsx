import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// TODO: get argTypes from config
const views = ['primary', 'secondary', 'success', 'warning', 'critical', 'checked', 'clear'];
const size = ['s', 'm', 'l'];

export default {
    title: 'Controls/Button',
    component: Button,
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: size,
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => <Button {...props}>Hello</Button>;
