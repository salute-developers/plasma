import React from 'react';

import { KeyboardFill as Icon16 } from '../Icon.assets.16/KeyboardFill';
import { KeyboardFill as Icon24 } from '../Icon.assets.24/KeyboardFill';
import { KeyboardFill as Icon36 } from '../Icon.assets.36/KeyboardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconKeyboardFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
