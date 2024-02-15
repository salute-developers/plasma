import React from 'react';

import { SizeMinimize as Icon16 } from '../Icon.assets.16/SizeMinimize';
import { SizeMinimize as Icon24 } from '../Icon.assets.24/SizeMinimize';
import { SizeMinimize as Icon36 } from '../Icon.assets.36/SizeMinimize';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSizeMinimize: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
