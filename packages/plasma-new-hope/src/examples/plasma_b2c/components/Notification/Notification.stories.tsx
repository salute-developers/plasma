import React, { useCallback, useRef, useState } from 'react';
import { styled } from '@linaria/react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import {
    NotificationPlacement,
    NotificationIconPlacement,
    NotificationLayout,
    addNotification,
} from '../../../../../src/components/Notification';
import { WithTheme } from '../../../_helpers';
import { PopupProvider } from '../Popup/Popup';
import { NotificationProps } from '../../../../components/Notification';
import { IconDisclosureRight } from '../../../../components/_Icon';

import { Notification, NotificationsProvider } from './Notification';

const titles = ['Выполнено', 'Внимание', 'Ошибка'];
const texts = ['SSH ключ успешно скопирован', 'Нельзя скопировать SSH ключ', 'Не удалось скопировать SSH ключ'];
const size = ['xs', 'xxs'];
const iconPlacement = ['top', 'left'];
const notificationsPlacements = ['bottom-right', 'bottom-left'];
const views = ['default', 'negative', 'positive', 'warning', 'info'];

const longText = `JavaScript frameworks are an essential part of modern front-end web development,
providing developers with proven tools for building scalable, interactive web applications.
`;

const StyledWrapper = styled.div`
    height: 100vh;
`;

const getNotificationProps = (i: number) => ({
    title: titles[i % 3],
    children: texts[i % 3],
    size: size[i % 2],
    iconPlacement: iconPlacement[i % 2] as NotificationIconPlacement,
});

const placements = ['top', 'left'];

const meta: Meta<NotificationProps> = {
    title: 'b2c/Overlay/Notification',
    decorators: [WithTheme],
};

export default meta;

interface StoryDefaultProps {
    title: string;
    children: string;
    showCloseIcon: boolean;
    showLeftIcon: boolean;
    layout: NotificationLayout;
    size: 'xs' | 'xxs';
    closeIconType?: 'default' | 'thin';
    iconPlacement: NotificationIconPlacement;
    placement?: NotificationPlacement;
    view: 'default';
    iconColor?: string;
}

const StoryDefault = ({
    title,
    children,
    iconPlacement,
    size,
    layout,
    showLeftIcon,
    iconColor,
    view,
    ...rest
}: StoryDefaultProps) => {
    return (
        <Notification
            title={title}
            icon={showLeftIcon ? <IconDisclosureRight color={iconColor || 'inherit'} /> : ''}
            iconPlacement={iconPlacement}
            view={view}
            actions={
                <Button
                    text="text"
                    size={layout === 'horizontal' ? 'xs' : size}
                    stretch={layout === 'vertical' && size === 'xs'}
                />
            }
            size={size}
            layout={layout}
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
        closeIconType: {
            options: ['default', 'thin'],
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
    },
    args: {
        title: 'Title',
        children: longText,
        showCloseIcon: true,
        showLeftIcon: true,
        iconPlacement: 'top',
        layout: 'vertical',
        closeIconType: 'default',
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
};

const StoryLiveDemo = ({ timeout, placement, ...rest }: StoryLiveDemoProps) => {
    const count = useRef(0);
    const handleClick = useCallback(() => {
        addNotification(
            {
                icon: <IconDisclosureRight color="inherit" />,
                ...rest,
                ...getNotificationProps(count.current),
            },
            timeout,
        );
        count.current++;
    }, [count, rest]);

    return (
        <NotificationsProvider placement={placement}>
            <StyledWrapper>
                <Button text="Добавить уведомление" onClick={handleClick} />
            </StyledWrapper>
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
    },
    args: {
        timeout: 3000,
        role: 'alert',
        layout: 'vertical',
        placement: 'bottom-right',
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
                <StyledWrapper>
                    <Button text="Open modal" onClick={() => setIsModalOpen(true)} />
                    <Modal frame="theme-root" opened={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <div>Hello!</div>
                        <Button view="primary" text="Add notification" onClick={handleClick} />
                    </Modal>
                </StyledWrapper>
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
