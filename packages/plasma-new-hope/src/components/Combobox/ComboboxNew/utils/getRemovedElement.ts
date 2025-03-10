// Утилита для определения какой чип был удален
export const getRemovedElement: (
    prevValues: string[],
    newValues: string[],
    isTargetAmount?: boolean,
) => string | null = (prevValues, newValues, isTargetAmount = false) => {
    if (isTargetAmount) {
        return null;
    }

    return prevValues.filter((item) => !newValues.includes(item))[0] || null;
};
