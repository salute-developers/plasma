import { createStoreon, StoreonStore } from 'storeon';

import { NotificationProps } from './Notification.types';

export type NotificationItem = {
    id: string;
    isHidden?: boolean;
};
export type NotificationsState = {
    notifications: NotificationItem[];
};
export type NotificationsEvents = {
    add: NotificationItem;
    hide: string;
    remove: string;
};

export type NotificationsStoreInstance = StoreonStore<NotificationsState, NotificationsEvents>;
export type AddNotification = (props: NotificationProps, timeout?: number | null) => string;
export type CloseNotification = (id: string, delay?: number) => void;

/**
 * Создает хранилище с ключом `notifications` к массиву с окнами.
 */
export const createNotificationsStore = () =>
    createStoreon([
        (store: NotificationsStoreInstance) => {
            store.on('@init', () => ({ notifications: [] }));

            store.on('add', ({ notifications }, notif) => {
                return { notifications: notifications.concat([notif]) };
            });

            store.on('hide', ({ notifications }, id) => {
                return {
                    notifications: notifications.map((notif) =>
                        id === notif.id ? { ...notif, isHidden: true } : notif,
                    ),
                };
            });

            store.on('remove', ({ notifications }, id) => {
                return { notifications: notifications.filter((notif) => id !== notif.id) };
            });
        },
    ]);

export const NotificationsStore = createNotificationsStore();

let notificationIdCounter = 0;

const createNotificationId = () => {
    notificationIdCounter += 1;

    return `plasma-notification-${Date.now()}-${notificationIdCounter}`;
};

const closeNotificationInStore = (store: NotificationsStoreInstance, id: string, delay = 380) => {
    const { dispatch } = store;

    dispatch('hide', id);

    setTimeout(() => dispatch('remove', id), delay);
};

const addNotificationToStore = (
    store: NotificationsStoreInstance,
    { id: externalId, onTimeoutClose, ...rest }: NotificationProps,
    timeout: number | null = 2000,
) => {
    const id = externalId || createNotificationId();
    const { dispatch, get } = store;

    dispatch('add', {
        ...rest,
        id,
        isHidden: false,
    });

    // TODO: Вынести логику закрытия в отдельный модуль, данный метод должен только создавать новое оповещение
    if (timeout !== 0 && timeout !== null) {
        setTimeout(() => {
            const { notifications } = get();

            const notification = notifications.find((notification) => notification.id === id);

            if (!notification) {
                return;
            }

            closeNotificationInStore(store, id);

            onTimeoutClose?.();
        }, timeout);
    }

    return id;
};

export const createNotificationsApi = (store: NotificationsStoreInstance) => ({
    addNotification: ((props, timeout = 2000) => addNotificationToStore(store, props, timeout)) as AddNotification,
    closeNotification: ((id, delay = 380) => closeNotificationInStore(store, id, delay)) as CloseNotification,
});

export const GlobalNotificationsApi = createNotificationsApi(NotificationsStore);

export const closeNotification: CloseNotification = (id, delay = 380) =>
    closeNotificationInStore(NotificationsStore, id, delay);

/**
 * Открыть новое оповещение.
 * @param props Пропсы всплывающего оповещения
 * @return Идентификатор нового оповещения
 */
export const addNotification: AddNotification = (props, timeout = 2000) =>
    addNotificationToStore(NotificationsStore, props, timeout);
