import React from 'react';

import { CallDash } from '../Icon.assets/CallDash';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCallDash: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={CallDash} />;
};
