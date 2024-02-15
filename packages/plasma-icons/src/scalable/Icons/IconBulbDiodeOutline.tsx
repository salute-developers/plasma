import React from 'react';

import { BulbDiodeOutline as Icon16 } from '../Icon.assets.16/BulbDiodeOutline';
import { BulbDiodeOutline as Icon24 } from '../Icon.assets.24/BulbDiodeOutline';
import { BulbDiodeOutline as Icon36 } from '../Icon.assets.36/BulbDiodeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBulbDiodeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
