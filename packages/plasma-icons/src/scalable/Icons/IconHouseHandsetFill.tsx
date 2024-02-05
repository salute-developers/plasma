import React from 'react';

import { HouseHandsetFill as Icon16 } from '../Icon.assets.16/HouseHandsetFill';
import { HouseHandsetFill as Icon24 } from '../Icon.assets.24/HouseHandsetFill';
import { HouseHandsetFill as Icon36 } from '../Icon.assets.36/HouseHandsetFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHouseHandsetFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
