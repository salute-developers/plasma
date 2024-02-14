import React from 'react';

import { ViewPersonPanelLOutline as Icon16 } from '../Icon.assets.16/ViewPersonPanelLOutline';
import { ViewPersonPanelLOutline as Icon24 } from '../Icon.assets.24/ViewPersonPanelLOutline';
import { ViewPersonPanelLOutline as Icon36 } from '../Icon.assets.36/ViewPersonPanelLOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewPersonPanelLOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
