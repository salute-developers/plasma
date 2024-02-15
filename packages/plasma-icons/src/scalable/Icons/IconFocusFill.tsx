import React from 'react';

import { FocusFill as Icon16 } from '../Icon.assets.16/FocusFill';
import { FocusFill as Icon24 } from '../Icon.assets.24/FocusFill';
import { FocusFill as Icon36 } from '../Icon.assets.36/FocusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFocusFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
