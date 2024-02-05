import React from 'react';

import { HouseHandsetOutline as Icon16 } from '../Icon.assets.16/HouseHandsetOutline';
import { HouseHandsetOutline as Icon24 } from '../Icon.assets.24/HouseHandsetOutline';
import { HouseHandsetOutline as Icon36 } from '../Icon.assets.36/HouseHandsetOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHouseHandsetOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
