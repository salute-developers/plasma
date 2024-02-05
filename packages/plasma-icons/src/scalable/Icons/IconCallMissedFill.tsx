import React from 'react';

import { CallMissedFill as Icon16 } from '../Icon.assets.16/CallMissedFill';
import { CallMissedFill as Icon24 } from '../Icon.assets.24/CallMissedFill';
import { CallMissedFill as Icon36 } from '../Icon.assets.36/CallMissedFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallMissedFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
