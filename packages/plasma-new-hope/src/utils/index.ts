import { CSSProperties } from '@linaria/core';

export { canUseDOM } from './canUseDOM';
export { extractTextFrom } from './extractTextFrom';
export { getSizeValueFromProp } from './getSizeValueFromProp';
export { IS_REACT_18, safeUseId } from './react';
export { isNumber } from './isNumber';
export { mergeRefs, setRefList } from './setRefList';
export { isEmpty } from './isEmpty';
export { createEvent } from './createEvent';
export * as constants from './constants';
export * from './getPopoverPlacement';
export { noop } from './noop';
export { getHeightAsNumber } from './getHeightAsNumber';

export const cx = (...classes: (string | boolean | undefined)[]) => classes.filter((classItem) => classItem).join(' ');

export const composableStyle = (s: TemplateStringsArray, ...expr: Array<string | number | CSSProperties>): string => {
    let res = '';
    for (let i = 0; i < Math.max(s.length, expr.length); ++i) {
        res += s[i] ?? '';
        res += expr[i] ?? '';
    }

    return res;
};

export { fixedForwardRef } from './fixedForwardRef';
