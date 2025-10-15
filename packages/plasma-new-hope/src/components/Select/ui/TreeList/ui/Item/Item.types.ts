import React from 'react';

import { DropdownNodeSelect } from '../../../../Select.types';

export interface Props {
    index: number;
    item: DropdownNodeSelect;
}

export interface ItemArrowProps {
    index: number;
    item: DropdownNodeSelect;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isCurrentLevelOpened: boolean;
}
