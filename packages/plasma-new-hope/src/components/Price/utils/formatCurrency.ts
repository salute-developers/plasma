/**
 * Форматирование числа в цену.
 */
export const formatCurrency = ({
    value,
    locale,
    currency,
    minimumFractionDigits,
}: {
    value: number;
    locale: string;
    currency: string;
    minimumFractionDigits: number;
}): string => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits,
    });

    return formatter.format(value);
};
