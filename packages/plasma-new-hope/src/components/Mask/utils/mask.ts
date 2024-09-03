import type { InputState, InputValueInfo, ReformatFn, MaskInfo, MaskItemsMap, SelectRange } from '../Mask.types';

import { charType, defaultFormatChars } from './constants';
import { parseMask } from './parseMask';
import { processInput } from './processInput';
import { removeSelectedRange } from './selection';

/**
 * Copyright (c) 2018 Nikita Mostovoy.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export class Mask {
    selection: SelectRange;

    value: Array<InputValueInfo> | string;

    maskedValue: string;

    visibleValue: string;

    mask: Array<MaskInfo>;

    maskChar: string;

    maskFormatMap: MaskItemsMap;

    showPrefix: boolean;

    callbacks: Array<(state: InputState) => any>;

    maskString?: string;

    reformat?: ReformatFn;

    constructor(showPrefix: boolean, maskChar: string, maskString?: string, reformat?: ReformatFn) {
        this.value = '';
        this.mask = [];
        this.maskedValue = '';
        this.visibleValue = '';
        this.selection = { start: 0, end: 0 };
        this.callbacks = [];

        this.maskFormatMap = this.parseMaskFormat;
        this.showPrefix = showPrefix;
        this.maskChar = maskChar;
        this.maskString = maskString;
        this.reformat = reformat;
    }

    private get parseMaskFormat() {
        return defaultFormatChars.reduce((acc, current) => {
            acc[String(current.str)] = current;
            return acc;
        }, {} as MaskItemsMap);
    }

    get getSelection() {
        const { start, end } = this.selection;

        return { start, end };
    }

    get getState() {
        return {
            value: this.value,
            maskedValue: this.maskedValue,
            visibleValue: this.visibleValue,
            selection: this.selection,
        };
    }

    set setSelection(newSelection: SelectRange) {
        this.selection = newSelection;
    }

    set setShowStartChars(show: boolean) {
        this.showPrefix = show;
    }

    updateMask(newMask?: string) {
        this.mask = parseMask(newMask, this.maskFormatMap);
        this.updateValue(this.value);
    }

    updateMaskChar(newMaskChar: string) {
        if (this.maskChar.length > 1) {
            throw new Error('maskChar должен содержать только 1 символ');
        }

        this.maskChar = newMaskChar;

        this.updateValue(this.value);
    }

    updateMaskString(newMaskString: string) {
        if (newMaskString && newMaskString.length !== this.mask.length) {
            throw new Error('maskString должна иметь такую же длину, как и mask');
        }

        this.maskString = newMaskString;

        this.updateValue(this.value);
    }

    updateReformat(newReformat: ReformatFn) {
        this.reformat = newReformat;
        this.updateValue(this.value);
    }

    updateValue(data: string | Array<InputValueInfo>) {
        if (this.reformat) {
            const result = this.reformat({
                value: data,
                selection: this.selection,
            });

            return this.applyChanges(result);
        }

        const dataList: Array<InputValueInfo> = Array.isArray(data)
            ? data
            : Array.from(data).reduce((acc, char) => {
                  acc.push({ char, type: charType.User });
                  return acc;
              }, [] as Array<InputValueInfo>);

        const result = processInput({
            data: dataList,
            selection: this.selection,
            mask: this.mask,
            maskChar: this.maskChar,
            maskString: this.maskString,
            showPrefix: this.showPrefix,
        });

        this.applyChanges(result);
    }

    removePreviousOrSelected() {
        const { start, end } = this.selection;
        if (start === end) {
            const newStart = end - 1 < 0 ? 0 : end - 1;
            this.setSelection = { start: newStart, end };
        }

        this.input('');
    }

    removeNextOrSelected() {
        const { start, end } = this.selection;
        if (start === end) {
            this.setSelection = { start, end: end + 1 };
        }

        this.input('');
    }

    paste(value: string) {
        this.input(value);
    }

    input(input: string) {
        if (this.reformat) {
            const result = this.reformat({ value: this.value, input, selection: this.selection });

            return this.applyChanges(result);
        }

        const tmpValue = removeSelectedRange({
            value: this.value as InputValueInfo[],
            selection: this.selection,
            maskChar: this.maskChar,
            maskString: String(this.maskString),
        });

        this.selection.end = this.selection.start;

        const result = processInput({
            data: tmpValue,
            input,
            selection: this.selection,
            mask: this.mask,
            maskChar: this.maskChar,
            maskString: this.maskString,
            showPrefix: this.showPrefix,
        });

        this.applyChanges(result);
    }

    applyChanges(result: InputState) {
        const oldMaskedValue = this.maskedValue;
        const oldVisibleValue = this.visibleValue;
        const oldSelection = this.selection;

        this.value = result.value;
        this.maskedValue = result.maskedValue;
        this.visibleValue = result.visibleValue;
        this.setSelection = result.selection;

        if (
            oldMaskedValue !== this.maskedValue ||
            oldVisibleValue !== this.visibleValue ||
            oldSelection.start !== this.selection.start ||
            oldSelection.end !== this.selection.end
        ) {
            this.notify();
        }
    }

    subscribe(callback: (state: InputState) => any) {
        this.callbacks.push(callback);
    }

    unsubscribe(callback: (state: InputState) => any) {
        this.callbacks = this.callbacks.filter((item) => item !== callback);
    }

    notify() {
        const state = this.getState;
        this.callbacks.forEach((callback) => {
            callback(state);
        });
    }
}
