import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../Button';

import { Toast, useToast, ToastProps, ToastPosition } from '.';

export default {
    title: 'Controls/Toast',
} as Meta;

export const ToastComponent: Story<ToastProps> = (args) => <Toast {...args} />;

ToastComponent.args = {
    text: 'Текст всплывающего уведомления',
};

interface LiveDemoProps extends ToastProps {
    toastText: string;
    position: ToastPosition;
    timeout: number;
    fade: boolean;
}

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
`;

export const LiveDemo: Story<LiveDemoProps> = ({ toastText, position, timeout, fade }) => {
    const { showToast, hideToast } = useToast();

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
                        onHide: action('onHide'),
                        onShow: action('onShow'),
                    });
                }}
            >
                Показать уведомление
            </Button>
        </Container>
    );
};

LiveDemo.args = {
    role: 'alert',
    toastText: 'Текст всплывающего уведомления',
    position: 'bottom',
    timeout: 3000,
    fade: false,
};

LiveDemo.argTypes = {
    position: {
        options: ['top', 'bottom'],
        control: {
            type: 'inline-radio',
        },
    },
};

LiveDemo.parameters = {
    chromatic: {
        disable: true,
    },
};
