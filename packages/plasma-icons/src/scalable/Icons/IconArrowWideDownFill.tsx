import React from 'react';

import { ArrowWideDownFill as Icon16 } from '../Icon.assets.16/ArrowWideDownFill';
import { ArrowWideDownFill as Icon24 } from '../Icon.assets.24/ArrowWideDownFill';
import { ArrowWideDownFill as Icon36 } from '../Icon.assets.36/ArrowWideDownFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideDownFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
