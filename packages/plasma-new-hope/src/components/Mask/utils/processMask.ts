import type { MaskInfo, SelectRange, InputValueInfo } from '../Mask.types';

import { charType } from './constants';

export const processMask = (
    data: Array<InputValueInfo>,
    mask: Array<MaskInfo>,
    input: string,
    maskChar: string,
    maskString: string,
    selection: SelectRange,
) => {
    const value: Array<InputValueInfo> = [];
    let valueIndex = 0;
    let pastedIndex = 0;
    let maskedValue = '';
    let inputValuesApplied = 0;

    const processMaskPartAsChar = (maskPart: MaskInfo, pastedValuesStack: string, item: InputValueInfo | null) => {
        if (pastedValuesStack && pastedValuesStack[0] === maskPart.char) {
            pastedIndex++;
        } else if ((item && (item.char === maskPart.char || item.type !== charType.User)) || input) {
            valueIndex++;
        }

        value.push({
            char: String(maskPart.char),
            type: charType.Char,
        });

        if (pastedValuesStack) {
            inputValuesApplied++;
        }

        maskedValue += maskPart.char;
    };

    const processMaskPartAsRegExp = (
        maskPart: MaskInfo,
        maskIndex: number,
        pastedValuesStack: string,
        item: InputValueInfo | null,
    ) => {
        let part;

        if (pastedValuesStack) {
            let i = 0;
            while (!maskPart?.regexp?.test(pastedValuesStack[i]) && pastedValuesStack.length > i) {
                i++;
                pastedIndex++;
            }
            if (pastedValuesStack.length > i) {
                pastedIndex++;
                inputValuesApplied++;

                valueIndex++;

                part = pastedValuesStack[i];
                value.push({
                    char: part,
                    type: charType.User,
                });
                maskedValue += part;
            }
        }

        if (part) {
            return;
        }

        if (item && item.type === charType.Char && data.length > valueIndex + 1) {
            valueIndex++;
            processMaskItem(maskPart, maskIndex);
            return;
        }

        if (item && item.type === charType.User && maskPart?.regexp?.test(item.char)) {
            value.push({
                char: item.char,
                type: charType.User,
            });
            maskedValue += item.char;
            valueIndex++;

            return;
        }

        part = maskString ? maskString[maskIndex] : maskChar;

        value.push({
            char: part,
            type: charType.Mask,
        });

        if (data.length > maskIndex) {
            valueIndex++;
        }

        maskedValue += part;
    };

    const processMaskItem = (maskPart: MaskInfo, maskIndex: number) => {
        const item = data.length > valueIndex ? data[valueIndex] : null;
        let pastedValuesStack = '';

        if (selection.start <= maskIndex && pastedIndex < input.length) {
            pastedValuesStack = input.slice(pastedIndex);
        }

        if (maskPart.char) {
            return processMaskPartAsChar(maskPart, pastedValuesStack, item);
        }

        if (maskPart.regexp) {
            return processMaskPartAsRegExp(maskPart, maskIndex, pastedValuesStack, item);
        }
    };

    mask.forEach((maskPart, maskIndex) => {
        processMaskItem(maskPart, maskIndex);
    });

    return {
        value,
        maskedValue,
        inputValuesApplied,
    };
};
