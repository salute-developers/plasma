import React from 'react';

import { MailPlusFill as Icon16 } from '../Icon.assets.16/MailPlusFill';
import { MailPlusFill as Icon24 } from '../Icon.assets.24/MailPlusFill';
import { MailPlusFill as Icon36 } from '../Icon.assets.36/MailPlusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailPlusFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
