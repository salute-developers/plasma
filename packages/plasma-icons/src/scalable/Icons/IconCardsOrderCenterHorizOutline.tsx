import React from 'react';

import { CardsOrderCenterHorizOutline as Icon16 } from '../Icon.assets.16/CardsOrderCenterHorizOutline';
import { CardsOrderCenterHorizOutline as Icon24 } from '../Icon.assets.24/CardsOrderCenterHorizOutline';
import { CardsOrderCenterHorizOutline as Icon36 } from '../Icon.assets.36/CardsOrderCenterHorizOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardsOrderCenterHorizOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
