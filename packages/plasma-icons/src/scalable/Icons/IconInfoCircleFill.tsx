import React from 'react';

import { InfoCircleFill as Icon16 } from '../Icon.assets.16/InfoCircleFill';
import { InfoCircleFill as Icon24 } from '../Icon.assets.24/InfoCircleFill';
import { InfoCircleFill as Icon36 } from '../Icon.assets.36/InfoCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconInfoCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
