import React from 'react';

import { PreviousOutline as Icon16 } from '../Icon.assets.16/PreviousOutline';
import { PreviousOutline as Icon24 } from '../Icon.assets.24/PreviousOutline';
import { PreviousOutline as Icon36 } from '../Icon.assets.36/PreviousOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPreviousOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
