import React from 'react';

import { MessageGoToFill as Icon16 } from '../Icon.assets.16/MessageGoToFill';
import { MessageGoToFill as Icon24 } from '../Icon.assets.24/MessageGoToFill';
import { MessageGoToFill as Icon36 } from '../Icon.assets.36/MessageGoToFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageGoToFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
