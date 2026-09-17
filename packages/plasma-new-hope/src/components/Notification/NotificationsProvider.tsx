import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { StoreContext } from 'storeon/react';

import { NotificationsContext } from './NotificationsContext';
import {
    createNotificationsApi,
    createNotificationsStore,
    GlobalNotificationsApi,
    NotificationsStore,
    registerGlobalDefaultNotificationArgs,
} from './NotificationsStore';
import { NotificationsPortal } from './NotificationsPortal';
import { NotificationsProviderProps } from './Notification.types';

type GlobalPortalSubscriber = (isActive: boolean) => void;

// Глобальные addNotification/closeNotification работают с одним модульным NotificationsStore.
// Поэтому среди всех смонтированных NotificationsProvider только один должен отображать его портал,
// иначе одна глобальная нотификация будет отрисована по количеству провайдеров на странице.
const globalPortalSubscribers = new Set<GlobalPortalSubscriber>();

const updateGlobalPortalProvider = () => {
    const activeSubscriber = globalPortalSubscribers.values().next().value;

    globalPortalSubscribers.forEach((subscriber) => {
        subscriber(subscriber === activeSubscriber);
    });
};

const subscribeGlobalPortalProvider = (subscriber: GlobalPortalSubscriber) => {
    globalPortalSubscribers.add(subscriber);
    updateGlobalPortalProvider();

    return () => {
        globalPortalSubscribers.delete(subscriber);
        updateGlobalPortalProvider();
    };
};

export const NotificationsProvider: FC<NotificationsProviderProps> = ({
    children,
    config,
    frame,
    placement,
    UNSAFE_SSR_ENABLED,
    className,
    defaultNotificationArgs,
}) => {
    const [store] = useState(createNotificationsStore);
    const [isGlobalPortalActive, setIsGlobalPortalActive] = useState(false);

    const defaultArgsRef = useRef(defaultNotificationArgs);
    defaultArgsRef.current = defaultNotificationArgs;

    const notificationsApi = useMemo(() => createNotificationsApi(store, () => defaultArgsRef.current), [store]);

    useEffect(() => subscribeGlobalPortalProvider(setIsGlobalPortalActive), []);

    useEffect(() => {
        if (!isGlobalPortalActive) {
            return undefined;
        }

        return registerGlobalDefaultNotificationArgs(() => defaultArgsRef.current);
    }, [isGlobalPortalActive]);

    return (
        <>
            {/*
                Локальная ветка каждого NotificationsProvider. NotificationsContext передает дочерним
                компонентам API из useNotifications, привязанный к локальному store, а StoreContext дает
                NotificationsPortal доступ к состоянию этого же store. Контексты решают разные задачи,
                поэтому вложенность не создает конфликтов или дублирования нотификаций.
            */}
            <NotificationsContext.Provider value={notificationsApi}>
                <StoreContext.Provider value={store}>
                    {children}
                    <NotificationsPortal
                        frame={frame}
                        placement={placement}
                        config={config}
                        UNSAFE_SSR_ENABLED={UNSAFE_SSR_ENABLED}
                        className={className}
                    />
                </StoreContext.Provider>
            </NotificationsContext.Provider>
            {/*
                Отдельная ветка сохраняет обратную совместимость с глобальными addNotification и
                closeNotification. Они не могут определить ближайший React-контекст и используют
                модульный NotificationsStore, поэтому его портал рендерит только один активный провайдер.
                Локальная и глобальная очереди не конфликтуют, так как используют разные store и API.
            */}
            {isGlobalPortalActive && (
                <NotificationsContext.Provider value={GlobalNotificationsApi}>
                    <StoreContext.Provider value={NotificationsStore}>
                        <NotificationsPortal
                            frame={frame}
                            placement={placement}
                            config={config}
                            UNSAFE_SSR_ENABLED={UNSAFE_SSR_ENABLED}
                            className={className}
                        />
                    </StoreContext.Provider>
                </NotificationsContext.Provider>
            )}
        </>
    );
};
