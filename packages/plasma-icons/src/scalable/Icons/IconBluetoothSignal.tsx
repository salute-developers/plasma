import React from 'react';

import { BluetoothSignal as Icon16 } from '../Icon.assets.16/BluetoothSignal';
import { BluetoothSignal as Icon24 } from '../Icon.assets.24/BluetoothSignal';
import { BluetoothSignal as Icon36 } from '../Icon.assets.36/BluetoothSignal';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBluetoothSignal: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
