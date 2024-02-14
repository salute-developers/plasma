import React from 'react';

import { CashFill as Icon16 } from '../Icon.assets.16/CashFill';
import { CashFill as Icon24 } from '../Icon.assets.24/CashFill';
import { CashFill as Icon36 } from '../Icon.assets.36/CashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
