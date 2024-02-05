import React from 'react';

import { Plus as Icon16 } from '../Icon.assets.16/Plus';
import { Plus as Icon24 } from '../Icon.assets.24/Plus';
import { Plus as Icon36 } from '../Icon.assets.36/Plus';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlus: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
