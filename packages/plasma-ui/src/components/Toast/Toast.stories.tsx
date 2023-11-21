import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconClose } from '@salutejs/plasma-icons';
import { critical } from '@salutejs/plasma-core';
import styled from 'styled-components';

import { Button } from '../Button';
import { InSpacingDecorator } from '../../helpers';

import { Toast, useToast, ToastPosition } from '.';
import type { ToastProps } from '.';

const meta: Meta<ToastProps> = {
    title: 'Controls/Toast',
    component: Toast,
    decorators: [InSpacingDecorator],
};

export default meta;

type LiveDemoProps = ToastProps & {
    position: ToastPosition;
    timeout: number;
    fade: boolean;
    enableContentLeft: boolean;
    offset?: number;
};

export const Default: StoryObj<ToastProps> = {
    args: {
        text: 'Текст всплывающего уведомления',
    },
};

const Container = styled.div`
    position: relative;
    z-index: 10000;
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
`;

const StoryLiveDemo = ({ role, text, position, timeout, fade, enableContentLeft, offset }: LiveDemoProps) => {
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
        offset: {
            control: {
                type: 'number',
            },
        },
    },
    args: {
        role: 'alert',
        text: 'Текст всплывающего уведомления',
        enableContentLeft: true,
        position: 'bottom',
        timeout: 10000,
        fade: true,
        offset: 0,
    },
    render: (args) => <StoryLiveDemo {...args} />,
};
