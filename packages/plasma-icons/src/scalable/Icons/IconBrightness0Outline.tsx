import React from 'react';

import { Brightness0Outline as Icon16 } from '../Icon.assets.16/Brightness0Outline';
import { Brightness0Outline as Icon24 } from '../Icon.assets.24/Brightness0Outline';
import { Brightness0Outline as Icon36 } from '../Icon.assets.36/Brightness0Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBrightness0Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
