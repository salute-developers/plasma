import React from 'react';

import { CallCircleEndOutline as Icon16 } from '../Icon.assets.16/CallCircleEndOutline';
import { CallCircleEndOutline as Icon24 } from '../Icon.assets.24/CallCircleEndOutline';
import { CallCircleEndOutline as Icon36 } from '../Icon.assets.36/CallCircleEndOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallCircleEndOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
