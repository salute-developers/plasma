import React from 'react';

import { Contrast1Outline as Icon16 } from '../Icon.assets.16/Contrast1Outline';
import { Contrast1Outline as Icon24 } from '../Icon.assets.24/Contrast1Outline';
import { Contrast1Outline as Icon36 } from '../Icon.assets.36/Contrast1Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconContrast1Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
