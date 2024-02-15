import React from 'react';

import { WatchRoundFill as Icon16 } from '../Icon.assets.16/WatchRoundFill';
import { WatchRoundFill as Icon24 } from '../Icon.assets.24/WatchRoundFill';
import { WatchRoundFill as Icon36 } from '../Icon.assets.36/WatchRoundFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWatchRoundFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
