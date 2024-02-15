import React from 'react';

import { CallOutgoingFill as Icon16 } from '../Icon.assets.16/CallOutgoingFill';
import { CallOutgoingFill as Icon24 } from '../Icon.assets.24/CallOutgoingFill';
import { CallOutgoingFill as Icon36 } from '../Icon.assets.36/CallOutgoingFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallOutgoingFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
