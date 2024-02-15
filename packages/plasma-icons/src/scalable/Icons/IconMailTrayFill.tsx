import React from 'react';

import { MailTrayFill as Icon16 } from '../Icon.assets.16/MailTrayFill';
import { MailTrayFill as Icon24 } from '../Icon.assets.24/MailTrayFill';
import { MailTrayFill as Icon36 } from '../Icon.assets.36/MailTrayFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailTrayFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
