import React from 'react';

import { MailOutline as Icon16 } from '../Icon.assets.16/MailOutline';
import { MailOutline as Icon24 } from '../Icon.assets.24/MailOutline';
import { MailOutline as Icon36 } from '../Icon.assets.36/MailOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
