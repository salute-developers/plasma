import React from 'react';

import { Hand24Line as Icon16 } from '../Icon.assets.16/Hand24Line';
import { Hand24Line as Icon24 } from '../Icon.assets.24/Hand24Line';
import { Hand24Line as Icon36 } from '../Icon.assets.36/Hand24Line';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHand24Line: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
