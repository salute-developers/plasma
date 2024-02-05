import React from 'react';

import { PanelSidebarLOutline as Icon16 } from '../Icon.assets.16/PanelSidebarLOutline';
import { PanelSidebarLOutline as Icon24 } from '../Icon.assets.24/PanelSidebarLOutline';
import { PanelSidebarLOutline as Icon36 } from '../Icon.assets.36/PanelSidebarLOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarLOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
