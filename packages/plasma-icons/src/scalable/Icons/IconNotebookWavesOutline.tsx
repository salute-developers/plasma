import React from 'react';

import { NotebookWavesOutline as Icon16 } from '../Icon.assets.16/NotebookWavesOutline';
import { NotebookWavesOutline as Icon24 } from '../Icon.assets.24/NotebookWavesOutline';
import { NotebookWavesOutline as Icon36 } from '../Icon.assets.36/NotebookWavesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNotebookWavesOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
