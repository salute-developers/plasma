const generateSectiion = (length: number, add: number) => {
    return Array.from(Array(length).keys()).map((el) => el + add);
};

export const defaultValues = {
    value: 1,
    perPage: 20,
    slots: 9,
    type: 'default',
    pilled: false,
    stretching: false,
    disabled: [],
    hasQuickJump: true,
    hasPerPage: true,
    perPageList: [20, 50, 100, 200],
    isCommonButtonStyles: true,
};

export const getSections = (value: number, pages: number, slots: number): number[][] => {
    const pageArray = [generateSectiion(pages, 1)];

    if (slots >= pages || slots < 5) {
        return pageArray;
    }

    const smallSection = Math.min(Math.floor((slots - 1) / 2), 6);
    const bigSection = Math.min(Math.floor(slots / 2), 6);

    const defaultSection = bigSection + ((slots - smallSection) % 2);
    const smallSectionLeft = Math.min(Math.ceil((slots - defaultSection - 2) / 2), 5);
    const smallSectionRight = Math.min(Math.floor((slots - defaultSection - 2) / 2), 5);

    if (smallSection > value) {
        return [generateSectiion(bigSection, 1), generateSectiion(smallSection, pages - smallSection + 1)];
    }

    if (smallSection === value) {
        return [generateSectiion(bigSection + 1, 1), generateSectiion(smallSection - 1, pages - smallSection + 2)];
    }

    if (pages - smallSection + 1 < value) {
        return [generateSectiion(smallSection, 1), generateSectiion(bigSection, pages - bigSection + 1)];
    }

    if (pages - smallSection + 1 === value) {
        return [generateSectiion(smallSection - 1, 1), generateSectiion(bigSection + 1, pages - bigSection)];
    }

    return [
        generateSectiion(smallSectionLeft, 1),
        generateSectiion(defaultSection, value - Math.floor(defaultSection / 2)),
        generateSectiion(smallSectionRight, pages - smallSectionRight + 1),
    ];
};
