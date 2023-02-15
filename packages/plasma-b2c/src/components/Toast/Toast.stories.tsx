import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconClose } from '@salutejs/plasma-icons';
import { critical } from '@salutejs/plasma-tokens-b2c';
import styled from 'styled-components';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';

import { Toast, useToast, ToastProps, ToastPosition } from '.';

export default {
    title: 'Controls/Toast',
    decorators: [InSpacingDecorator],
} as Meta;

export const ToastComponent: Story<ToastProps> = (args) => <Toast {...args} />;

ToastComponent.args = {
    text: 'Текст всплывающего уведомления',
};

interface LiveDemoProps extends ToastProps {
    toastText: string;
    enableContentLeft: boolean;
    position: ToastPosition;
    timeout: number;
    fade: boolean;
}

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const LiveDemo: Story<LiveDemoProps> = ({ toastText, position, timeout, fade, enableContentLeft }) => {
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
    enableContentLeft: true,
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
