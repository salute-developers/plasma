import React from 'react';

import { MailClosedFill as Icon16 } from '../Icon.assets.16/MailClosedFill';
import { MailClosedFill as Icon24 } from '../Icon.assets.24/MailClosedFill';
import { MailClosedFill as Icon36 } from '../Icon.assets.36/MailClosedFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailClosedFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
