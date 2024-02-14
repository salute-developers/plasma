import React from 'react';

import { ViewPersonPanelROutline as Icon16 } from '../Icon.assets.16/ViewPersonPanelROutline';
import { ViewPersonPanelROutline as Icon24 } from '../Icon.assets.24/ViewPersonPanelROutline';
import { ViewPersonPanelROutline as Icon36 } from '../Icon.assets.36/ViewPersonPanelROutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewPersonPanelROutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
