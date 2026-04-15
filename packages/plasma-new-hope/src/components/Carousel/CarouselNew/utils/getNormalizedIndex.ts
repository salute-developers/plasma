export const getNormalizedIndex = (index: number, slidesAmount: number, loop: boolean) => {
    if (slidesAmount <= 0) {
        return 0;
    }

    if (loop) {
        return ((index % slidesAmount) + slidesAmount) % slidesAmount;
    }

    return Math.max(0, Math.min(slidesAmount - 1, index));
};
