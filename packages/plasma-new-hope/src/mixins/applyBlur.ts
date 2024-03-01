export const blurs = {
    small: '1.6875rem',
    medium: '2.3125rem',
    large: '3.125rem',
};

/**
 * Степень размытия фона
 */
export type Blur = keyof typeof blurs;

export const applyBlur = (blur: string) =>
    blurs[blur as Blur] ? `backdrop-filter: blur(${blurs[blur as Blur]});` : '';
