import React from 'react';

import { MobileAutorotateOutline as Icon16 } from '../Icon.assets.16/MobileAutorotateOutline';
import { MobileAutorotateOutline as Icon24 } from '../Icon.assets.24/MobileAutorotateOutline';
import { MobileAutorotateOutline as Icon36 } from '../Icon.assets.36/MobileAutorotateOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobileAutorotateOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
