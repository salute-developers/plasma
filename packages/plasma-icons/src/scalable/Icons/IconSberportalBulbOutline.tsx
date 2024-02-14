import React from 'react';

import { SberportalBulbOutline as Icon16 } from '../Icon.assets.16/SberportalBulbOutline';
import { SberportalBulbOutline as Icon24 } from '../Icon.assets.24/SberportalBulbOutline';
import { SberportalBulbOutline as Icon36 } from '../Icon.assets.36/SberportalBulbOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberportalBulbOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
