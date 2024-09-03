import type { InputValueInfo, SelectRange } from '../Mask.types';

import { charType } from './constants';

type RemoveSelectionRangeArgs = {
    value: Array<InputValueInfo>;
    selection: SelectRange;
    maskChar: string;
    maskString: string;
};

const copyMaskChar = (count: number, maskChar: string): Array<InputValueInfo> => {
    const res: Array<InputValueInfo> = [];
    for (let i = 0; i < count; i++) {
        res.push({
            char: maskChar,
            type: charType.Mask,
        });
    }
    return res;
};

const pasteMaskSymbols = (maskString: string, maskChar: string, selection: SelectRange): Array<InputValueInfo> => {
    if (maskString) {
        const res: Array<InputValueInfo> = [];
        for (let i = selection.start; i < selection.end; i++) {
            res.push({
                char: maskString[i],
                type: charType.Mask,
            });
        }
        return res;
    }

    return copyMaskChar(selection.end - selection.start, maskChar);
};

export const removeSelectedRange = (args: RemoveSelectionRangeArgs): Array<InputValueInfo> => {
    const { value, selection, maskChar, maskString } = args;

    if (selection.end < selection.start) {
        const tmp = selection.end;
        selection.end = selection.start;
        selection.start = tmp;
    }

    if (selection.start === selection.end) {
        return value;
    }

    if (value.length > selection.start) {
        return value
            .slice(0, selection.start)
            .concat(pasteMaskSymbols(maskString, maskChar, selection), value.slice(selection.end, value.length));
    }

    return value;
};
