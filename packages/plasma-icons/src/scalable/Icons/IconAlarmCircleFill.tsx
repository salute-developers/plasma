import React from 'react';

import { AlarmCircleFill as Icon16 } from '../Icon.assets.16/AlarmCircleFill';
import { AlarmCircleFill as Icon24 } from '../Icon.assets.24/AlarmCircleFill';
import { AlarmCircleFill as Icon36 } from '../Icon.assets.36/AlarmCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAlarmCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
