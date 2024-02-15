import React from 'react';

import { MicOffFill as Icon16 } from '../Icon.assets.16/MicOffFill';
import { MicOffFill as Icon24 } from '../Icon.assets.24/MicOffFill';
import { MicOffFill as Icon36 } from '../Icon.assets.36/MicOffFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMicOffFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
