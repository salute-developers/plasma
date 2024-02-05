import React from 'react';

import { TvPlayOutline as Icon16 } from '../Icon.assets.16/TvPlayOutline';
import { TvPlayOutline as Icon24 } from '../Icon.assets.24/TvPlayOutline';
import { TvPlayOutline as Icon36 } from '../Icon.assets.36/TvPlayOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvPlayOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
