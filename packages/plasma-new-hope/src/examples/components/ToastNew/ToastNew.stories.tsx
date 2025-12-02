import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { WithTheme } from '../../_helpers';
import { IconDone } from '../../../components/_Icon';
import { Button } from '../Button/Button';

import { ToastContainer, showToast } from './ToastNew';

const views = ['default'];
const sizes = ['m'];
const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

const meta: Meta<typeof ToastContainer> = {
    title: 'Overlay/Toast',
    component: ToastContainer,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        pilled: {
            control: { type: 'boolean' },
        },
        hasClose: {
            control: { type: 'boolean' },
        },
        enableContentLeft: {
            control: { type: 'boolean' },
        },
        width: {
            control: { type: 'text' },
        },
        textColor: {
            control: { type: 'text' },
        },
        duration: {
            control: { type: 'number' },
        },
        position: {
            options: positions,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof ToastContainer> & {
    enableContentLeft?: boolean;
};

const StoryDefault = (args: StoryPropsDefault) => {
    const handleShowToast = () => {
        showToast('Текст всплывающего уведомления');
    };

    return (
        <div>
            <ToastContainer {...args} contentLeft={args.enableContentLeft && <IconDone size="xs" color="inherit" />} />

            <Button onClick={handleShowToast}>Показать тост</Button>
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 'm',
        pilled: false,
        hasClose: true,
        enableContentLeft: true,
    },
    render: StoryDefault,
};
