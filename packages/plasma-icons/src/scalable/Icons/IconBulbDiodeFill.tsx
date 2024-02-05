import React from 'react';

import { BulbDiodeFill as Icon16 } from '../Icon.assets.16/BulbDiodeFill';
import { BulbDiodeFill as Icon24 } from '../Icon.assets.24/BulbDiodeFill';
import { BulbDiodeFill as Icon36 } from '../Icon.assets.36/BulbDiodeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBulbDiodeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
