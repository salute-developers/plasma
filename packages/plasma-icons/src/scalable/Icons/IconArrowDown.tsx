import React from 'react';

import { ArrowDown as Icon16 } from '../Icon.assets.16/ArrowDown';
import { ArrowDown as Icon24 } from '../Icon.assets.24/ArrowDown';
import { ArrowDown as Icon36 } from '../Icon.assets.36/ArrowDown';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowDown: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
