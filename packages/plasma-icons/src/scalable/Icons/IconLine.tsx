import React from 'react';

import { Line as Icon16 } from '../Icon.assets.16/Line';
import { Line as Icon24 } from '../Icon.assets.24/Line';
import { Line as Icon36 } from '../Icon.assets.36/Line';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLine: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
