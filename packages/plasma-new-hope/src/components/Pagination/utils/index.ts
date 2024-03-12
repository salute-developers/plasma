const maxNumber = (value: number, max: number): number => {
    return value > max ? max : value;
};

export const getSections = (value: number, pages: number, slots: number): number[][] => {
    const pageArray = [Array.from(Array(pages).keys()).map((el) => el + 1)];

    if (slots >= pages || slots < 5) {
        return pageArray;
    }

    const smallSection = maxNumber(Math.floor((slots - 1) / 2), 6);
    const bigSection = maxNumber(Math.floor(slots / 2), 6);

    const defaultSection = bigSection + ((slots - smallSection) % 2);
    const smallSectionLeft = maxNumber(Math.ceil((slots - defaultSection - 2) / 2), 5);
    const smallSectionRight = maxNumber(Math.floor((slots - defaultSection - 2) / 2), 5);

    if (smallSection > value) {
        return [
            Array.from(Array(bigSection + 0).keys()).map((el) => el + 1),
            Array.from(Array(smallSection).keys()).map((el) => el + 1 + (pages - smallSection)),
        ];
    }

    if (smallSection === value) {
        return [
            Array.from(Array(bigSection + 1).keys()).map((el) => el + 1),
            Array.from(Array(smallSection - 1).keys()).map((el) => el + 1 + (pages - smallSection + 1)),
        ];
    }

    if (pages - smallSection + 1 < value) {
        return [
            Array.from(Array(smallSection).keys()).map((el) => el + 1),
            Array.from(Array(bigSection).keys()).map((el) => el + 1 + (pages - bigSection)),
        ];
    }

    if (pages - smallSection + 1 === value) {
        return [
            Array.from(Array(smallSection - 1).keys()).map((el) => el + 1),
            Array.from(Array(bigSection + 1).keys()).map((el) => el + 1 + (pages - bigSection - 1)),
        ];
    }

    return [
        Array.from(Array(smallSectionLeft).keys()).map((el) => el + 1),
        Array.from(Array(defaultSection).keys()).map((el) => el + (value - Math.floor(defaultSection / 2))),
        Array.from(Array(smallSectionRight).keys()).map((el) => el + 1 + (pages - smallSectionRight)),
    ];
};
