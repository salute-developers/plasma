import React from 'react';

import { ChevronCircleLeftOutline as Icon16 } from '../Icon.assets.16/ChevronCircleLeftOutline';
import { ChevronCircleLeftOutline as Icon24 } from '../Icon.assets.24/ChevronCircleLeftOutline';
import { ChevronCircleLeftOutline as Icon36 } from '../Icon.assets.36/ChevronCircleLeftOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronCircleLeftOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
