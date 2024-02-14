import React from 'react';

import { Button3x2COutline as Icon16 } from '../Icon.assets.16/Button3x2COutline';
import { Button3x2COutline as Icon24 } from '../Icon.assets.24/Button3x2COutline';
import { Button3x2COutline as Icon36 } from '../Icon.assets.36/Button3x2COutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconButton3x2COutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
