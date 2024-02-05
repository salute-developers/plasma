import React from 'react';

import { CalendarEventFill as Icon16 } from '../Icon.assets.16/CalendarEventFill';
import { CalendarEventFill as Icon24 } from '../Icon.assets.24/CalendarEventFill';
import { CalendarEventFill as Icon36 } from '../Icon.assets.36/CalendarEventFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCalendarEventFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
