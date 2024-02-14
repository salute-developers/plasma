import React from 'react';

import { DoneCircleFill as Icon16 } from '../Icon.assets.16/DoneCircleFill';
import { DoneCircleFill as Icon24 } from '../Icon.assets.24/DoneCircleFill';
import { DoneCircleFill as Icon36 } from '../Icon.assets.36/DoneCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoneCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
