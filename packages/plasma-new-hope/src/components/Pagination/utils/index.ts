import { PaginationTypes } from '../Pagination.types';
import type { NumericRange, CreateArrayWithLengthX } from '../../../types';

const generateSection = (length: number, add: number) => {
    return Array.from(Array(length).keys()).map((el) => el + add);
};

const dType: PaginationTypes = 'default';
const dDlots: NumericRange<CreateArrayWithLengthX<7>, 15> = 9;

const sections = {
    1: [1, 0, 0],
    2: [2, 0, 0],
    3: [3, 0, 0],
    4: [4, 0, 0],
    5: [5, 0, 0],
    6: [6, 0, 0],
    7: [1, 3, 1],
    8: [1, 4, 1],
    9: [2, 3, 2],
    10: [2, 4, 2],
    11: [3, 3, 3],
    12: [3, 4, 3],
    13: [3, 5, 3],
    14: [3, 6, 3],
    15: [4, 5, 4],
};

export const defaultValues = {
    value: 1,
    perPage: 20,
    slots: dDlots,
    type: dType,
    pilled: false,
    square: false,
    disabledPages: [],
    hasQuickJump: true,
    hasPerPage: true,
    perPageList: [20, 50, 100, 200],
    isCommonButtonStyles: true,
    placeholderQuickJump: '#',
    textQuickJump: 'Go to',
    textPerPage: 'Show',
};

export const getSections = (
    value?: number,
    pages?: number,
    slots?: NumericRange<CreateArrayWithLengthX<1>, 15>,
): number[][] => {
    value = value ?? 1;
    pages = pages ?? 1;
    slots = slots ?? defaultValues.slots;
    const pageArray = [generateSection(pages, 1)];

    if (slots >= pages) {
        return pageArray;
    }

    if (!sections[slots]) {
        return pageArray;
    }

    if (slots < 7) {
        return [generateSection(slots, value)];
    }

    const smallSection = Math.min(Math.floor((slots - 1) / 2), 6);
    const bigSection = Math.min(Math.floor(slots / 2), 6);

    const defaultSection = sections[slots][1];
    const smallSectionLeft = sections[slots][0];
    const smallSectionRight = sections[slots][2];

    if (smallSection > value) {
        return [generateSection(bigSection, 1), generateSection(smallSection, pages - smallSection + 1)];
    }

    if (smallSection === value) {
        return [generateSection(bigSection + 1, 1), generateSection(smallSection - 1, pages - smallSection + 2)];
    }

    if (pages - smallSection + 1 < value) {
        return [generateSection(smallSection, 1), generateSection(bigSection, pages - bigSection + 1)];
    }

    if (pages - smallSection + 1 === value) {
        return [generateSection(smallSection - 1, 1), generateSection(bigSection + 1, pages - bigSection)];
    }

    return [
        generateSection(smallSectionLeft, 1),
        generateSection(defaultSection, value - Math.floor(defaultSection / 2)),
        generateSection(smallSectionRight, pages - smallSectionRight + 1),
    ];
};
