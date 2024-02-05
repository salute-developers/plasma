import React from 'react';

import { GlassesOutline as Icon16 } from '../Icon.assets.16/GlassesOutline';
import { GlassesOutline as Icon24 } from '../Icon.assets.24/GlassesOutline';
import { GlassesOutline as Icon36 } from '../Icon.assets.36/GlassesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGlassesOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
