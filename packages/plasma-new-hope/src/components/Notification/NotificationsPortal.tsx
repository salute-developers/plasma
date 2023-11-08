import React, { FC, ForwardRefExoticComponent, RefAttributes } from 'react';
import { useStoreon } from 'storeon/react';

import { PopupProvider, popupConfig } from '../Popup';
import { component } from '../../engines';
import { cx } from '../../utils';

import type { NotificationsState, NotificationsEvents } from './NotificationsStore';
import { NotificationPortalProps, NotificationProps } from './Notification.types';
import { StyledItemWrapper, StyledRoot } from './Notification.styles';

// issue #823
const Popup = component(popupConfig);

/**
 * Обертка для визуального представления уведомлений.
 */
export const NotificationsPortal: FC<NotificationPortalProps> = ({ config, frame }) => {
    const { notifications } = useStoreon<NotificationsState, NotificationsEvents>('notifications');
    const Notification = component(config) as ForwardRefExoticComponent<
        NotificationProps & RefAttributes<HTMLDivElement>
    >;

    return (
        <PopupProvider>
            {notifications.length > 0 && (
                <Popup isOpen frame={frame} placement="bottom-right" zIndex="9100">
                    <StyledRoot>
                        {notifications.map(({ id, isHiding, ...rest }) => (
                            <StyledItemWrapper
                                key={id}
                                className={cx(isHiding ? 'hide' : 'show')}
                                isHiding={isHiding || false}
                            >
                                <Notification key={id} id={id} {...rest} />
                            </StyledItemWrapper>
                        ))}
                    </StyledRoot>
                </Popup>
            )}
        </PopupProvider>
    );
};
