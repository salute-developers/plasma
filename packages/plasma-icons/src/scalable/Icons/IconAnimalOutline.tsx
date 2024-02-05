import React from 'react';

import { AnimalOutline as Icon16 } from '../Icon.assets.16/AnimalOutline';
import { AnimalOutline as Icon24 } from '../Icon.assets.24/AnimalOutline';
import { AnimalOutline as Icon36 } from '../Icon.assets.36/AnimalOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAnimalOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
