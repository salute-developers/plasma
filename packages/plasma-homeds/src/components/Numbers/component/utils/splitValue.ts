/**
 * Раскрывает экспоненциальную запись числа для отображения LCD-цифрами.
 */
export const splitValue = (value: number) => {
    const [mantissa, exponent = '0'] = String(Math.abs(value)).split('e');
    const [whole, fraction = ''] = mantissa.split('.');
    const digits = whole + fraction;
    const decimalPosition = whole.length + Number(exponent);

    if (decimalPosition <= 0) {
        return { integer: '0', decimal: '0'.repeat(-decimalPosition) + digits };
    }

    if (decimalPosition >= digits.length) {
        return { integer: digits + '0'.repeat(decimalPosition - digits.length), decimal: '' };
    }

    return { integer: digits.slice(0, decimalPosition), decimal: digits.slice(decimalPosition) };
};
