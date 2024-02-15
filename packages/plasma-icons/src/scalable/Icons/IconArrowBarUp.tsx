import React from 'react';

import { ArrowBarUp as Icon16 } from '../Icon.assets.16/ArrowBarUp';
import { ArrowBarUp as Icon24 } from '../Icon.assets.24/ArrowBarUp';
import { ArrowBarUp as Icon36 } from '../Icon.assets.36/ArrowBarUp';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowBarUp: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
