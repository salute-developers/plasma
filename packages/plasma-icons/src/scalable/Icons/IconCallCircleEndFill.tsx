import React from 'react';

import { CallCircleEndFill as Icon16 } from '../Icon.assets.16/CallCircleEndFill';
import { CallCircleEndFill as Icon24 } from '../Icon.assets.24/CallCircleEndFill';
import { CallCircleEndFill as Icon36 } from '../Icon.assets.36/CallCircleEndFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallCircleEndFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
