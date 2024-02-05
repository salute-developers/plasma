import React from 'react';

import { Hand as Icon16 } from '../Icon.assets.16/Hand';
import { Hand as Icon24 } from '../Icon.assets.24/Hand';
import { Hand as Icon36 } from '../Icon.assets.36/Hand';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHand: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
