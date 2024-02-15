import React from 'react';

import { CallEndBlockFill as Icon16 } from '../Icon.assets.16/CallEndBlockFill';
import { CallEndBlockFill as Icon24 } from '../Icon.assets.24/CallEndBlockFill';
import { CallEndBlockFill as Icon36 } from '../Icon.assets.36/CallEndBlockFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallEndBlockFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
