import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconClose } from '@salutejs/plasma-icons';
import { critical } from '@salutejs/plasma-tokens-b2c';
import styled from 'styled-components';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';

import { Toast, useToast, ToastProps, ToastPosition } from '.';

const meta: Meta<ToastProps> = {
    title: 'Controls/Toast',
    component: Toast,
    decorators: [InSpacingDecorator],
};

export default meta;

interface LiveDemoProps extends ToastProps {
    toastText: string;
    enableContentLeft: boolean;
    position: ToastPosition;
    timeout: number;
    fade: boolean;
    offset: number;
}

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const ToastComponent: StoryObj<ToastProps> = {
    args: {
        text: 'Текст всплывающего уведомления',
    },
    render: (args) => <Toast {...args} />,
};

const StoryLiveDemo = ({ toastText, position, timeout, fade, enableContentLeft, offset }: LiveDemoProps) => {
    const { showToast, hideToast } = useToast();
    const contentLeft = enableContentLeft && <IconClose size="xs" color={critical} />;

    return (
        <Container>
            <Button onClick={hideToast}>Скрыть уведомление</Button>
            <Button
                onClick={() => {
                    showToast({
                        text: toastText,
                        position,
                        timeout,
                        fade,
                        contentLeft,
                        onHide: action('onHide'),
                        onShow: action('onShow'),
                        offset,
                    });
                }}
            >
                Показать уведомление
            </Button>
        </Container>
    );
};

export const LiveDemo: StoryObj<LiveDemoProps> = {
    argTypes: {
        position: {
            options: ['top', 'bottom'],
            control: {
                type: 'inline-radio',
            },
        },
        offset: {
            control: {
                type: 'number',
            },
        },
    },
    args: {
        role: 'alert',
        toastText: 'Текст всплывающего уведомления',
        enableContentLeft: true,
        position: 'bottom',
        timeout: 3000,
        fade: false,
        offset: 0,
    },
    parameters: {
        chromatic: {
            disable: true,
        },
    },
    render: (args) => <StoryLiveDemo {...args} />,
};
