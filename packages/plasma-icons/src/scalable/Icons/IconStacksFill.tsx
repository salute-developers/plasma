import React from 'react';

import { StacksFill as Icon16 } from '../Icon.assets.16/StacksFill';
import { StacksFill as Icon24 } from '../Icon.assets.24/StacksFill';
import { StacksFill as Icon36 } from '../Icon.assets.36/StacksFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStacksFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
