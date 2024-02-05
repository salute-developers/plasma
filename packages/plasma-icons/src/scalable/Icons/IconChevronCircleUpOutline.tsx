import React from 'react';

import { ChevronCircleUpOutline as Icon16 } from '../Icon.assets.16/ChevronCircleUpOutline';
import { ChevronCircleUpOutline as Icon24 } from '../Icon.assets.24/ChevronCircleUpOutline';
import { ChevronCircleUpOutline as Icon36 } from '../Icon.assets.36/ChevronCircleUpOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronCircleUpOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
