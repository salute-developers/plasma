import React, { useCallback, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconDisclosureRight } from '@salutejs/plasma-icons';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { Button } from '../Button/Button';
import { Modal } from '../Modal';
import { PopupBaseProvider } from '../PopupBase';

import { Notification, addNotification, NotificationsProvider, NotificationIconPlacement, NotificationProps } from '.';

const titles = ['Выполнено', 'Внимание', 'Ошибка'];
const texts = ['SSH ключ успешно скопирован', 'Нельзя скопировать SSH ключ', 'Не удалось скопировать SSH ключ'];
const size = ['xs', 'xxs'];
const iconPlacement = ['top', 'left'];

const longText = `JavaScript frameworks are an essential part of modern front-end web development,
providing developers with proven tools for building scalable, interactive web applications.
`;

const getNotificationProps = (i: number) => ({
    title: titles[i % 3],
    children: texts[i % 3],
    size: size[i % 2],
    iconPlacement: iconPlacement[i % 2] as NotificationIconPlacement,
});

const placements = ['top', 'left'];

const meta: Meta<NotificationProps> = {
    title: 'Controls/Notification',
    decorators: [InSpacingDecorator],
};

export default meta;

interface StoryDefaultProps {
    title: string;
    children: string;
    showCloseIcon: boolean;
    showLeftIcon: boolean;
    layout: 'vertical' | 'horizontal';
    size: 'xs' | 'xs';
    iconPlacement: 'top' | 'left';
}

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 6px;
`;

const StoryDefault = ({ title, children, iconPlacement, size, layout, showLeftIcon, ...rest }: StoryDefaultProps) => {
    return (
        <Notification
            title={title}
            icon={showLeftIcon ? <IconDisclosureRight /> : ''}
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
    },
    args: {
        title: 'Title',
        children: longText,
        showCloseIcon: true,
        showLeftIcon: true,
        iconPlacement: 'top',
        layout: 'vertical',
        size: 'xs',
    },
    render: (args) => <StoryDefault {...args} />,
};

type StoryLiveDemoProps = ComponentProps<typeof Notification> & {
    timeout: number;
    layout: 'vertical' | 'horizontal';
    size: 'xs' | 'xxs';
    iconPlacement: 'top' | 'left';
};

const StoryLiveDemo = ({ timeout, ...rest }: StoryLiveDemoProps) => {
    const count = useRef(0);
    const handleClick = useCallback(() => {
        addNotification({ icon: <IconDisclosureRight />, ...rest, ...getNotificationProps(count.current) }, timeout);
        count.current++;
    }, [count]);

    return (
        <NotificationsProvider>
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
    },
    args: {
        timeout: 3000,
        role: 'alert',
        layout: 'vertical',
    },
    render: (args) => <StoryLiveDemo {...args} />,
};

type StoryWithModalProps = ComponentProps<typeof Notification> & {
    timeout: number;
};

const StoryWithModal = ({ timeout }: StoryWithModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const count = useRef(0);
    const handleClick = useCallback(() => {
        addNotification(getNotificationProps(count.current), timeout);
        count.current++;
    }, [count]);

    return (
        <NotificationsProvider>
            <PopupBaseProvider>
                <Button text="Open modal" onClick={() => setIsModalOpen(true)} />
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
    },
    render: (args) => <StoryWithModal {...args} />,
};
