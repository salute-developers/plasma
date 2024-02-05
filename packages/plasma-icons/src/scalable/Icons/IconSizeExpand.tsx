import React from 'react';

import { SizeExpand as Icon16 } from '../Icon.assets.16/SizeExpand';
import { SizeExpand as Icon24 } from '../Icon.assets.24/SizeExpand';
import { SizeExpand as Icon36 } from '../Icon.assets.36/SizeExpand';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSizeExpand: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
