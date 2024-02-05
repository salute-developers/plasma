import React from 'react';

import { SmileOutline as Icon16 } from '../Icon.assets.16/SmileOutline';
import { SmileOutline as Icon24 } from '../Icon.assets.24/SmileOutline';
import { SmileOutline as Icon36 } from '../Icon.assets.36/SmileOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSmileOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
