import React from 'react';

import { PanelSidebarLFill as Icon16 } from '../Icon.assets.16/PanelSidebarLFill';
import { PanelSidebarLFill as Icon24 } from '../Icon.assets.24/PanelSidebarLFill';
import { PanelSidebarLFill as Icon36 } from '../Icon.assets.36/PanelSidebarLFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarLFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
