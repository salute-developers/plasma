import React, { FC, ForwardRefExoticComponent, RefAttributes, useMemo } from 'react';
import { useStoreon } from 'storeon/react';

import { PopupProvider, popupConfig } from '../Popup';
import { component } from '../../engines';
import { cx } from '../../utils';

import { NotificationsState, NotificationsEvents, closeNotification } from './NotificationsStore';
import { NotificationPortalProps, NotificationProps } from './Notification.types';
import { StyledItemWrapper, StyledRoot } from './Notification.styles';
import { classes } from './Notification.tokens';

// issue #823
const Popup = component(popupConfig);

/**
 * Обертка для визуального представления уведомлений.
 */
export const NotificationsPortal: FC<NotificationPortalProps> = ({ config, frame }) => {
    const { notifications } = useStoreon<NotificationsState, NotificationsEvents>('notifications');

    const Notification = useMemo(
        () => component(config) as ForwardRefExoticComponent<NotificationProps & RefAttributes<HTMLDivElement>>,
        [],
    );

    return (
        <PopupProvider>
            {notifications.length > 0 && (
                <Popup isOpen frame={frame} placement="bottom-right" zIndex="9100">
                    <StyledRoot>
                        {notifications.map(({ id, isHidden, ...rest }) => (
                            <StyledItemWrapper
                                key={id}
                                className={cx(
                                    isHidden ? classes.notificationItemHidden : classes.notificationItemOpened,
                                )}
                                isHidden={isHidden || false}
                            >
                                <Notification
                                    key={id}
                                    id={id}
                                    onCloseButtonClick={() => closeNotification(id)}
                                    {...rest}
                                />
                            </StyledItemWrapper>
                        ))}
                    </StyledRoot>
                </Popup>
            )}
        </PopupProvider>
    );
};
