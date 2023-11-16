import React from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';

import { Toast, useToast } from '.';
import type { ToastProps, ToastPosition } from '.';

const meta: Meta<ToastProps> = {
    title: 'Controls/Toast',
    decorators: [InSpacingDecorator],
    component: Toast,
};

export default meta;

export const Default: StoryObj<ToastProps> = {
    args: {
        text: 'Текст всплывающего уведомления',
    },
};

type LiveDemoProps = ToastProps & {
    toastText: string;
    position: ToastPosition;
    timeout: number;
    fade: boolean;
    offset?: number;
};

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const StoryLiveDemo = ({ toastText, position, timeout, fade, offset }: LiveDemoProps) => {
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
    args: {
        role: 'alert',
        toastText: 'Текст всплывающего уведомления',
        position: 'bottom',
        timeout: 3000,
        fade: false,
        offset: 0,
    },
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
    parameters: {
        chromatic: {
            disable: true,
        },
    },
    render: (args) => <StoryLiveDemo {...args} />,
};
