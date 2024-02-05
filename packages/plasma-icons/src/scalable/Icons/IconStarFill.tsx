import React from 'react';

import { StarFill as Icon16 } from '../Icon.assets.16/StarFill';
import { StarFill as Icon24 } from '../Icon.assets.24/StarFill';
import { StarFill as Icon36 } from '../Icon.assets.36/StarFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
