import React from 'react';

import { KeyOutline as Icon16 } from '../Icon.assets.16/KeyOutline';
import { KeyOutline as Icon24 } from '../Icon.assets.24/KeyOutline';
import { KeyOutline as Icon36 } from '../Icon.assets.36/KeyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconKeyOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
