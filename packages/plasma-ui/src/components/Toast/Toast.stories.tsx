import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconClose } from '@salutejs/plasma-icons';
import { critical } from '@salutejs/plasma-core';
import styled from 'styled-components';

import { Button } from '../Button';

import { Toast, useToast, ToastProps, ToastPosition } from '.';

export default {
    title: 'Controls/Toast',
} as Meta;

export const Default: Story<ToastProps> = (args) => <Toast {...args} />;

Default.args = {
    text: 'Текст всплывающего уведомления',
};

interface LiveDemoProps extends ToastProps {
    position: ToastPosition;
    timeout: number;
    fade: boolean;
    enableContentLeft: boolean;
}

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
`;

export const LiveDemo: Story<LiveDemoProps> = ({ role, text, position, timeout, fade, enableContentLeft }) => {
    const { showToast, hideToast } = useToast();
    const contentLeft = enableContentLeft && <IconClose size="xs" color={critical} />;

    return (
        <Container>
            <Button onClick={hideToast}>Hide</Button>
            <Button
                onClick={() => {
                    showToast({
                        text,
                        position,
                        timeout,
                        fade,
                        contentLeft,
                        role,
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
    text: 'Текст всплывающего уведомления',
    enableContentLeft: true,
    position: 'bottom',
    timeout: 10000,
    fade: true,
};

LiveDemo.argTypes = {
    role: {
        options: ['alert', 'log', 'status'],
        control: {
            type: 'inline-radio',
        },
    },
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
