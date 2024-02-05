import React from 'react';

import { CallBlockFill as Icon16 } from '../Icon.assets.16/CallBlockFill';
import { CallBlockFill as Icon24 } from '../Icon.assets.24/CallBlockFill';
import { CallBlockFill as Icon36 } from '../Icon.assets.36/CallBlockFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallBlockFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
