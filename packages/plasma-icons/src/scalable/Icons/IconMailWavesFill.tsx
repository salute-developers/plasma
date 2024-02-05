import React from 'react';

import { MailWavesFill as Icon16 } from '../Icon.assets.16/MailWavesFill';
import { MailWavesFill as Icon24 } from '../Icon.assets.24/MailWavesFill';
import { MailWavesFill as Icon36 } from '../Icon.assets.36/MailWavesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailWavesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
