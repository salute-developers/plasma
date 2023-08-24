import React from 'react';

import { MessageChatFill } from '../Icon.assets/MessageChatFill';
import { IconRoot, IconProps } from '../IconRoot';

export const IconMessageChatFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={MessageChatFill} />;
};
