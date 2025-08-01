import React, { useCallback, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconDisclosureRight, IconTrash } from '@salutejs/plasma-icons';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Button } from '../Button/Button';
import { Modal } from '../Modal';
import { PopupBaseProvider } from '../PopupBase';

import {
    Notification,
    addNotification,
    NotificationsProvider,
    NotificationIconPlacement,
    NotificationProps,
    NotificationLayout,
    NotificationPlacement,
} from '.';

const titles = ['Выполнено', 'Внимание', 'Ошибка'];
const texts = ['SSH ключ успешно скопирован', 'Нельзя скопировать SSH ключ', 'Не удалось скопировать SSH ключ'];
const size = ['xs', 'xxs'];
const iconPlacement = ['top', 'left'];
const notificationsPlacements = [
    'center',
    'top',
    'bottom',
    'right',
    'left',
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
];
const views = ['default', 'negative', 'positive', 'warning', 'info'];

const longText = `JavaScript frameworks are an essential part of modern front-end web development,
providing developers with proven tools for building scalable, interactive web applications.
`;

const getNotificationProps = (i: number) => ({
    title: titles[i % 3],
    children: texts[i % 3],
    size: size[i % 2],
    iconPlacement: iconPlacement[i % 2] as NotificationIconPlacement,
    onTimeoutClose: () => {
        action('onTimeoutClose')('Callback, вызываемый при автоматическом закрытии по timeout.');
    },
});

const placements = ['top', 'left'];

const meta: Meta<NotificationProps> = {
    title: 'Overlay/Notification',
    decorators: [InSpacingDecorator],
};

export default meta;

interface StoryDefaultProps {
    view: 'default';
    title: string;
    children: string;
    iconColor?: string;
    showCloseIcon: boolean;
    showLeftIcon: boolean;
    layout: NotificationLayout;
    size: 'xs' | 'xxs';
    iconPlacement: NotificationIconPlacement;
    placement?: NotificationPlacement;
    enableCustomCloseIcon?: boolean;
}

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 6px;
`;

const StoryDefault = ({
    title,
    children,
    iconPlacement,
    size,
    layout,
    showLeftIcon,
    iconColor,
    enableCustomCloseIcon,
    ...rest
}: StoryDefaultProps) => {
    return (
        <Notification
            title={title}
            icon={showLeftIcon ? <IconDisclosureRight color={iconColor || 'inherit'} /> : ''}
            iconPlacement={iconPlacement}
            actions={
                <ButtonsWrapper>
                    <Button
                        text="First"
                        size={layout === 'horizontal' ? 'xxs' : size}
                        stretch={layout === 'vertical' && size === 'xs'}
                    />
                    <Button
                        text="Second"
                        size={layout === 'horizontal' ? 'xxs' : size}
                        stretch={layout === 'vertical' && size === 'xs'}
                    />
                </ButtonsWrapper>
            }
            size={size}
            layout={layout}
            {...(enableCustomCloseIcon && { customCloseIcon: <IconTrash color={iconColor || 'inherit'} /> })}
            {...rest}
        >
            {children}
        </Notification>
    );
};

export const Default: StoryObj<StoryDefaultProps> = {
    argTypes: {
        iconPlacement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['xs', 'xxs'],
            control: {
                type: 'select',
            },
        },
        layout: {
            options: ['vertical', 'horizontal'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        textColor: {
            control: 'color',
        },
        titleColor: {
            control: 'color',
        },
        iconColor: {
            control: 'color',
        },
        backgroundColor: {
            control: 'color',
        },
        enableCustomCloseIcon: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'showCloseIcon',
                truthy: true,
            },
        },
    },
    args: {
        title: 'Title',
        children: longText,
        showCloseIcon: true,
        enableCustomCloseIcon: false,
        showLeftIcon: true,
        iconPlacement: 'top',
        layout: 'vertical',
        view: 'default',
        size: 'xs',
    },
    render: (args) => <StoryDefault {...args} />,
};

type StoryLiveDemoProps = ComponentProps<typeof Notification> & {
    timeout: number;
    layout: NotificationLayout;
    size: 'xs' | 'xxs';
    iconPlacement: NotificationIconPlacement;
    placement?: NotificationPlacement;
    enableCustomCloseIcon?: boolean;
};

const StoryLiveDemo = ({ timeout, placement, enableCustomCloseIcon, ...rest }: StoryLiveDemoProps) => {
    const count = useRef(0);
    const handleClick = useCallback(() => {
        addNotification(
            {
                icon: <IconDisclosureRight color="inherit" />,
                ...(enableCustomCloseIcon && { customCloseIcon: <IconTrash color="inherit" /> }),

                ...rest,
                ...getNotificationProps(count.current),
            },
            timeout,
        );
        count.current++;
    }, [count, rest]);

    return (
        <NotificationsProvider placement={placement}>
            <Button text="Добавить уведомление" onClick={handleClick} />
        </NotificationsProvider>
    );
};

export const LiveDemo: StoryObj<StoryLiveDemoProps> = {
    argTypes: {
        layout: {
            options: ['vertical', 'horizontal'],
            control: {
                type: 'select',
            },
        },
        placement: {
            options: notificationsPlacements,
            control: {
                type: 'select',
            },
        },
        enableCustomCloseIcon: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'showCloseIcon',
                truthy: true,
            },
        },
    },
    args: {
        timeout: 3000,
        role: 'alert',
        layout: 'vertical',
        placement: 'bottom-right',
        width: '',
        maxWidth: '',
        enableCustomCloseIcon: false,
        showCloseIcon: true,
    },
    render: (args) => <StoryLiveDemo {...args} />,
};

type StoryWithModalProps = ComponentProps<typeof Notification> & {
    timeout: number;
    placement?: NotificationPlacement;
};

const StoryWithModal = ({ timeout, placement }: StoryWithModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const count = useRef(0);
    const handleClick = useCallback(() => {
        addNotification(getNotificationProps(count.current), timeout);
        count.current++;
    }, [count]);

    return (
        <NotificationsProvider placement={placement}>
            <PopupBaseProvider>
                <Button text="Open modal" onClick={() => setIsModalOpen(true)} />
                <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div>Hello!</div>
                    <Button view="primary" text="Add notification" onClick={handleClick} />
                </Modal>
            </PopupBaseProvider>
        </NotificationsProvider>
    );
};

export const WithModal: StoryObj<StoryLiveDemoProps> = {
    args: {
        timeout: 3500,
        placement: 'bottom-right',
    },
    argTypes: {
        placement: {
            options: notificationsPlacements,
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => <StoryWithModal {...args} />,
};
