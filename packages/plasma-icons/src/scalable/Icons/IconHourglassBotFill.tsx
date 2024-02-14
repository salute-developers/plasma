import React from 'react';

import { HourglassBotFill as Icon16 } from '../Icon.assets.16/HourglassBotFill';
import { HourglassBotFill as Icon24 } from '../Icon.assets.24/HourglassBotFill';
import { HourglassBotFill as Icon36 } from '../Icon.assets.36/HourglassBotFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHourglassBotFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
