import React from 'react';

import { MailOpenOutline as Icon16 } from '../Icon.assets.16/MailOpenOutline';
import { MailOpenOutline as Icon24 } from '../Icon.assets.24/MailOpenOutline';
import { MailOpenOutline as Icon36 } from '../Icon.assets.36/MailOpenOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailOpenOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
