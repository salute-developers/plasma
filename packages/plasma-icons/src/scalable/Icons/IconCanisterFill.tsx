import React from 'react';

import { CanisterFill as Icon16 } from '../Icon.assets.16/CanisterFill';
import { CanisterFill as Icon24 } from '../Icon.assets.24/CanisterFill';
import { CanisterFill as Icon36 } from '../Icon.assets.36/CanisterFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCanisterFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
