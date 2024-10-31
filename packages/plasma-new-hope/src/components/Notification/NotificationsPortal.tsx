import React, { FC, ForwardRefExoticComponent, RefAttributes, useMemo } from 'react';
import { useStoreon } from 'storeon/react';
import { styled } from '@linaria/react';
import { popupBaseRootClass } from '@salutejs/plasma-core';

import { PopupProvider, popupConfig } from '../Popup';
import { component } from '../../engines';
import { cx } from '../../utils';

import { NotificationsState, NotificationsEvents, closeNotification } from './NotificationsStore';
import { NotificationPortalProps, NotificationProps } from './Notification.types';
import { StyledItemWrapper, StyledRoot } from './Notification.styles';
import { classes } from './Notification.tokens';

// issue #823
const Popup = component(popupConfig);

const StyledPopup = styled(Popup)`
    & > .${popupBaseRootClass} {
        overflow: hidden;
    }
`;

/**
 * Обертка для визуального представления уведомлений.
 */
export const NotificationsPortal: FC<NotificationPortalProps> = ({ config, frame, placement = 'bottom-right' }) => {
    const { notifications } = useStoreon<NotificationsState, NotificationsEvents>('notifications');

    const Notification = useMemo(
        () => component(config) as ForwardRefExoticComponent<NotificationProps & RefAttributes<HTMLDivElement>>,
        [],
    );

    return (
        <PopupProvider>
            {notifications.length > 0 && (
                <StyledPopup opened frame={frame} placement={placement} zIndex="9100">
                    <StyledRoot placement={placement}>
                        {notifications.map(({ id, isHidden, ...rest }) => (
                            <StyledItemWrapper
                                key={id}
                                className={cx(
                                    isHidden ? classes.notificationItemHidden : classes.notificationItemOpened,
                                    placement === 'bottom-left' && classes.notificationLeftToRightAnimation,
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
                </StyledPopup>
            )}
        </PopupProvider>
    );
};
