import React from 'react';

import { ChevronCircleRightOutline as Icon16 } from '../Icon.assets.16/ChevronCircleRightOutline';
import { ChevronCircleRightOutline as Icon24 } from '../Icon.assets.24/ChevronCircleRightOutline';
import { ChevronCircleRightOutline as Icon36 } from '../Icon.assets.36/ChevronCircleRightOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronCircleRightOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
