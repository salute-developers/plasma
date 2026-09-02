import React, { FC, HTMLAttributes, ReactNode, useEffect, useMemo, useState } from 'react';
import { StoreContext } from 'storeon/react';

import { ComponentConfig } from '../../engines';
import { PropsType, Variants } from '../../engines/types';

import { NotificationsContext } from './NotificationsContext';
import {
    createNotificationsApi,
    createNotificationsStore,
    GlobalNotificationsApi,
    NotificationsStore,
} from './NotificationsStore';
import { NotificationsPortal } from './NotificationsPortal';
import { NotificationPlacement, NotificationProps } from './Notification.types';

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

export const NotificationsProvider: FC<{
    children: ReactNode;
    config: ComponentConfig<string, Variants, PropsType<Variants>, NotificationProps & HTMLAttributes<HTMLDivElement>>;
    frame?: string;
    placement?: NotificationPlacement;
    /**
     * @description Только для применения в рамках SSR.
     */
    UNSAFE_SSR_ENABLED?: boolean;
    className?: string;
}> = ({ children, config, frame, placement, UNSAFE_SSR_ENABLED, className }) => {
    const [store] = useState(createNotificationsStore);
    const notificationsApi = useMemo(() => createNotificationsApi(store), [store]);
    const [isGlobalPortalActive, setIsGlobalPortalActive] = useState(false);

    useEffect(() => subscribeGlobalPortalProvider(setIsGlobalPortalActive), []);

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
