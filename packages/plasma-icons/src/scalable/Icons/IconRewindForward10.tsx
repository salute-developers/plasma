import React from 'react';

import { RewindForward10 as Icon16 } from '../Icon.assets.16/RewindForward10';
import { RewindForward10 as Icon24 } from '../Icon.assets.24/RewindForward10';
import { RewindForward10 as Icon36 } from '../Icon.assets.36/RewindForward10';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRewindForward10: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
