import React from 'react';

import { SwitchToggleOffOutline as Icon16 } from '../Icon.assets.16/SwitchToggleOffOutline';
import { SwitchToggleOffOutline as Icon24 } from '../Icon.assets.24/SwitchToggleOffOutline';
import { SwitchToggleOffOutline as Icon36 } from '../Icon.assets.36/SwitchToggleOffOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwitchToggleOffOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
