import React from 'react';

import { CashOutline as Icon16 } from '../Icon.assets.16/CashOutline';
import { CashOutline as Icon24 } from '../Icon.assets.24/CashOutline';
import { CashOutline as Icon36 } from '../Icon.assets.36/CashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
