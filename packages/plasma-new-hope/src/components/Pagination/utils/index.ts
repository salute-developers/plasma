import { PaginationTypes } from '../Pagination.types';

const generateSection = (length: number, add: number) => {
    return Array.from(Array(length).keys()).map((el) => el + add);
};

const type: PaginationTypes = 'default';

export const defaultValues = {
    value: 1,
    perPage: 20,
    slots: 9,
    type,
    pilled: false,
    square: false,
    disabled: [],
    hasQuickJump: true,
    hasPerPage: true,
    perPageList: [20, 50, 100, 200],
    isCommonButtonStyles: true,
    placeholderQuickJump: '#',
    textQuickJump: 'Go to',
    textPerPage: 'Show',
};

export const isNumber = (value: unknown) => !Number.isNaN(Number(value));

export const getSections = (value: number | undefined, pages: number, slots: number): number[][] => {
    value = value ?? 1;
    const pageArray = [generateSection(pages, 1)];

    if (slots >= pages || slots < 5) {
        return pageArray;
    }

    const smallSection = Math.min(Math.floor((slots - 1) / 2), 6);
    const bigSection = Math.min(Math.floor(slots / 2), 6);

    const defaultSection = bigSection;
    const smallSectionLeft = Math.min(Math.ceil((slots - defaultSection - 2) / 2), 5);
    const smallSectionRight = Math.min(Math.floor((slots - defaultSection - 2) / 2), 5);

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
