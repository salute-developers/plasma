import React from 'react';

import { SleepFill as Icon16 } from '../Icon.assets.16/SleepFill';
import { SleepFill as Icon24 } from '../Icon.assets.24/SleepFill';
import { SleepFill as Icon36 } from '../Icon.assets.36/SleepFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSleepFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
