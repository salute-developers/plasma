import React from 'react';

import { ChevronCircleDownOutline as Icon16 } from '../Icon.assets.16/ChevronCircleDownOutline';
import { ChevronCircleDownOutline as Icon24 } from '../Icon.assets.24/ChevronCircleDownOutline';
import { ChevronCircleDownOutline as Icon36 } from '../Icon.assets.36/ChevronCircleDownOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronCircleDownOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
