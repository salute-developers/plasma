export const getInitialData = (index: number, count: number, visibleCount: number): [number, number] => {
    let newIndex = index;
    let newVisibleCount = visibleCount;

    // Ограничения на макс. и мин. значения индекса
    if (index < 0) {
        newIndex = 0;
    } else if (index >= count) {
        newIndex = count - 1;
    }

    // Ограничение на количество точек
    if (visibleCount > count) {
        newVisibleCount = count;
    }

    return [newIndex, newVisibleCount];
};

export const getActiveIndex = (
    index: number,
    isRightDirection: boolean,
    count: number,
    visibleCount: number,
): number => {
    if (index < Math.trunc(visibleCount / 2)) {
        return index;
    }
    if (count - 1 - index < Math.trunc(visibleCount / 2)) {
        return visibleCount - 1 - (count - 1 - index);
    }
    if (visibleCount % 2) {
        return Math.trunc(visibleCount / 2);
    }
    if (isRightDirection) {
        return visibleCount / 2;
    }
    return visibleCount / 2 - 1;
};

export const getTargetIndex = (
    index: number,
    prevIndex: number,
    prevActiveIndex: number,
    diffDotsRange: number,
    visibleCount: number,
): number => {
    const rawTargetIndex = index > prevIndex ? prevActiveIndex + diffDotsRange : prevActiveIndex - diffDotsRange;

    if (rawTargetIndex < 0) {
        return 0;
    }

    if (rawTargetIndex >= visibleCount) {
        return visibleCount - 1;
    }

    return rawTargetIndex;
};
