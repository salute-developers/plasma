import React from 'react';

import { FilterFunnelFill as Icon16 } from '../Icon.assets.16/FilterFunnelFill';
import { FilterFunnelFill as Icon24 } from '../Icon.assets.24/FilterFunnelFill';
import { FilterFunnelFill as Icon36 } from '../Icon.assets.36/FilterFunnelFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFilterFunnelFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
