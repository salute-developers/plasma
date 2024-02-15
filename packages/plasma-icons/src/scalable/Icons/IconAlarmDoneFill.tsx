import React from 'react';

import { AlarmDoneFill as Icon16 } from '../Icon.assets.16/AlarmDoneFill';
import { AlarmDoneFill as Icon24 } from '../Icon.assets.24/AlarmDoneFill';
import { AlarmDoneFill as Icon36 } from '../Icon.assets.36/AlarmDoneFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAlarmDoneFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
