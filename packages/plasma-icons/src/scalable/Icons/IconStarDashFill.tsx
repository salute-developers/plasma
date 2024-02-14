import React from 'react';

import { StarDashFill as Icon16 } from '../Icon.assets.16/StarDashFill';
import { StarDashFill as Icon24 } from '../Icon.assets.24/StarDashFill';
import { StarDashFill as Icon36 } from '../Icon.assets.36/StarDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
