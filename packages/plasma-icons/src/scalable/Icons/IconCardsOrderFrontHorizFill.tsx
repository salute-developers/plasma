import React from 'react';

import { CardsOrderFrontHorizFill as Icon16 } from '../Icon.assets.16/CardsOrderFrontHorizFill';
import { CardsOrderFrontHorizFill as Icon24 } from '../Icon.assets.24/CardsOrderFrontHorizFill';
import { CardsOrderFrontHorizFill as Icon36 } from '../Icon.assets.36/CardsOrderFrontHorizFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardsOrderFrontHorizFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
