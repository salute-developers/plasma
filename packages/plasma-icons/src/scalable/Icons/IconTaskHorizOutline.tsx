import React from 'react';

import { TaskHorizOutline as Icon16 } from '../Icon.assets.16/TaskHorizOutline';
import { TaskHorizOutline as Icon24 } from '../Icon.assets.24/TaskHorizOutline';
import { TaskHorizOutline as Icon36 } from '../Icon.assets.36/TaskHorizOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTaskHorizOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
