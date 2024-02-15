import React from 'react';

import { TravelCarFill as Icon16 } from '../Icon.assets.16/TravelCarFill';
import { TravelCarFill as Icon24 } from '../Icon.assets.24/TravelCarFill';
import { TravelCarFill as Icon36 } from '../Icon.assets.36/TravelCarFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTravelCarFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
