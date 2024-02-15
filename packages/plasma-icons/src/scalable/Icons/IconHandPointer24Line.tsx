import React from 'react';

import { HandPointer24Line as Icon16 } from '../Icon.assets.16/HandPointer24Line';
import { HandPointer24Line as Icon24 } from '../Icon.assets.24/HandPointer24Line';
import { HandPointer24Line as Icon36 } from '../Icon.assets.36/HandPointer24Line';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHandPointer24Line: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
