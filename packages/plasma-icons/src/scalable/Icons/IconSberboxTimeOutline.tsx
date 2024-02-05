import React from 'react';

import { SberboxTimeOutline as Icon16 } from '../Icon.assets.16/SberboxTimeOutline';
import { SberboxTimeOutline as Icon24 } from '../Icon.assets.24/SberboxTimeOutline';
import { SberboxTimeOutline as Icon36 } from '../Icon.assets.36/SberboxTimeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboxTimeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
