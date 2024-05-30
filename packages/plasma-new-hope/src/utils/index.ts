import { CSSProperties } from '@linaria/core';

export { canUseDOM } from './canUseDOM';
export { extractTextFrom } from './extractTextFrom';
export { getSizeValueFromProp } from './getSizeValueFromProp';
export { IS_REACT_18, safeUseId } from './react';
export { isNumber } from './isNumber';

export const cx = (...classes: (string | undefined)[]) => classes.filter((classItem) => classItem).join(' ');

export const composableStyle = (s: TemplateStringsArray, ...expr: Array<string | number | CSSProperties>): string => {
    let res = '';
    for (let i = 0; i < Math.max(s.length, expr.length); ++i) {
        res += s[i] ?? '';
        res += expr[i] ?? '';
    }

    return res;
};
