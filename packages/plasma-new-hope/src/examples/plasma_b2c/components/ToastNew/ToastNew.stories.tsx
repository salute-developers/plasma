import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

import { ToastContainer, showToast } from './ToastNew';

const views = ['default'];

const meta: Meta<typeof ToastContainer> = {
    title: 'b2c/Overlay/ToastNew',
    component: ToastContainer,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof ToastContainer>;

const StoryDefault = (args: StoryPropsDefault) => {
    const handleShowToast = () => {
        showToast('Текст всплывающего уведомления');
    };

    return (
        <div>
            <ToastContainer {...args} />

            <button type="button" onClick={handleShowToast}>
                send toast
            </button>
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
    },
    render: StoryDefault,
};
