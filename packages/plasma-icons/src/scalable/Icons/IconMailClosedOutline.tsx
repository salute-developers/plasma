import React from 'react';

import { MailClosedOutline as Icon16 } from '../Icon.assets.16/MailClosedOutline';
import { MailClosedOutline as Icon24 } from '../Icon.assets.24/MailClosedOutline';
import { MailClosedOutline as Icon36 } from '../Icon.assets.36/MailClosedOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailClosedOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
