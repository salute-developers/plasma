import React from 'react';

import { VideoRecordFill as Icon16 } from '../Icon.assets.16/VideoRecordFill';
import { VideoRecordFill as Icon24 } from '../Icon.assets.24/VideoRecordFill';
import { VideoRecordFill as Icon36 } from '../Icon.assets.36/VideoRecordFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVideoRecordFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
