import React from 'react';

import { AppleFill as Icon16 } from '../Icon.assets.16/AppleFill';
import { AppleFill as Icon24 } from '../Icon.assets.24/AppleFill';
import { AppleFill as Icon36 } from '../Icon.assets.36/AppleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAppleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
