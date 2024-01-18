/**
 * Набор часто встречающихся скруглений.
 */
export const radiuses = {
    250: 15.625,
    32: 2,
    28: 1.75,
    24: 1.5,
    20: 1.25,
    18: 1.125,
    16: 1,
    14: 0.875,
    12: 0.75,
    8: 0.5,
    0: 0,
};

export type Roundness = keyof typeof radiuses;
export type RoundnessProps = {
    /**
     * Скругленность
     */
    roundness: Roundness | string;
};

/**
 * Функция для получения значения скругленности границ
 * Необходимо вызвать функцию в самом компоненте и прокинуть полученное значение в пропс roundness
 * Пример в компоненте Skeleton/LineSkeleton
 */
export const getRoundness = ({ roundness }: RoundnessProps): string => {
    if (!Number.isNaN(Number(roundness))) {
        return `${radiuses[roundness as Roundness]}rem`;
    }

    return String(roundness);
};

/**
 * Миксин скругленности.
 * roundness должно передаваться как css-переменная applyRoundness('var(--roundnes-token)')
 */
export const applyRoundness = (roundness: string) => {
    return `
            border-radius: ${roundness};
        `;
};
