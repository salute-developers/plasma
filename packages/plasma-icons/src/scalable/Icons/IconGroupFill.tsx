import React from 'react';

import { GroupFill as Icon16 } from '../Icon.assets.16/GroupFill';
import { GroupFill as Icon24 } from '../Icon.assets.24/GroupFill';
import { GroupFill as Icon36 } from '../Icon.assets.36/GroupFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGroupFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
