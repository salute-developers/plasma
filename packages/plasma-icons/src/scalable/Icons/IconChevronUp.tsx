import React from 'react';

import { ChevronUp as Icon16 } from '../Icon.assets.16/ChevronUp';
import { ChevronUp as Icon24 } from '../Icon.assets.24/ChevronUp';
import { ChevronUp as Icon36 } from '../Icon.assets.36/ChevronUp';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronUp: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
