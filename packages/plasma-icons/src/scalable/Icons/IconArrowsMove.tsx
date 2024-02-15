import React from 'react';

import { ArrowsMove as Icon16 } from '../Icon.assets.16/ArrowsMove';
import { ArrowsMove as Icon24 } from '../Icon.assets.24/ArrowsMove';
import { ArrowsMove as Icon36 } from '../Icon.assets.36/ArrowsMove';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowsMove: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
