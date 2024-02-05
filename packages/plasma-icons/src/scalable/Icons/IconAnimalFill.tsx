import React from 'react';

import { AnimalFill as Icon16 } from '../Icon.assets.16/AnimalFill';
import { AnimalFill as Icon24 } from '../Icon.assets.24/AnimalFill';
import { AnimalFill as Icon36 } from '../Icon.assets.36/AnimalFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAnimalFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
