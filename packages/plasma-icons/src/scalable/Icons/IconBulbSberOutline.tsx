import React from 'react';

import { BulbSberOutline as Icon16 } from '../Icon.assets.16/BulbSberOutline';
import { BulbSberOutline as Icon24 } from '../Icon.assets.24/BulbSberOutline';
import { BulbSberOutline as Icon36 } from '../Icon.assets.36/BulbSberOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBulbSberOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
