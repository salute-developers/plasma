import React from 'react';

import { ProfileSquareOutline as Icon16 } from '../Icon.assets.16/ProfileSquareOutline';
import { ProfileSquareOutline as Icon24 } from '../Icon.assets.24/ProfileSquareOutline';
import { ProfileSquareOutline as Icon36 } from '../Icon.assets.36/ProfileSquareOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileSquareOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
