import React from 'react';

import { ArrowWideRightFill as Icon16 } from '../Icon.assets.16/ArrowWideRightFill';
import { ArrowWideRightFill as Icon24 } from '../Icon.assets.24/ArrowWideRightFill';
import { ArrowWideRightFill as Icon36 } from '../Icon.assets.36/ArrowWideRightFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideRightFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
