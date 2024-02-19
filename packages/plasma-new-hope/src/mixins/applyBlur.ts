export const blurs = {
    small: '27px',
    medium: '37px',
    large: '50px',
};

/**
 * Степень размытия фона
 */
export type Blur = keyof typeof blurs;

export const applyBlur = (blur: string) =>
    blurs[blur as Blur] ? `backdrop-filter: blur(${blurs[blur as Blur]});` : '';
