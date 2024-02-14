import React from 'react';

import { WindowMultiFill as Icon16 } from '../Icon.assets.16/WindowMultiFill';
import { WindowMultiFill as Icon24 } from '../Icon.assets.24/WindowMultiFill';
import { WindowMultiFill as Icon36 } from '../Icon.assets.36/WindowMultiFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMultiFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
