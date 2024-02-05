import React from 'react';

import { ViewSplit4Fill as Icon16 } from '../Icon.assets.16/ViewSplit4Fill';
import { ViewSplit4Fill as Icon24 } from '../Icon.assets.24/ViewSplit4Fill';
import { ViewSplit4Fill as Icon36 } from '../Icon.assets.36/ViewSplit4Fill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewSplit4Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
