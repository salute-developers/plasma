import React from 'react';

import { SberSpasibo } from '../Icon.assets/SberSpasibo';
import { IconRoot, IconProps } from '../IconRoot';

export const IconSberSpasibo: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={SberSpasibo} />;
};
