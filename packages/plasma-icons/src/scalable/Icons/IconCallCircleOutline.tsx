import React from 'react';

import { CallCircleOutline as Icon16 } from '../Icon.assets.16/CallCircleOutline';
import { CallCircleOutline as Icon24 } from '../Icon.assets.24/CallCircleOutline';
import { CallCircleOutline as Icon36 } from '../Icon.assets.36/CallCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
