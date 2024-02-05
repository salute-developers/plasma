import React from 'react';

import { AlarmAddFill as Icon16 } from '../Icon.assets.16/AlarmAddFill';
import { AlarmAddFill as Icon24 } from '../Icon.assets.24/AlarmAddFill';
import { AlarmAddFill as Icon36 } from '../Icon.assets.36/AlarmAddFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAlarmAddFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
