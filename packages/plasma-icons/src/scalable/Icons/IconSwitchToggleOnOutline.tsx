import React from 'react';

import { SwitchToggleOnOutline as Icon16 } from '../Icon.assets.16/SwitchToggleOnOutline';
import { SwitchToggleOnOutline as Icon24 } from '../Icon.assets.24/SwitchToggleOnOutline';
import { SwitchToggleOnOutline as Icon36 } from '../Icon.assets.36/SwitchToggleOnOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwitchToggleOnOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
