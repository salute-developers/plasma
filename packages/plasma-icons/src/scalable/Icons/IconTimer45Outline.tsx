import React from 'react';

import { Timer45Outline as Icon16 } from '../Icon.assets.16/Timer45Outline';
import { Timer45Outline as Icon24 } from '../Icon.assets.24/Timer45Outline';
import { Timer45Outline as Icon36 } from '../Icon.assets.36/Timer45Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimer45Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
