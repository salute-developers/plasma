import React from 'react';

import { KeyboardOutline as Icon16 } from '../Icon.assets.16/KeyboardOutline';
import { KeyboardOutline as Icon24 } from '../Icon.assets.24/KeyboardOutline';
import { KeyboardOutline as Icon36 } from '../Icon.assets.36/KeyboardOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconKeyboardOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
