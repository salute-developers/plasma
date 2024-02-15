import React from 'react';

import { EarOutline as Icon16 } from '../Icon.assets.16/EarOutline';
import { EarOutline as Icon24 } from '../Icon.assets.24/EarOutline';
import { EarOutline as Icon36 } from '../Icon.assets.36/EarOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEarOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
