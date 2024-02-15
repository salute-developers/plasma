import React from 'react';

import { CalendarOutline as Icon16 } from '../Icon.assets.16/CalendarOutline';
import { CalendarOutline as Icon24 } from '../Icon.assets.24/CalendarOutline';
import { CalendarOutline as Icon36 } from '../Icon.assets.36/CalendarOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCalendarOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
