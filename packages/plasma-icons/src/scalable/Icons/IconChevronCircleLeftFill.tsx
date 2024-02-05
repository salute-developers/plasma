import React from 'react';

import { ChevronCircleLeftFill as Icon16 } from '../Icon.assets.16/ChevronCircleLeftFill';
import { ChevronCircleLeftFill as Icon24 } from '../Icon.assets.24/ChevronCircleLeftFill';
import { ChevronCircleLeftFill as Icon36 } from '../Icon.assets.36/ChevronCircleLeftFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronCircleLeftFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
