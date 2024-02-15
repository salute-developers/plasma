import React from 'react';

import { SwitchSettingsFill as Icon16 } from '../Icon.assets.16/SwitchSettingsFill';
import { SwitchSettingsFill as Icon24 } from '../Icon.assets.24/SwitchSettingsFill';
import { SwitchSettingsFill as Icon36 } from '../Icon.assets.36/SwitchSettingsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwitchSettingsFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
