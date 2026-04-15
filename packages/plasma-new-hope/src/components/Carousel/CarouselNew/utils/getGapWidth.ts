export const getGapWidth = (trackElement: HTMLDivElement | null) => {
    if (!trackElement) {
        return 0;
    }

    const computedStyle = window.getComputedStyle(trackElement);
    const gap = Number.parseFloat(computedStyle.columnGap || computedStyle.gap);

    return Number.isNaN(gap) ? 0 : gap;
};
