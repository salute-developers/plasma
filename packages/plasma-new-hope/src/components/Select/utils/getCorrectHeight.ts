import type { DropdownProps } from '../../Dropdown';

export const getCorrectHeight = (listHeight: Required<DropdownProps>['listHeight']): string => {
    if (Number.isNaN(Number(listHeight))) {
        return listHeight.toString();
    }
    return `${listHeight}rem`;
};
