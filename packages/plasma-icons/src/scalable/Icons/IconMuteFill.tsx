import React from 'react';

import { MuteFill as Icon16 } from '../Icon.assets.16/MuteFill';
import { MuteFill as Icon24 } from '../Icon.assets.24/MuteFill';
import { MuteFill as Icon36 } from '../Icon.assets.36/MuteFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMuteFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
