import React from 'react';

import { CandyFill as Icon16 } from '../Icon.assets.16/CandyFill';
import { CandyFill as Icon24 } from '../Icon.assets.24/CandyFill';
import { CandyFill as Icon36 } from '../Icon.assets.36/CandyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCandyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
