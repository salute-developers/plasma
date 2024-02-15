import React from 'react';

import { SwitchToggleOffFill as Icon16 } from '../Icon.assets.16/SwitchToggleOffFill';
import { SwitchToggleOffFill as Icon24 } from '../Icon.assets.24/SwitchToggleOffFill';
import { SwitchToggleOffFill as Icon36 } from '../Icon.assets.36/SwitchToggleOffFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwitchToggleOffFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
