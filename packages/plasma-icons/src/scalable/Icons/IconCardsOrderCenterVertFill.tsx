import React from 'react';

import { CardsOrderCenterVertFill as Icon16 } from '../Icon.assets.16/CardsOrderCenterVertFill';
import { CardsOrderCenterVertFill as Icon24 } from '../Icon.assets.24/CardsOrderCenterVertFill';
import { CardsOrderCenterVertFill as Icon36 } from '../Icon.assets.36/CardsOrderCenterVertFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardsOrderCenterVertFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
