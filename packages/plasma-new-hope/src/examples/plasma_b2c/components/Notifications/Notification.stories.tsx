import React, { useCallback, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { addNotification } from '../../../../../src/components/Notification';
import { WithTheme } from '../../../_helpers';
import { PopupProvider } from '../Popup/Popup';
import { NotificationStatusType } from '../../../../components/Notification/Notification.types';

import { Notification, NotificationsProvider } from './Notification';

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
    status: statuses[i % 3] as NotificationStatusType,
    title: titles[i % 3],
    children: texts[i % 3],
});

export default {
    title: 'plasma_b2c/Notification',
    decorators: [WithTheme],
} as Meta;

interface DefaultStoryProps {
    status: string;
    title: string;
    children: string;
}

const StoryDefault = ({ status, title, children }: DefaultStoryProps) => {
    return (
        <Notification title={title} status={status !== '' ? (status as 'success') : undefined}>
            {children}
        </Notification>
    );
};

export const Default: StoryObj<DefaultStoryProps> = {
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

type StoryLiveDemoProps = ComponentProps<typeof Notification> & {
    timeout: number;
};

const StoryLiveDemo = ({ timeout, ...rest }: StoryLiveDemoProps) => {
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

export const LiveDemo: StoryObj<StoryLiveDemoProps> = {
    args: {
        timeout: 3000,
        role: 'alert',
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
            <PopupProvider>
                <Button text="Open modal" onClick={() => setIsModalOpen(true)} />
                <Modal frame="theme-root" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div>Hello!</div>
                    <Button view="primary" text="Add notification" onClick={handleClick} />
                </Modal>
            </PopupProvider>
        </NotificationsProvider>
    );
};

export const WithModal: StoryObj<StoryLiveDemoProps> = {
    args: {
        timeout: 3500,
    },
    render: (args) => <StoryWithModal {...args} />,
};
