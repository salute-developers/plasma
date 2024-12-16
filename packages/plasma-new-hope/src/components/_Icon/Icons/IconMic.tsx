import React from 'react';

import { Mic } from '../Icon.assets/Mic';
import { IconRoot, IconProps } from '../IconRoot';

export const IconMic: React.FC<IconProps> = ({ size = 's', color, className, sizeCustomValue }) => {
    return <IconRoot className={className} sizeCustomValue={sizeCustomValue} size={size} color={color} icon={Mic} />;
};
