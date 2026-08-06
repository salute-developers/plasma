export const defaultCharacterWidth = '1ch';
/**
 * Запас под каретку: в Safari каретка занимает реальное место в контенте,
 * и без запаса первый символ обрезается при фокусе (ширина инпута точно равна ширине текста).
 */
export const caretWidthOffset = 2;
export const numberSchema = /^(-)?\d+(\.\d+)?$/;
export const excludingNumberSchema = /[^-.\d]/g;

export const getPreciseValue = (value: number | string, precision?: number) => {
    const innerValue = String(value);

    if (precision !== undefined) {
        const factor = 10 ** precision;
        const preparedValue =
            Number(innerValue) < 0 ? Number(innerValue) - Number.EPSILON : Number(innerValue) + Number.EPSILON;

        return String(Math.round(preparedValue * factor) / factor);
    }

    return innerValue;
};
