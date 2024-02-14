import React from 'react';

import { CashATMFill as Icon16 } from '../Icon.assets.16/CashATMFill';
import { CashATMFill as Icon24 } from '../Icon.assets.24/CashATMFill';
import { CashATMFill as Icon36 } from '../Icon.assets.36/CashATMFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCashATMFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
