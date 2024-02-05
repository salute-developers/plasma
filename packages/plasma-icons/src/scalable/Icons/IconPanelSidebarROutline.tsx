import React from 'react';

import { PanelSidebarROutline as Icon16 } from '../Icon.assets.16/PanelSidebarROutline';
import { PanelSidebarROutline as Icon24 } from '../Icon.assets.24/PanelSidebarROutline';
import { PanelSidebarROutline as Icon36 } from '../Icon.assets.36/PanelSidebarROutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarROutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
