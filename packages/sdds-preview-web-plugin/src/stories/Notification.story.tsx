import { IconDisclosureRight, IconTrash } from '@salutejs/plasma-icons';
import {
    NotificationsProvider,
    PopupProvider,
    addNotification,
    component,
    mergeConfig,
    modalConfig,
    notificationConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { useCallback, useRef, useState } from 'react';

const Notification = component(mergeConfig(notificationConfig as any, {}));
const Modal = component(mergeConfig(modalConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const longText =
    'JavaScript frameworks are an essential part of modern front-end web development, providing developers with proven tools for building scalable, interactive web applications.';

const titles = ['Выполнено', 'Внимание', 'Ошибка'];
const texts = ['SSH ключ успешно скопирован', 'Нельзя скопировать SSH ключ', 'Не удалось скопировать SSH ключ'];
const sizes = ['xs', 'xxs'];
const placements = ['top', 'left'];
const providerPlacements = [
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

const getNotificationProps = (i: number) => ({
    title: titles[i % 3],
    children: texts[i % 3],
    size: sizes[i % 2],
    iconPlacement: placements[i % 2],
});

const NotificationDefault = {
    name: 'Default',
    args: [
        {
            name: 'title',
            value: 'Title',
        },
        {
            name: 'text',
            value: longText,
        },
        {
            name: 'showCloseIcon',
            value: true,
        },
        {
            name: 'enableCustomCloseIcon',
            value: false,
        },
        {
            name: 'showLeftIcon',
            value: true,
        },
        {
            name: 'iconPlacement',
            value: 'top',
            items: toItems(placements),
        },
        {
            name: 'hasActions',
            value: true,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { text, showLeftIcon, enableCustomCloseIcon, hasActions, ...rest } = args;

        return (
            <div style={{ width: '20rem' }}>
                <Notification
                    {...rest}
                    icon={showLeftIcon ? <IconDisclosureRight color="inherit" /> : ''}
                    actions={
                        hasActions ? (
                            <Button
                                text="text"
                                size={rest.layout === 'horizontal' ? 'xs' : rest.size}
                                stretch={rest.layout === 'vertical' && rest.size === 'xs'}
                            />
                        ) : undefined
                    }
                    {...(enableCustomCloseIcon ? { customCloseIcon: <IconTrash color="inherit" /> } : {})}
                >
                    {text}
                </Notification>
            </div>
        );
    },
};

const liveDemoArgs = [
    {
        name: 'placement',
        value: 'bottom-right',
        items: toItems(providerPlacements),
    },
    {
        name: 'timeout',
        value: 3000,
    },
    {
        name: 'showCloseIcon',
        value: true,
    },
    {
        name: 'enableCustomCloseIcon',
        value: false,
    },
];

const NotificationLiveDemo = {
    name: 'LiveDemo',
    args: liveDemoArgs,
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { placement, timeout, ...rest } = args;
        const count = useRef(0);

        const handleClick = useCallback(() => {
            addNotification(
                {
                    icon: <IconDisclosureRight color="inherit" />,
                    ...(rest.enableCustomCloseIcon ? { customCloseIcon: <IconTrash color="inherit" /> } : {}),
                    ...rest,
                    ...getNotificationProps(count.current),
                } as any,
                Number(timeout) || 3000,
            );
            count.current += 1;
        }, [rest, timeout]);

        return (
            <NotificationsProvider config={relatedComponents.NotificationConfig as any} placement={placement}>
                <Button text="Добавить уведомление" onClick={handleClick} />
            </NotificationsProvider>
        );
    },
};

const NotificationWithModal = {
    name: 'WithModal',
    args: [
        {
            name: 'placement',
            value: 'bottom-right',
            items: toItems(providerPlacements),
        },
        {
            name: 'timeout',
            value: 3500,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { placement, timeout } = args;
        const frame = useRef<HTMLDivElement>(null);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const count = useRef(0);

        const handleClick = useCallback(() => {
            addNotification(getNotificationProps(count.current) as any, Number(timeout) || 3500);
            count.current += 1;
        }, [timeout]);

        return (
            <NotificationsProvider config={relatedComponents.NotificationConfig as any} placement={placement}>
                <PopupProvider>
                    <div
                        ref={frame}
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            minHeight: '24rem',
                            overflow: 'hidden',
                        }}
                    >
                        <Button
                            text="Open modal"
                            onClick={() => setIsModalOpen(true)}
                            style={{
                                margin: '3.25rem 1rem 1rem',
                            }}
                        />
                        <Modal frame={frame} opened={isModalOpen} onClose={() => setIsModalOpen(false)} hasBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <span>Hello!</span>
                                <Button view="default" text="Add notification" onClick={handleClick} />
                            </div>
                        </Modal>
                    </div>
                </PopupProvider>
            </NotificationsProvider>
        );
    },
};

export const NotificationStories = [NotificationDefault, NotificationLiveDemo, NotificationWithModal];
