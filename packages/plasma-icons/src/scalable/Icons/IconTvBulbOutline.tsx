import React from 'react';

import { TvBulbOutline as Icon16 } from '../Icon.assets.16/TvBulbOutline';
import { TvBulbOutline as Icon24 } from '../Icon.assets.24/TvBulbOutline';
import { TvBulbOutline as Icon36 } from '../Icon.assets.36/TvBulbOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvBulbOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
