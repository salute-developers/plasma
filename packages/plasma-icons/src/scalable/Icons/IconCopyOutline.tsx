import React from 'react';

import { CopyOutline as Icon16 } from '../Icon.assets.16/CopyOutline';
import { CopyOutline as Icon24 } from '../Icon.assets.24/CopyOutline';
import { CopyOutline as Icon36 } from '../Icon.assets.36/CopyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCopyOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
