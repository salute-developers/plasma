import React from 'react';

import { TvSaluteOutline as Icon16 } from '../Icon.assets.16/TvSaluteOutline';
import { TvSaluteOutline as Icon24 } from '../Icon.assets.24/TvSaluteOutline';
import { TvSaluteOutline as Icon36 } from '../Icon.assets.36/TvSaluteOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvSaluteOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
