import React from 'react';

import { GroupOutline as Icon16 } from '../Icon.assets.16/GroupOutline';
import { GroupOutline as Icon24 } from '../Icon.assets.24/GroupOutline';
import { GroupOutline as Icon36 } from '../Icon.assets.36/GroupOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGroupOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
