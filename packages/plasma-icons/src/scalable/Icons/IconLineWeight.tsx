import React from 'react';

import { LineWeight as Icon16 } from '../Icon.assets.16/LineWeight';
import { LineWeight as Icon24 } from '../Icon.assets.24/LineWeight';
import { LineWeight as Icon36 } from '../Icon.assets.36/LineWeight';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLineWeight: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
