import React from 'react';

import { CallCircleFill as Icon16 } from '../Icon.assets.16/CallCircleFill';
import { CallCircleFill as Icon24 } from '../Icon.assets.24/CallCircleFill';
import { CallCircleFill as Icon36 } from '../Icon.assets.36/CallCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
