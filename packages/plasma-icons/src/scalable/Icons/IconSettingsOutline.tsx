import React from 'react';

import { SettingsOutline as Icon16 } from '../Icon.assets.16/SettingsOutline';
import { SettingsOutline as Icon24 } from '../Icon.assets.24/SettingsOutline';
import { SettingsOutline as Icon36 } from '../Icon.assets.36/SettingsOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSettingsOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
