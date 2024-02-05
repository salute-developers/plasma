import React from 'react';

import { ListView as Icon16 } from '../Icon.assets.16/ListView';
import { ListView as Icon24 } from '../Icon.assets.24/ListView';
import { ListView as Icon36 } from '../Icon.assets.36/ListView';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconListView: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
