import React from 'react';

import { CameraVideoFill } from '../Icon.assets/CameraVideoFill';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCameraVideoFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={CameraVideoFill} />;
};
