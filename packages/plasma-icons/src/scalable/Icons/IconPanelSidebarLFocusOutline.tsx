import React from 'react';

import { PanelSidebarLFocusOutline as Icon16 } from '../Icon.assets.16/PanelSidebarLFocusOutline';
import { PanelSidebarLFocusOutline as Icon24 } from '../Icon.assets.24/PanelSidebarLFocusOutline';
import { PanelSidebarLFocusOutline as Icon36 } from '../Icon.assets.36/PanelSidebarLFocusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarLFocusOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
