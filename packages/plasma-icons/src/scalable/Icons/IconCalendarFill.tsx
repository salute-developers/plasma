import React from 'react';

import { CalendarFill as Icon16 } from '../Icon.assets.16/CalendarFill';
import { CalendarFill as Icon24 } from '../Icon.assets.24/CalendarFill';
import { CalendarFill as Icon36 } from '../Icon.assets.36/CalendarFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCalendarFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
