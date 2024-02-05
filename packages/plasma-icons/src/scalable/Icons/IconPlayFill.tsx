import React from 'react';

import { PlayFill as Icon16 } from '../Icon.assets.16/PlayFill';
import { PlayFill as Icon24 } from '../Icon.assets.24/PlayFill';
import { PlayFill as Icon36 } from '../Icon.assets.36/PlayFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlayFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
