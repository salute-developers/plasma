import type { SafeExtract } from 'src/types';

import type { SelectCheckedState } from '../Select.types';

// TODO: временная утилита, удалим при рефакторинге компонента (когда добавим тип для value: object}.
export const mapCheckedVariants = (
    checkedValue: SelectCheckedState,
    multiple = false,
): boolean | SafeExtract<SelectCheckedState, 'indeterminate'> => {
    if (checkedValue === true || checkedValue === false) {
        return checkedValue;
    }

    if (!multiple && checkedValue === 'done') {
        return true;
    }

    if ((!multiple && checkedValue === 'dot') || (multiple && checkedValue === 'indeterminate')) {
        return 'indeterminate';
    }

    return false;
};
