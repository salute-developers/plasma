import React from 'react';

import { MaskOutline as Icon16 } from '../Icon.assets.16/MaskOutline';
import { MaskOutline as Icon24 } from '../Icon.assets.24/MaskOutline';
import { MaskOutline as Icon36 } from '../Icon.assets.36/MaskOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMaskOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
