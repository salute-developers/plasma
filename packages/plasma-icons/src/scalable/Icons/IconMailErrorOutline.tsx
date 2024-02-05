import React from 'react';

import { MailErrorOutline as Icon16 } from '../Icon.assets.16/MailErrorOutline';
import { MailErrorOutline as Icon24 } from '../Icon.assets.24/MailErrorOutline';
import { MailErrorOutline as Icon36 } from '../Icon.assets.36/MailErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailErrorOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
