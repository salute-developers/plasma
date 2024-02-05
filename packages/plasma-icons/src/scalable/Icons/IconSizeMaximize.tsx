import React from 'react';

import { SizeMaximize as Icon16 } from '../Icon.assets.16/SizeMaximize';
import { SizeMaximize as Icon24 } from '../Icon.assets.24/SizeMaximize';
import { SizeMaximize as Icon36 } from '../Icon.assets.36/SizeMaximize';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSizeMaximize: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
