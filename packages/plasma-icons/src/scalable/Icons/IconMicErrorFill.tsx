import React from 'react';

import { MicErrorFill as Icon16 } from '../Icon.assets.16/MicErrorFill';
import { MicErrorFill as Icon24 } from '../Icon.assets.24/MicErrorFill';
import { MicErrorFill as Icon36 } from '../Icon.assets.36/MicErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMicErrorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
