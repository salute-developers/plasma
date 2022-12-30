import React from 'react';

import { CloudUpload } from '../Icon.assets/CloudUpload';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCloudUpload: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={CloudUpload} />;
};
