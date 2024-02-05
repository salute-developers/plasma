import React from 'react';

import { ViewScreen4Outline as Icon16 } from '../Icon.assets.16/ViewScreen4Outline';
import { ViewScreen4Outline as Icon24 } from '../Icon.assets.24/ViewScreen4Outline';
import { ViewScreen4Outline as Icon36 } from '../Icon.assets.36/ViewScreen4Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewScreen4Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
