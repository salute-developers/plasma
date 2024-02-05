import React from 'react';

import { ChevronRight as Icon16 } from '../Icon.assets.16/ChevronRight';
import { ChevronRight as Icon24 } from '../Icon.assets.24/ChevronRight';
import { ChevronRight as Icon36 } from '../Icon.assets.36/ChevronRight';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronRight: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
