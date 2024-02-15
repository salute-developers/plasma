import React from 'react';

import { MaskFill as Icon16 } from '../Icon.assets.16/MaskFill';
import { MaskFill as Icon24 } from '../Icon.assets.24/MaskFill';
import { MaskFill as Icon36 } from '../Icon.assets.36/MaskFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMaskFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
