import React from 'react';

import { InfoCircleOutline as Icon16 } from '../Icon.assets.16/InfoCircleOutline';
import { InfoCircleOutline as Icon24 } from '../Icon.assets.24/InfoCircleOutline';
import { InfoCircleOutline as Icon36 } from '../Icon.assets.36/InfoCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconInfoCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
