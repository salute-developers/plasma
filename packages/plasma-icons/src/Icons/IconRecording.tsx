import React from 'react';

import { Recording } from '../Icon.assets/Recording';
import { IconRoot, IconProps } from '../IconRoot';

export const IconRecording: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={Recording} />;
};
