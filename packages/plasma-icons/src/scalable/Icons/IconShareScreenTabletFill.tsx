import React from 'react';

import { ShareScreenTabletFill as Icon16 } from '../Icon.assets.16/ShareScreenTabletFill';
import { ShareScreenTabletFill as Icon24 } from '../Icon.assets.24/ShareScreenTabletFill';
import { ShareScreenTabletFill as Icon36 } from '../Icon.assets.36/ShareScreenTabletFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShareScreenTabletFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
