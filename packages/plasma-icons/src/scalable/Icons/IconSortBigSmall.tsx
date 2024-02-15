import React from 'react';

import { SortBigSmall as Icon16 } from '../Icon.assets.16/SortBigSmall';
import { SortBigSmall as Icon24 } from '../Icon.assets.24/SortBigSmall';
import { SortBigSmall as Icon36 } from '../Icon.assets.36/SortBigSmall';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSortBigSmall: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
