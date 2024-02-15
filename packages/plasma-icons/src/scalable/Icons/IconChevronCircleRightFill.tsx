import React from 'react';

import { ChevronCircleRightFill as Icon16 } from '../Icon.assets.16/ChevronCircleRightFill';
import { ChevronCircleRightFill as Icon24 } from '../Icon.assets.24/ChevronCircleRightFill';
import { ChevronCircleRightFill as Icon36 } from '../Icon.assets.36/ChevronCircleRightFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChevronCircleRightFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
