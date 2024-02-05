import React from 'react';

import { CloseCircleFill as Icon16 } from '../Icon.assets.16/CloseCircleFill';
import { CloseCircleFill as Icon24 } from '../Icon.assets.24/CloseCircleFill';
import { CloseCircleFill as Icon36 } from '../Icon.assets.36/CloseCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloseCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
