import type { MaskInfo, MaskItemsMap } from '../Mask.types';

import { escapeChar } from './constants';

export const parseMask = (mask?: string, format?: MaskItemsMap): Array<MaskInfo> => {
    if (!mask) {
        return [];
    }

    const stack: Array<MaskInfo> = [];

    let escape = false;

    mask.split('').forEach((maskChar) => {
        let item: MaskInfo | undefined = format?.[maskChar];

        if (escape && item) {
            item = undefined;
            escape = false;
        }

        if (!item) {
            if (!escape && maskChar === escapeChar) {
                escape = true;
                return;
            }

            escape = false;
            stack.push({
                char: maskChar,
            });
            return;
        }

        if (item.regexp) {
            stack.push(item);
        }
    });

    return stack;
};
