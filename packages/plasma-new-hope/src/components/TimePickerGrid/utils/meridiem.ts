export type Meridiem = 'AM' | 'PM';

export const meridiemValues: Meridiem[] = ['AM', 'PM'];

/**
 * Значения колонки часов в 12-часовом формате: 12, 01, ..., 11.
 */
export const hours12Range: string[] = Array.from({ length: 12 }, (_, i) =>
    (i === 0 ? 12 : i).toString().padStart(2, '0'),
);

export const to12Hour = (hours24: number): { hour12: number; meridiem: Meridiem } => ({
    hour12: hours24 % 12 === 0 ? 12 : hours24 % 12,
    meridiem: hours24 < 12 ? 'AM' : 'PM',
});

export const to24Hour = (hour12: number, meridiem: Meridiem): number => (hour12 % 12) + (meridiem === 'PM' ? 12 : 0);

export const formatHours12 = (hours24: number): { text: string; meridiem: Meridiem } => {
    const { hour12, meridiem } = to12Hour(hours24);

    return { text: hour12.toString().padStart(2, '0'), meridiem };
};

export const isHours24Only = (hours: number): boolean => hours === 0 || (hours >= 13 && hours <= 23);

/**
 * AM/PM выводится не в тексте поля, а в слоте `textAfter`, свой `textAfter` склеивается с ним: "PM TA".
 */
export const getMeridiemTextAfter = (meridiem: Meridiem | null, textAfter?: string): string | undefined => {
    if (!meridiem) {
        return textAfter;
    }

    return textAfter ? `${meridiem} ${textAfter}` : meridiem;
};
