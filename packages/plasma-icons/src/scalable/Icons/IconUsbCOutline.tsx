import React from 'react';

import { UsbCOutline as Icon16 } from '../Icon.assets.16/UsbCOutline';
import { UsbCOutline as Icon24 } from '../Icon.assets.24/UsbCOutline';
import { UsbCOutline as Icon36 } from '../Icon.assets.36/UsbCOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconUsbCOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
