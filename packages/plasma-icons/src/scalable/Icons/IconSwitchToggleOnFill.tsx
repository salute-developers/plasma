import React from 'react';

import { SwitchToggleOnFill as Icon16 } from '../Icon.assets.16/SwitchToggleOnFill';
import { SwitchToggleOnFill as Icon24 } from '../Icon.assets.24/SwitchToggleOnFill';
import { SwitchToggleOnFill as Icon36 } from '../Icon.assets.36/SwitchToggleOnFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwitchToggleOnFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
