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

/**
 * Создает хранилище с ключом `notifications` к массиву с окнами.
 */
export const NotificationsStore = createStoreon([
    (store: StoreonStore<NotificationsState, NotificationsEvents>) => {
        store.on('@init', () => ({ notifications: [] }));

        store.on('add', ({ notifications }, notif) => {
            return { notifications: notifications.concat([notif]) };
        });

        store.on('hide', ({ notifications }, id) => {
            return {
                notifications: notifications.map((notif) => (id === notif.id ? { ...notif, isHidden: true } : notif)),
            };
        });

        store.on('remove', ({ notifications }, id) => {
            return { notifications: notifications.filter((notif) => id !== notif.id) };
        });
    },
]);

export const closeNotification = (id: string, delay = 380) => {
    const { dispatch } = NotificationsStore;

    dispatch('hide', id);

    setTimeout(() => dispatch('remove', id), delay);
};

/**
 * Открыть новое оповещение.
 * @param props Пропсы всплывающего оповещения
 * @return Идентификатор нового оповещения
 */
export function addNotification(
    { id: externalId, onTimeoutClose, ...rest }: NotificationProps,
    timeout: number | null = 2000,
) {
    const id = externalId || `plasma-notification-${Date.now()}`;
    const { dispatch, get } = NotificationsStore;

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

            closeNotification(id);

            onTimeoutClose?.();
        }, timeout);
    }

    return id;
}
