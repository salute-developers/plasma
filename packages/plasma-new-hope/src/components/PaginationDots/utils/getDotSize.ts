export const getDotSize = (
    size: string | undefined,
    index: number,
    offset: number,
    count: number,
    visibleCount: number,
) => {
    const innerViewValue = index - offset;
    const toEnd = count - (visibleCount + offset);

    const canScrollBackward = Boolean(offset);
    const canScrollForward = Boolean(toEnd);

    const isFirst = innerViewValue === 0;
    const isSecond = innerViewValue === 1;

    const isSecondLast = innerViewValue === visibleCount - 2;
    const isLast = innerViewValue === visibleCount - 1;

    if (size === 's') {
        if ((isFirst && canScrollBackward) || (isLast && canScrollForward)) {
            return 'xs';
        }

        return 's';
    }

    if (canScrollBackward) {
        // (m) m m s xs
        // m (m) m s xs
        // m m (m) s xs
        // s m (m) s xs
        // xs s m (m) s
        // xs s m (m) s
        // xs s m m (m)
        if (isFirst) {
            return offset === 1 ? 's' : 'xs';
        }
        if (isSecond && offset > 1) {
            return 's';
        }
    }

    if (canScrollForward) {
        if (isLast) {
            return toEnd === 1 ? 's' : 'xs';
        }

        if (isSecondLast && toEnd > 1) {
            return 's';
        }
    }

    return 'm';
};
