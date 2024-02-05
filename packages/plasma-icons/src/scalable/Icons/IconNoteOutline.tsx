import React from 'react';

import { NoteOutline as Icon16 } from '../Icon.assets.16/NoteOutline';
import { NoteOutline as Icon24 } from '../Icon.assets.24/NoteOutline';
import { NoteOutline as Icon36 } from '../Icon.assets.36/NoteOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNoteOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
