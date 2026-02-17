import { SafeExtract } from 'src/types';

import { CheckedType } from '../hooks/getPathMaps';

// TODO: временная утилита, удалим при рефакторинге компонента.
export const mapCheckedVariants = (
    checkedValue: CheckedType,
    multiple = false,
): boolean | SafeExtract<CheckedType, 'indeterminate'> => {
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
