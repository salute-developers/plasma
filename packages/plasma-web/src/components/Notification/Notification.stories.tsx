import React, { useRef, useCallback, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';
import { Modal, ModalsProvider } from '../Modal';
import { Headline3 } from '../Typography';

import { Notification, addNotification, NotificationsProvider } from '.';
import type { NotificationProps } from '.';

const meta: Meta<NotificationProps> = {
    title: 'Controls/Notification',
    component: Notification,
    decorators: [InSpacingDecorator],
};

export default meta;

const statuses = ['success', 'warning', 'error', ''];
const titles = ['Выполнено', 'Внимание', 'Ошибка'];
const texts = ['SSH ключ успешно скопирован', 'Нельзя скопировать SSH ключ', 'Не удалось скопировать SSH ключ'];

const longText = `JavaScript frameworks are an essential part of modern front-end web development,
providing developers with proven tools for building scalable, interactive web applications.
This module gives you some fundamental background knowledge about how client-side frameworks
work and how they fit into your toolset, before moving on to tutorial series covering some of
today's most popular ones.
`;

const getNotificationProps = (i: number) => ({
    status: statuses[i % 3] as NotificationProps['status'],
    title: titles[i % 3],
    children: texts[i % 3],
});

type StoryDefaultProps = {
    status: string;
    title: string;
    children: string;
};

const StoryDefault = ({ status, title, children }: StoryDefaultProps) => {
    return (
        <Notification title={title} status={status !== '' ? (status as 'success') : undefined}>
            {children}
        </Notification>
    );
};

export const Default: StoryObj<StoryDefaultProps> = {
    argTypes: {
        status: {
            options: statuses,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        status: '',
        title: 'Title',
        children: longText,
    },
    render: (args) => <StoryDefault {...args} />,
};

type NotificationDemoProps = { timeout: number } & NotificationProps;

const StoryLiveDemo = ({ timeout, ...rest }: NotificationDemoProps) => {
    const count = useRef(0);

    const handleClick = useCallback(() => {
        addNotification({ ...rest, ...getNotificationProps(count.current) }, timeout);
        count.current++;
    }, [count]);

    return (
        <NotificationsProvider>
            <Button text="Добавить уведомление" onClick={handleClick} />
        </NotificationsProvider>
    );
};

export const LiveDemo: StoryObj<NotificationDemoProps> = {
    args: {
        timeout: 3000,
        role: 'alert',
    },
    render: (args) => <StoryLiveDemo {...args} />,
};

const StoryWithModal = ({ timeout }: { timeout: number }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const count = useRef(0);

    const handleClick = useCallback(() => {
        addNotification(getNotificationProps(count.current), timeout);
        count.current++;
    }, [count]);

    return (
        <ModalsProvider>
            <NotificationsProvider>
                <Button text="Open modal" onClick={() => setIsModalOpen(true)} />
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <Headline3>Hello!</Headline3>
                    <Button view="primary" text="Add notification" onClick={handleClick} />
                </Modal>
            </NotificationsProvider>
        </ModalsProvider>
    );
};

export const WithModal: StoryObj<{ timeout: number }> = {
    args: {
        timeout: 3500,
    },
    render: (args) => <StoryWithModal {...args} />,
};
