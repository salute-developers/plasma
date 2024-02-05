import React from 'react';

import { ChevronCircleDownFill as Icon16 } from '../Icon.assets.16/ChevronCircleDownFill';
import { ChevronCircleDownFill as Icon24 } from '../Icon.assets.24/ChevronCircleDownFill';
import { ChevronCircleDownFill as Icon36 } from '../Icon.assets.36/ChevronCircleDownFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronCircleDownFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
