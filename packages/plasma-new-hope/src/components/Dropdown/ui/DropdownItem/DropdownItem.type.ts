import type { HTMLAttributes, AriaAttributes } from 'react';

import type { PathState } from '../../reducers/pathReducer';
import { DropdownItemOption } from '../../Dropdown.types';

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
    item: DropdownItemOption;
    currentLevel: number;
    index: number;
    path?: PathState;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLevel?: AriaAttributes['aria-level'];
    ariaLabel?: AriaAttributes['aria-label'];
}
