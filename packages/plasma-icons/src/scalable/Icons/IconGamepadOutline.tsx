import React from 'react';

import { GamepadOutline as Icon16 } from '../Icon.assets.16/GamepadOutline';
import { GamepadOutline as Icon24 } from '../Icon.assets.24/GamepadOutline';
import { GamepadOutline as Icon36 } from '../Icon.assets.36/GamepadOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGamepadOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
