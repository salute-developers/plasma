import type { InputState, InputValueInfo, MaskInfo, SelectRange } from '../Mask.types';

import { charType } from './constants';
import { processMask } from './processMask';

type ProcessInputArgs = {
    data: Array<InputValueInfo>;
    selection: SelectRange;
    mask: Array<MaskInfo>;
    maskChar?: string;
    maskString?: string;
    showPrefix?: boolean;
    input?: string;
};

export const processInput = (args: ProcessInputArgs): InputState => {
    const { data, input = '', selection, mask, maskChar = '', maskString = '', showPrefix } = args;

    const { value, maskedValue, inputValuesApplied } = processMask(data, mask, input, maskChar, maskString, selection);

    const selectionPosition = selection.start + inputValuesApplied;

    let bound = value.length - 1;
    let charsCount = 0;
    while (bound >= 0 && value[bound].type !== charType.User) {
        if (value[bound].type === charType.Mask) {
            charsCount = 0;
        }
        if (value[bound].type === charType.Char) {
            charsCount++;
        }
        bound--;
    }
    if (showPrefix || bound >= 0 || (input && input.trim())) {
        bound += charsCount;
    }

    let visibleValue = '';
    for (let i = 0; i <= bound; i++) {
        visibleValue += value[i].char;
    }

    return {
        value,
        visibleValue,
        maskedValue,
        selection: {
            start: selectionPosition,
            end: selectionPosition,
        },
    };
};
