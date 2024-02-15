import React from 'react';

import { ArrowBarDown as Icon16 } from '../Icon.assets.16/ArrowBarDown';
import { ArrowBarDown as Icon24 } from '../Icon.assets.24/ArrowBarDown';
import { ArrowBarDown as Icon36 } from '../Icon.assets.36/ArrowBarDown';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowBarDown: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
