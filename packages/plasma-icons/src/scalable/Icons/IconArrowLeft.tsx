import React from 'react';

import { ArrowLeft as Icon16 } from '../Icon.assets.16/ArrowLeft';
import { ArrowLeft as Icon24 } from '../Icon.assets.24/ArrowLeft';
import { ArrowLeft as Icon36 } from '../Icon.assets.36/ArrowLeft';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowLeft: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
