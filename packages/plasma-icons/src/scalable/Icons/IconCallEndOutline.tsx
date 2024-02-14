import React from 'react';

import { CallEndOutline as Icon16 } from '../Icon.assets.16/CallEndOutline';
import { CallEndOutline as Icon24 } from '../Icon.assets.24/CallEndOutline';
import { CallEndOutline as Icon36 } from '../Icon.assets.36/CallEndOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallEndOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
