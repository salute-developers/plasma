import React from 'react';

import { HourglassBotOutline as Icon16 } from '../Icon.assets.16/HourglassBotOutline';
import { HourglassBotOutline as Icon24 } from '../Icon.assets.24/HourglassBotOutline';
import { HourglassBotOutline as Icon36 } from '../Icon.assets.36/HourglassBotOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHourglassBotOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
