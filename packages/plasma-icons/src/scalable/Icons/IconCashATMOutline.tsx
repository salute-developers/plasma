import React from 'react';

import { CashATMOutline as Icon16 } from '../Icon.assets.16/CashATMOutline';
import { CashATMOutline as Icon24 } from '../Icon.assets.24/CashATMOutline';
import { CashATMOutline as Icon36 } from '../Icon.assets.36/CashATMOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCashATMOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
