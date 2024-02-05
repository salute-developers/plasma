import React from 'react';

import { CardsOrderCenterVertOutline as Icon16 } from '../Icon.assets.16/CardsOrderCenterVertOutline';
import { CardsOrderCenterVertOutline as Icon24 } from '../Icon.assets.24/CardsOrderCenterVertOutline';
import { CardsOrderCenterVertOutline as Icon36 } from '../Icon.assets.36/CardsOrderCenterVertOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardsOrderCenterVertOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
