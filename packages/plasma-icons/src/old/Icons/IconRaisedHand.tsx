import React from 'react';

import { RaisedHand } from '../Icon.assets/RaisedHand';
import { IconRoot, IconProps } from '../IconRoot';

export const IconRaisedHand: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={RaisedHand} />;
};
