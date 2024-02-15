import React from 'react';

import { BluetoothSearching as Icon16 } from '../Icon.assets.16/BluetoothSearching';
import { BluetoothSearching as Icon24 } from '../Icon.assets.24/BluetoothSearching';
import { BluetoothSearching as Icon36 } from '../Icon.assets.36/BluetoothSearching';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBluetoothSearching: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
