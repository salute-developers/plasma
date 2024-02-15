import React from 'react';

import { ArrowRight as Icon16 } from '../Icon.assets.16/ArrowRight';
import { ArrowRight as Icon24 } from '../Icon.assets.24/ArrowRight';
import { ArrowRight as Icon36 } from '../Icon.assets.36/ArrowRight';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowRight: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
