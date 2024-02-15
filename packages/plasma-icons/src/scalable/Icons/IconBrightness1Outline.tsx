import React from 'react';

import { Brightness1Outline as Icon16 } from '../Icon.assets.16/Brightness1Outline';
import { Brightness1Outline as Icon24 } from '../Icon.assets.24/Brightness1Outline';
import { Brightness1Outline as Icon36 } from '../Icon.assets.36/Brightness1Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBrightness1Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
