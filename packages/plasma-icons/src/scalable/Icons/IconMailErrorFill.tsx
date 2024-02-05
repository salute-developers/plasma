import React from 'react';

import { MailErrorFill as Icon16 } from '../Icon.assets.16/MailErrorFill';
import { MailErrorFill as Icon24 } from '../Icon.assets.24/MailErrorFill';
import { MailErrorFill as Icon36 } from '../Icon.assets.36/MailErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailErrorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
