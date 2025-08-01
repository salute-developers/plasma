import React, { useCallback, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconDisclosureRight, IconTrash } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { action } from '@storybook/addon-actions';
import { addNotification } from '@salutejs/plasma-new-hope';
import type { NotificationIconPlacement } from '@salutejs/plasma-new-hope';

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

const meta: Meta<typeof Notification> = {
    title: 'Overlay/Notification',
    decorators: [InSpacingDecorator],
};

export default meta;

type StoryDefaultProps = {
    showLeftIcon: boolean;
    iconColor?: string;
    enableCustomCloseIcon?: boolean;
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
    ...rest
}: StoryDefaultProps) => {
    return (
        <Notification
            title={title}
            icon={showLeftIcon ? <IconDisclosureRight color={iconColor || 'inherit'} /> : ''}
            iconPlacement={iconPlacement}
            actions={<Button text="text" size="s" stretch={layout === 'vertical' && size === 'xs'} />}
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
        ...disableProps(['view']),
    },
    args: {
        title: 'Title',
        children: longText,
        showCloseIcon: true,
        enableCustomCloseIcon: false,
        showLeftIcon: true,
        iconPlacement: 'top',
        layout: 'vertical',
        size: 'xs',
    },
    render: (args) => <StoryDefault {...args} />,
};

type StoryLiveDemoProps = ComponentProps<typeof Notification> & {
    timeout: number;
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
                    <Button view="default" size="s" text="Add notification" onClick={handleClick} />
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
