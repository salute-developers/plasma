import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import styled, { createGlobalStyle } from 'styled-components';

import { WithTheme } from '../../_helpers';
import { IconDone } from '../../../components/_Icon';
import { Button } from '../Button/Button';

import { ToastContainer, showToast } from './ToastNew';

const views = ['default'];
const sizes = ['m'];
const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

const CustomToast = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 16rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    background: #252525;
    color: #fff;
    box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 20%);
`;

const Actions = styled.div`
    display: flex;
    gap: 0.75rem;
`;

const ToastAnimationKeyframes = createGlobalStyle`
    @keyframes toast-enter-from-right {
        from {
            opacity: 0;
            transform: translateX(1.5rem);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes toast-exit-to-right {
        from {
            opacity: 1;
            transform: translateX(0);
        }

        to {
            opacity: 0;
            transform: translateX(1.5rem);
        }
    }
`;

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
        gap: {
            control: { type: 'number' },
        },
        animation: {
            control: { type: 'object' },
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

export const StackedCustomToasts: StoryObj<typeof ToastContainer> = {
    parameters: {
        chromatic: {
            disable: true,
        },
    },
    render: (args) => {
        let toastNumber = 0;

        const showOneToast = (position: 'top-center' | 'bottom-right', label: string) => {
            const message = `Уведомление ${++toastNumber}`;

            showToast(message, {
                stacking: true,
                position,
                duration: 6000,
                renderToast: (options) => (
                    <CustomToast>
                        <strong>{label}</strong>
                        <span>{message}</span>
                        <small>ID: {options?.id}</small>
                    </CustomToast>
                ),
            });
        };

        return (
            <>
                <ToastContainer {...args} />
                <Actions>
                    <Button onClick={() => showOneToast('top-center', 'Стопка сверху')}>Показать сверху</Button>
                    <Button onClick={() => showOneToast('bottom-right', 'Стопка справа снизу')}>
                        Показать справа снизу
                    </Button>
                </Actions>
            </>
        );
    },
};

export const Animation: StoryObj<typeof ToastContainer> = {
    args: {
        position: 'bottom-right',
        duration: 5000,
        animation: {
            enter: 'toast-enter-from-right 300ms ease-out both',
            exit: 'toast-exit-to-right 200ms ease-in both',
        },
    },
    parameters: {
        chromatic: {
            disable: true,
        },
    },
    render: (args) => {
        let toastNumber = 0;

        const showToastWithSideAnimation = () => {
            showToast(`Тост ${++toastNumber}: выезд сбоку`, {
                stacking: true,
                position: args.position,
                duration: args.duration,
            });
        };

        return (
            <>
                <ToastAnimationKeyframes />
                <ToastContainer {...args} />
                <Actions>
                    <Button onClick={showToastWithSideAnimation}>Тост выезд сбоку</Button>
                </Actions>
            </>
        );
    },
};
