import React from 'react';

import { CardsOrderFrontVertFill as Icon16 } from '../Icon.assets.16/CardsOrderFrontVertFill';
import { CardsOrderFrontVertFill as Icon24 } from '../Icon.assets.24/CardsOrderFrontVertFill';
import { CardsOrderFrontVertFill as Icon36 } from '../Icon.assets.36/CardsOrderFrontVertFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardsOrderFrontVertFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
