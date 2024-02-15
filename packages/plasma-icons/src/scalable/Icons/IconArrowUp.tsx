import React from 'react';

import { ArrowUp as Icon16 } from '../Icon.assets.16/ArrowUp';
import { ArrowUp as Icon24 } from '../Icon.assets.24/ArrowUp';
import { ArrowUp as Icon36 } from '../Icon.assets.36/ArrowUp';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowUp: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
