import React from 'react';

import { CalendarEventOutline as Icon16 } from '../Icon.assets.16/CalendarEventOutline';
import { CalendarEventOutline as Icon24 } from '../Icon.assets.24/CalendarEventOutline';
import { CalendarEventOutline as Icon36 } from '../Icon.assets.36/CalendarEventOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCalendarEventOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
