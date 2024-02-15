import React from 'react';

import { MailTrayOutline as Icon16 } from '../Icon.assets.16/MailTrayOutline';
import { MailTrayOutline as Icon24 } from '../Icon.assets.24/MailTrayOutline';
import { MailTrayOutline as Icon36 } from '../Icon.assets.36/MailTrayOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailTrayOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
