import React from 'react';

import { GlassOutline as Icon16 } from '../Icon.assets.16/GlassOutline';
import { GlassOutline as Icon24 } from '../Icon.assets.24/GlassOutline';
import { GlassOutline as Icon36 } from '../Icon.assets.36/GlassOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGlassOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
