import React from 'react';

import { ChevronDown as Icon16 } from '../Icon.assets.16/ChevronDown';
import { ChevronDown as Icon24 } from '../Icon.assets.24/ChevronDown';
import { ChevronDown as Icon36 } from '../Icon.assets.36/ChevronDown';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronDown: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
