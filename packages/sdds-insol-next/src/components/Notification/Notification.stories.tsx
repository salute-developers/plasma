import React, { useCallback, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconDisclosureRight, IconTrash } from '@salutejs/plasma-icons';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { action } from 'storybook/actions';
import { addNotification } from '@salutejs/plasma-new-hope';
import type { NotificationIconPlacement } from '@salutejs/plasma-new-hope';
import styled from 'styled-components';

import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { PopupProvider } from '../Popup';

import { Notification, NotificationsProvider, NotificationPlacement } from './Notification';

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

const ButtonsWrapper = styled.div<{ $filled?: boolean; $hasLeftIcon?: boolean; $isVertical?: boolean }>`
    display: flex;
    gap: 2px;
    width: ${({ $filled }) => ($filled ? '100%' : 'auto')};
    margin-bottom: ${({ $isVertical }) => ($isVertical ? '0.625rem' : '0')};
    margin-left: ${({ $filled, $hasLeftIcon }) =>
        !$filled && $hasLeftIcon
            ? 'calc(var(--plasma-notification-content-left-icon-size) + var(--plasma-notification-content-left-icon-margin))'
            : '0'};
`;

const NotificationWithHugButtons = styled(Notification)`
    --plasma-notification-padding: 0.375rem 0.75rem;
    --plasma-notification-close-icon-top: 0.75rem;
    --plasma-notification-close-icon-right: 1rem;
    --plasma-notification-content-padding-right: 0;
    --plasma-notification-content-padding-left: 0;
`;

const meta: Meta<typeof Notification> = {
    title: 'Overlay/Notification',
    decorators: [InSpacingDecorator],
};

export default meta;

type StoryDefaultProps = {
    showLeftIcon: boolean;
    iconColor?: string;
    enableCustomCloseIcon?: boolean;
    buttonStretching?: boolean;
} & ComponentProps<typeof Notification>;

const StoryDefault = ({
    title,
    children,
    iconPlacement,
    size,
    layout,
    showLeftIcon,
    iconColor,
    enableCustomCloseIcon,
    buttonStretching,
    ...rest
}: StoryDefaultProps) => {
    const isVertical = layout === 'vertical';
    const isFilled = isVertical && buttonStretching;
    const Root = (isFilled ? Notification : NotificationWithHugButtons) as typeof Notification;

    return (
        <Root
            title={title}
            icon={showLeftIcon ? <IconDisclosureRight color={iconColor || 'inherit'} /> : ''}
            iconPlacement={iconPlacement}
            actions={
                <ButtonsWrapper
                    $filled={isFilled}
                    $hasLeftIcon={showLeftIcon && iconPlacement === 'left'}
                    $isVertical={isVertical}
                >
                    <Button text="text" size={isFilled ? 'xs' : 'xxs'} stretching={isFilled ? 'filled' : 'auto'} />
                    <Button text="text" size={isFilled ? 'xs' : 'xxs'} stretching={isFilled ? 'filled' : 'auto'} />
                </ButtonsWrapper>
            }
            size={size}
            layout={layout}
            {...(enableCustomCloseIcon && { customCloseIcon: <IconTrash color={iconColor || 'inherit'} /> })}
            {...rest}
        >
            {children}
        </Root>
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
        buttonStretching: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'layout',
                eq: 'vertical',
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
        buttonStretching: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

type StoryLiveDemoProps = ComponentProps<typeof Notification> & {
    timeout: number;
    size: 'xs' | 'xxs';
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
            <PopupProvider>
                <Button text="Open modal" onClick={() => setIsModalOpen(true)} />
                <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div>Hello!</div>
                    <Button view="default" text="Add notification" onClick={handleClick} />
                </Modal>
            </PopupProvider>
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
