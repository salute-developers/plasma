import React from 'react';

import { BluetoothLock as Icon16 } from '../Icon.assets.16/BluetoothLock';
import { BluetoothLock as Icon24 } from '../Icon.assets.24/BluetoothLock';
import { BluetoothLock as Icon36 } from '../Icon.assets.36/BluetoothLock';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBluetoothLock: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
