import React from 'react';

import { BulbSberFill as Icon16 } from '../Icon.assets.16/BulbSberFill';
import { BulbSberFill as Icon24 } from '../Icon.assets.24/BulbSberFill';
import { BulbSberFill as Icon36 } from '../Icon.assets.36/BulbSberFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBulbSberFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
