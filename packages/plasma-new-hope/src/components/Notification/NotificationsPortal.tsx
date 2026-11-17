import React, { FC, ForwardRefExoticComponent, RefAttributes, useEffect, useMemo, useRef } from 'react';
import type { ReactNode } from 'react';
import { useStoreon } from 'storeon/react';
import styled from 'styled-components';
import { component } from 'src/engines';
import { cx } from 'src/utils';

import { popupConfig, popupClasses } from '../Popup';
import { useOverlayContext } from '../OverlayProvider/OverlayContext';
import type { OverlayLayerConfig } from '../OverlayProvider/OverlayProvider.types';

import { useNotifications } from './NotificationsContext';
import { NotificationsState, NotificationsEvents } from './NotificationsStore';
import { NotificationPortalProps, NotificationProps } from './Notification.types';
import { StyledItemWrapper, StyledRoot } from './Notification.styles';
import { classes } from './Notification.tokens';

// issue #823
const Popup = component(popupConfig);

const StyledPopup = styled(Popup)`
    & > .${popupClasses.root} {
        overflow: hidden;
    }
`;

const FALLBACK_Z_INDEX = '9100';

const messageLayerOptions: OverlayLayerConfig = { kind: 'message', closeOnEsc: false };

type NotificationItemTimerProps = {
    timeout?: number | null;
    isHidden?: boolean;
    onExpire: () => void;
    className?: string;
    children: ReactNode;
};

/**
 * Обертка оповещения с таймером закрытия.
 * Таймер приостанавливается при наведении и фокусе внутри оповещения.
 */
const NotificationItem: FC<NotificationItemTimerProps> = ({ timeout, isHidden, onExpire, className, children }) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const remainingRef = useRef(timeout || 0);
    const startedAtRef = useRef(0);
    const onExpireRef = useRef(onExpire);
    onExpireRef.current = onExpire;

    const hasTimer = Boolean(timeout) && !isHidden;

    const stop = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const start = () => {
        if (!hasTimer || timerRef.current) {
            return;
        }

        startedAtRef.current = Date.now();
        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            onExpireRef.current();
        }, remainingRef.current);
    };

    const pause = () => {
        if (!timerRef.current) {
            return;
        }

        stop();
        remainingRef.current = Math.max(remainingRef.current - (Date.now() - startedAtRef.current), 0);
    };

    useEffect(() => {
        start();

        return stop;
    }, [hasTimer]);

    return (
        <StyledItemWrapper
            className={className}
            isHidden={isHidden || false}
            onMouseEnter={pause}
            onMouseLeave={start}
            onFocus={pause}
            onBlur={start}
        >
            {children}
        </StyledItemWrapper>
    );
};

/**
 * Обертка для визуального представления уведомлений.
 */
export const NotificationsPortal: FC<NotificationPortalProps> = ({
    config,
    frame,
    placement = 'bottom-right',
    maxCount,
    className,
}) => {
    const { notifications } = useStoreon<NotificationsState, NotificationsEvents>('notifications');
    const { closeNotification } = useNotifications();
    const { isFallback } = useOverlayContext();

    const Notification = useMemo(
        () => component(config) as ForwardRefExoticComponent<NotificationProps & RefAttributes<HTMLDivElement>>,
        [],
    );

    const hasLeftAnimationClass = ['left', 'bottom-left', 'top-left'].includes(placement);
    const visibleNotifications = maxCount && maxCount > 0 ? notifications.slice(0, maxCount) : notifications;

    if (notifications.length === 0) {
        return null;
    }

    return (
        <StyledPopup
            opened
            frame={frame}
            placement={placement}
            zIndex={isFallback ? FALLBACK_Z_INDEX : undefined}
            layerOptions={messageLayerOptions}
        >
            <StyledRoot placement={placement} className={className}>
                {visibleNotifications.map(({ id, isHidden, timeout, onTimeoutClose, ...rest }) => (
                    <NotificationItem
                        key={id}
                        timeout={timeout}
                        isHidden={isHidden}
                        onExpire={() => {
                            closeNotification(id);
                            onTimeoutClose?.();
                        }}
                        className={cx(
                            isHidden ? classes.notificationItemHidden : classes.notificationItemOpened,
                            hasLeftAnimationClass && classes.notificationLeftToRightAnimation,
                            placement === 'top' && classes.notificationTopToCenterAnimation,
                            placement === 'bottom' && classes.notificationBottomToCenterAnimation,
                        )}
                    >
                        <Notification id={id} onCloseButtonClick={() => closeNotification(id)} {...rest} />
                    </NotificationItem>
                ))}
            </StyledRoot>
        </StyledPopup>
    );
};
