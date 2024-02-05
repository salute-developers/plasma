import React from 'react';

import { MarkerOutline as Icon16 } from '../Icon.assets.16/MarkerOutline';
import { MarkerOutline as Icon24 } from '../Icon.assets.24/MarkerOutline';
import { MarkerOutline as Icon36 } from '../Icon.assets.36/MarkerOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMarkerOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
