import React from 'react';

import { MessagePersonOutline as Icon16 } from '../Icon.assets.16/MessagePersonOutline';
import { MessagePersonOutline as Icon24 } from '../Icon.assets.24/MessagePersonOutline';
import { MessagePersonOutline as Icon36 } from '../Icon.assets.36/MessagePersonOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessagePersonOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
