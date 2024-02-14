import React from 'react';

import { CardsOrderFrontHorizOutline as Icon16 } from '../Icon.assets.16/CardsOrderFrontHorizOutline';
import { CardsOrderFrontHorizOutline as Icon24 } from '../Icon.assets.24/CardsOrderFrontHorizOutline';
import { CardsOrderFrontHorizOutline as Icon36 } from '../Icon.assets.36/CardsOrderFrontHorizOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardsOrderFrontHorizOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
