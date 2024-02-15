import React from 'react';

import { ClipPlus as Icon16 } from '../Icon.assets.16/ClipPlus';
import { ClipPlus as Icon24 } from '../Icon.assets.24/ClipPlus';
import { ClipPlus as Icon36 } from '../Icon.assets.36/ClipPlus';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconClipPlus: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
