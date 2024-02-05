import React from 'react';

import { TicketFill as Icon16 } from '../Icon.assets.16/TicketFill';
import { TicketFill as Icon24 } from '../Icon.assets.24/TicketFill';
import { TicketFill as Icon36 } from '../Icon.assets.36/TicketFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTicketFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
