import React from 'react';

import { DoneCircleOutline as Icon16 } from '../Icon.assets.16/DoneCircleOutline';
import { DoneCircleOutline as Icon24 } from '../Icon.assets.24/DoneCircleOutline';
import { DoneCircleOutline as Icon36 } from '../Icon.assets.36/DoneCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoneCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
