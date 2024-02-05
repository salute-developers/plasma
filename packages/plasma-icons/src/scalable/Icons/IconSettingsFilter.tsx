import React from 'react';

import { SettingsFilter as Icon16 } from '../Icon.assets.16/SettingsFilter';
import { SettingsFilter as Icon24 } from '../Icon.assets.24/SettingsFilter';
import { SettingsFilter as Icon36 } from '../Icon.assets.36/SettingsFilter';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSettingsFilter: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
