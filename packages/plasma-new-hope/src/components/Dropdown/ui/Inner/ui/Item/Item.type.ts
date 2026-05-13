import type { HTMLAttributes, AriaAttributes } from 'react';

import type { PathState } from '../../../../reducers/pathReducer';
import type { ItemOption } from '../../../../Dropdown.types';

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
    item: ItemOption;
    currentLevel: number;
    index: number;
    path?: PathState;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLevel?: AriaAttributes['aria-level'];
    ariaLabel?: AriaAttributes['aria-label'];
}
