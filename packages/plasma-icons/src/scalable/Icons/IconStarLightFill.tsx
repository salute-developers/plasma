import React from 'react';

import { StarLightFill as Icon16 } from '../Icon.assets.16/StarLightFill';
import { StarLightFill as Icon24 } from '../Icon.assets.24/StarLightFill';
import { StarLightFill as Icon36 } from '../Icon.assets.36/StarLightFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarLightFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
