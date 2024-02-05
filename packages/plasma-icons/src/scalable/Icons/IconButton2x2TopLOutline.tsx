import React from 'react';

import { Button2x2TopLOutline as Icon16 } from '../Icon.assets.16/Button2x2TopLOutline';
import { Button2x2TopLOutline as Icon24 } from '../Icon.assets.24/Button2x2TopLOutline';
import { Button2x2TopLOutline as Icon36 } from '../Icon.assets.36/Button2x2TopLOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconButton2x2TopLOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
