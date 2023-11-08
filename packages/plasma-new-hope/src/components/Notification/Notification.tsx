import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';

import { classes } from './Notification.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as statusCSS } from './variations/_status/base';
import { NotificationProps } from './Notification.types';
import { StyledContent, StyledTitle, StyledNotification } from './Notification.styles';

/**
 * Компонент для небольших уведомлений пользователя
 */
export const notificationRoot = (Root: RootProps<HTMLDivElement, NotificationProps>) =>
    forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
        const { role = 'status', status, title, children: content, view, ...rest } = props;

        let ariaLive: 'assertive' | 'polite' = 'polite';
        let ariaAtomic = false;

        if (role === 'alert') {
            ariaLive = 'assertive';
        } else if (role === 'status') {
            ariaAtomic = true;
        }

        return (
            <Root
                status={status}
                view={view}
                ref={ref}
                role={role}
                aria-live={ariaLive}
                aria-atomic={ariaAtomic}
                {...rest}
            >
                <StyledTitle className={classes.title}>{title}</StyledTitle>
                <StyledContent>{content}</StyledContent>
            </Root>
        );
    });

export const noticationConfig = {
    name: 'Notification',
    tag: 'div',
    layout: notificationRoot,
    base: StyledNotification,
    variations: {
        status: {
            css: statusCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
