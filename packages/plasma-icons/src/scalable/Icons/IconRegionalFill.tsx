import React from 'react';

import { RegionalFill as Icon16 } from '../Icon.assets.16/RegionalFill';
import { RegionalFill as Icon24 } from '../Icon.assets.24/RegionalFill';
import { RegionalFill as Icon36 } from '../Icon.assets.36/RegionalFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRegionalFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
