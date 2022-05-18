import React from 'react';
import { detectDevice } from '@salutejs/plasma-ui';

import { AnyObject } from '../../types';

export interface DeviceComponentProps<Props extends AnyObject = AnyObject, R = unknown> {
    sberbox: React.ComponentType<Props>;
    sberportal: React.ComponentType<Props>;
    mobile: React.ComponentType<Props>;
    props: Props;
    innerRef?: React.Ref<R>;
}

export function DeviceComponent<Props extends AnyObject = AnyObject, R = unknown>({
    sberbox: SberBoxComponent,
    sberportal: SberPortalComponent,
    mobile: MobileComponent,
    props,
    innerRef,
}: DeviceComponentProps<Props, R>) {
    switch (detectDevice()) {
        case 'sberBox':
            return <SberBoxComponent {...props} ref={innerRef} />;
        case 'sberPortal':
            return <SberPortalComponent {...props} ref={innerRef} />;
        default:
            return <MobileComponent {...props} ref={innerRef} />;
    }
}
