import React from 'react';

import { ChevronLeft as Icon16 } from '../Icon.assets.16/ChevronLeft';
import { ChevronLeft as Icon24 } from '../Icon.assets.24/ChevronLeft';
import { ChevronLeft as Icon36 } from '../Icon.assets.36/ChevronLeft';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronLeft: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
