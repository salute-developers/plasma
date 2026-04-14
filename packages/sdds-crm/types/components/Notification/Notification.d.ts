import {
    NotificationProps as NotificationPropsNewHope,
    NotificationPlacement,
} from '@salutejs/plasma-new-hope/styled-components';

import React, { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

export type { NotificationPlacement };
export declare const NotificationNewHope: React.FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            info: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        layout: {
            horizontal: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            vertical: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        closeIconType: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xxs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        NotificationPropsNewHope &
        React.RefAttributes<HTMLDivElement>
>;
type ConfigProps = 'size' | 'view' | 'layout' | 'closeIconType';
type NotificationProps = Pick<ComponentProps<typeof NotificationNewHope>, ConfigProps> &
    Omit<NotificationPropsNewHope, ConfigProps>;
export declare const Notification: ForwardRefExoticComponent<NotificationProps>;
export declare const NotificationsProvider: React.FC<{
    children: ReactNode;
    frame?: string;
    placement?: NotificationPlacement;
    UNSAFE_SSR_ENABLED?: boolean;
}>;
