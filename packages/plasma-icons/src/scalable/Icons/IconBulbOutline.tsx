import React from 'react';

import { BulbOutline as Icon16 } from '../Icon.assets.16/BulbOutline';
import { BulbOutline as Icon24 } from '../Icon.assets.24/BulbOutline';
import { BulbOutline as Icon36 } from '../Icon.assets.36/BulbOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBulbOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
