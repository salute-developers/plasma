import React from 'react';

import { ArrowWideUpFill as Icon16 } from '../Icon.assets.16/ArrowWideUpFill';
import { ArrowWideUpFill as Icon24 } from '../Icon.assets.24/ArrowWideUpFill';
import { ArrowWideUpFill as Icon36 } from '../Icon.assets.36/ArrowWideUpFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideUpFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
