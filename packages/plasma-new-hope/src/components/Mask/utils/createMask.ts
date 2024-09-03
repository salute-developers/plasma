import type { CreateInputArgs, InputValueInfo } from '../Mask.types';

import { defaultFormatChars } from './constants';
import { Mask } from './mask';
import { removeSelectedRange } from './selection';

export const defaults = {
    maskFormat: defaultFormatChars,
    maskChar: '',
    showMask: false,
    removeSelectedRange,
    showPrefix: false,
};

export const createMask = (params: CreateInputArgs): Mask => {
    const { maskString, showPrefix = defaults.showPrefix, maskChar = defaults.maskChar, reformat } = params;
    let resReformat = reformat;

    if (!reformat && !params.mask) {
        resReformat = (args) => {
            const str = (args.value as InputValueInfo[]).map((item) => item.char).join('');
            return {
                value: args.value,
                visibleValue: str,
                maskedValue: str,
                selection: args.selection,
            };
        };
    } else if (reformat && params.mask) {
        params.mask = undefined;
    }

    if (maskString && maskString.length !== params?.mask?.length) {
        throw new Error('maskString должна быть такой же длины, как и mask');
    }

    if (maskChar.length > 1) {
        throw new Error('maskChar должен содержать только 1 символ');
    }

    const mask = new Mask(showPrefix, maskChar, maskString, resReformat);

    mask.updateMask(params.mask);

    return mask;
};
