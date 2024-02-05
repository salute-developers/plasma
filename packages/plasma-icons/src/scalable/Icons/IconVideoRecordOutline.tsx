import React from 'react';

import { VideoRecordOutline as Icon16 } from '../Icon.assets.16/VideoRecordOutline';
import { VideoRecordOutline as Icon24 } from '../Icon.assets.24/VideoRecordOutline';
import { VideoRecordOutline as Icon36 } from '../Icon.assets.36/VideoRecordOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVideoRecordOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
