import React from 'react';

import { TextUnderline as Icon16 } from '../Icon.assets.16/TextUnderline';
import { TextUnderline as Icon24 } from '../Icon.assets.24/TextUnderline';
import { TextUnderline as Icon36 } from '../Icon.assets.36/TextUnderline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTextUnderline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
