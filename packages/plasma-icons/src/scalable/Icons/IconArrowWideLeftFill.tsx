import React from 'react';

import { ArrowWideLeftFill as Icon16 } from '../Icon.assets.16/ArrowWideLeftFill';
import { ArrowWideLeftFill as Icon24 } from '../Icon.assets.24/ArrowWideLeftFill';
import { ArrowWideLeftFill as Icon36 } from '../Icon.assets.36/ArrowWideLeftFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideLeftFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
