import React from 'react';

import { TvOutline as Icon16 } from '../Icon.assets.16/TvOutline';
import { TvOutline as Icon24 } from '../Icon.assets.24/TvOutline';
import { TvOutline as Icon36 } from '../Icon.assets.36/TvOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
