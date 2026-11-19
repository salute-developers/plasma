const getPrecision = (value: number) => {
    const [coefficient, exponent = '0'] = String(value).split('e');
    const fractionLength = coefficient.split('.')[1]?.length ?? 0;

    return Math.max(0, fractionLength - Number(exponent));
};

export const roundValueToStep = (value: number, min: number, step: number, roundingMode?: 'ceil' | 'floor') => {
    if (!step) {
        return value;
    }

    const steps = (value - min) / step;
    const nearestStep = Math.round(steps);
    const tolerance = Number.EPSILON * Math.max(Math.abs(steps), Math.abs(value / step), Math.abs(min / step));
    // Не сдвигаем уже кратные шагу значения из-за погрешности деления и вычитания.
    const normalizedSteps = roundingMode && Math.abs(steps - nearestStep) <= tolerance ? nearestStep : steps;
    const round = roundingMode ? Math[roundingMode] : Math.round;
    const roundedValue = min + round(normalizedSteps) * step;
    const precision = Math.max(getPrecision(min), getPrecision(step));

    // Убираем погрешность умножения и сложения, сохраняя точность шага и начала диапазона.
    return precision <= 100 ? Number(roundedValue.toFixed(precision)) : roundedValue;
};
