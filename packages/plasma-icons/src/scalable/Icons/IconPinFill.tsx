import React from 'react';

import { PinFill as Icon16 } from '../Icon.assets.16/PinFill';
import { PinFill as Icon24 } from '../Icon.assets.24/PinFill';
import { PinFill as Icon36 } from '../Icon.assets.36/PinFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPinFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
