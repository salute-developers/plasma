const getPrecision = (value: number) => {
    const [coefficient, exponent = '0'] = String(value).split('e');
    const fractionLength = coefficient.split('.')[1]?.length ?? 0;

    return Math.max(0, fractionLength - Number(exponent));
};

export const roundValueToStep = (value: number, min: number, step: number) => {
    if (!step) {
        return value;
    }

    const roundedValue = min + Math.round((value - min) / step) * step;
    const precision = Math.max(getPrecision(min), getPrecision(step));

    // Убираем погрешность умножения и сложения, сохраняя точность шага и начала диапазона.
    return precision <= 100 ? Number(roundedValue.toFixed(precision)) : roundedValue;
};
