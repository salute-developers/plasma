import React from 'react';

import { BellErrorFill as Icon16 } from '../Icon.assets.16/BellErrorFill';
import { BellErrorFill as Icon24 } from '../Icon.assets.24/BellErrorFill';
import { BellErrorFill as Icon36 } from '../Icon.assets.36/BellErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBellErrorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
