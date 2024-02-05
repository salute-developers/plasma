import React from 'react';

import { PanelSidebarRFocusFill as Icon16 } from '../Icon.assets.16/PanelSidebarRFocusFill';
import { PanelSidebarRFocusFill as Icon24 } from '../Icon.assets.24/PanelSidebarRFocusFill';
import { PanelSidebarRFocusFill as Icon36 } from '../Icon.assets.36/PanelSidebarRFocusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarRFocusFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
