import React from 'react';

import { MailPlusOutline as Icon16 } from '../Icon.assets.16/MailPlusOutline';
import { MailPlusOutline as Icon24 } from '../Icon.assets.24/MailPlusOutline';
import { MailPlusOutline as Icon36 } from '../Icon.assets.36/MailPlusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailPlusOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
