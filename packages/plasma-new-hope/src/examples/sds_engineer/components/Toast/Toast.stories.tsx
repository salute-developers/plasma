import React, { ComponentProps, useCallback, useRef, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { toastConfig } from '../../../../components/Toast';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { Button } from '../Button/Button';
import { PopupProvider } from '../Popup/Popup';
import { addNotification } from '../../../../../src/components/Notification';
import { NotificationsProvider } from '../Notification/Notification';
import { Modal } from '../Modal/Modal';

import { config } from './Toast.config';
import { Toast, ToastController, ToastProvider, useToast } from './Toast';

const meta: Meta<typeof ToastController> = {
    title: 'sds_engineer/Toast',
    decorators: [WithTheme],
};

export default meta;

type StoryComponentProps = ComponentProps<typeof Toast> & {
    enableContentLeft?: boolean;
};
type StoryComponent = StoryObj<StoryComponentProps>;

type StoryProps = ComponentProps<typeof ToastController> & {
    text: string;
    timeout?: number;
    enableContentLeft?: boolean;
};
type Story = StoryObj<StoryProps>;

const BellIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
            fill="currentColor"
        />
    </svg>
);

const ToastContainer = styled.div`
    position: fixed;
    transform: translateX(50%);
`;

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const ToastComponent: StoryComponent = {
    args: {
        text: 'Текст всплывающего уведомления',
        view: 'primary',
        size: 'm',
        hasClose: true,
        enableContentLeft: true,
        pilled: false,
    },
    render: ({ enableContentLeft, ...args }) => (
        <ToastContainer>
            <Toast contentLeft={enableContentLeft && <BellIcon width="1rem" height="1rem" />} {...args} />
        </ToastContainer>
    ),
};

const StoryLiveDemo = ({
    text,
    position,
    timeout,
    fade,
    offset,
    pilled,
    view,
    size,
    hasClose,
    enableContentLeft,
}: StoryProps) => {
    const { showToast, hideToast } = useToast();
    const contentLeft = enableContentLeft && <BellIcon width="1rem" height="1rem" />;

    return (
        <Container>
            <Button onClick={hideToast}>Скрыть уведомление</Button>
            <Button
                onClick={() => {
                    showToast({
                        text,
                        position,
                        offset,
                        timeout,
                        fade,
                        contentLeft,
                        pilled,
                        view,
                        size,
                        hasClose,
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

export const LiveDemo: Story = {
    args: {
        ...ToastComponent.args,
        position: 'bottom',
        fade: true,
        offset: 0,
        timeout: 3000,
        role: 'alert',
    },
    argTypes: {
        position: {
            options: ['top', 'bottom'],
            control: {
                type: 'inline-radio',
            },
        },
        ...argTypesFromConfig(mergeConfig(toastConfig, config)),
        ...disableProps(['role', 'onShow', 'onHide', 'contentLeft']),
    },
    parameters: {
        chromatic: {
            disable: true,
        },
    },
    render: (args) => (
        <ToastProvider>
            <StoryLiveDemo {...args} />
        </ToastProvider>
    ),
};

const StoryComplex = ({
    text,
    position,
    timeout,
    fade,
    offset,
    pilled,
    view,
    size,
    hasClose,
    enableContentLeft,
}: StoryProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { showToast } = useToast();
    const contentLeft = enableContentLeft && <BellIcon width="1rem" height="1rem" />;

    const handleShowToast = () => {
        showToast({
            text,
            position,
            offset,
            timeout,
            fade,
            contentLeft,
            pilled,
            view,
            size,
            hasClose,
            onHide: action('onHide'),
            onShow: action('onShow'),
        });
    };

    const count = useRef(0);
    const handleShowNotification = useCallback(() => {
        addNotification(
            {
                title: 'Добавить Toast',
                size: 'xs',
                actions: <Button text="Добавить" size="xs" stretch onClick={handleShowToast} />,
            },
            5000,
        );
        count.current++;
    }, [count]);

    return (
        <NotificationsProvider>
            <PopupProvider>
                <Button text="Открыть модальное окно" onClick={() => setIsModalOpen(true)} />
                <Modal frame="theme-root" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div>Hello!</div>
                    <Button view="primary" text="Add notification" onClick={handleShowNotification} />
                </Modal>
            </PopupProvider>
        </NotificationsProvider>
    );
};

export const Complex: Story = {
    args: {
        ...LiveDemo.args,
    },
    argTypes: {
        ...LiveDemo.argTypes,
    },
    parameters: {
        chromatic: {
            disable: true,
        },
    },
    render: (args) => (
        <ToastProvider>
            <StoryComplex {...args} />
        </ToastProvider>
    ),
};
