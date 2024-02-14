import React from 'react';

import { StarLightOutline as Icon16 } from '../Icon.assets.16/StarLightOutline';
import { StarLightOutline as Icon24 } from '../Icon.assets.24/StarLightOutline';
import { StarLightOutline as Icon36 } from '../Icon.assets.36/StarLightOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarLightOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
