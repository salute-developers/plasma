import { createStoreon, StoreonStore } from 'storeon';

import { NotificationDefaultArgs, NotificationProps } from './Notification.types';

const DEFAULT_TIMEOUT = 2000;
const DEFAULT_CLOSE_DELAY = 380;

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
export type AddNotification = (props?: NotificationProps, timeout?: number | null) => string;
export type CloseNotification = (id: string, delay?: number) => void;
export type GetNotificationDefaultArgs = () => NotificationDefaultArgs | undefined;

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

const closeNotificationInStore = (store: NotificationsStoreInstance, id: string, delay = DEFAULT_CLOSE_DELAY) => {
    const { dispatch } = store;

    dispatch('hide', id);

    setTimeout(() => dispatch('remove', id), delay);
};

const addNotificationToStore = (
    store: NotificationsStoreInstance,
    { id: externalId, onTimeoutClose, ...rest }: NotificationProps,
    timeout: number | null = DEFAULT_TIMEOUT,
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

// Переданное значение `undefined` не должно затирать дефолт провайдера.
const omitUndefined = (props: NotificationProps) =>
    Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined)) as NotificationProps;

export const createNotificationsApi = (
    store: NotificationsStoreInstance,
    getDefaultArgs?: GetNotificationDefaultArgs,
) => ({
    addNotification: ((props, timeout) => {
        const { timeout: defaultTimeout, ...defaultProps } = getDefaultArgs?.() || {};

        return addNotificationToStore(
            store,
            { ...defaultProps, ...omitUndefined(props || {}) },
            timeout === undefined ? defaultTimeout ?? DEFAULT_TIMEOUT : timeout,
        );
    }) as AddNotification,
    closeNotification: ((id, delay = DEFAULT_CLOSE_DELAY) =>
        closeNotificationInStore(store, id, delay)) as CloseNotification,
});

let getGlobalDefaultArgs: GetNotificationDefaultArgs | undefined;

/**
 * Связывает дефолтные параметры провайдера, отображающего глобальный портал, с глобальным API.
 */
export const registerGlobalDefaultNotificationArgs = (getArgs: GetNotificationDefaultArgs) => {
    getGlobalDefaultArgs = getArgs;

    return () => {
        if (getGlobalDefaultArgs === getArgs) {
            getGlobalDefaultArgs = undefined;
        }
    };
};

export const GlobalNotificationsApi = createNotificationsApi(NotificationsStore, () => getGlobalDefaultArgs?.());

export const closeNotification: CloseNotification = (...args) => GlobalNotificationsApi.closeNotification(...args);

/**
 * Открыть новое оповещение.
 * @param props Пропсы всплывающего оповещения
 * @return Идентификатор нового оповещения
 */
export const addNotification: AddNotification = (...args) => GlobalNotificationsApi.addNotification(...args);
