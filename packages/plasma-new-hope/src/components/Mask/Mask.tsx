import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, FC, InputHTMLAttributes, FocusEvent } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { useDidMountEffect } from '../../hooks';

import type { MaskProps } from './Mask.types';
import { createMask, defaults } from './utils/createMask';
import { keyboardCode } from './utils/constants';
import type { Mask } from './utils/mask';

export const composeMask = <T extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>(InputComponent: FC<T>) =>
    forwardRef<HTMLInputElement, T & MaskProps>((props, outerRef) => {
        const {
            mask: maskValue,
            maskChar,
            alwaysShowMask,
            maskString,
            showPrefix,
            value,
            defaultValue,
            showMask: showMaskedValue,
            onChange,
            onBlur,
            onFocus,
            reformat,
            ...rest
        } = props;

        const [showMask, setShowMask] = useState(alwaysShowMask || showMaskedValue);
        const [innerValue, setInnerValue] = useState('');

        const mask = useMemo<Mask>(
            () =>
                createMask({
                    value: String(value) || String(defaultValue) || '',
                    mask: maskValue,
                    maskChar: maskChar || defaults.maskChar,
                    maskString,
                    showPrefix: showPrefix || defaults.showPrefix,
                    reformat,
                }),
            [],
        );

        const canSetSelection = useRef(false);
        const inputRef = useRef<HTMLInputElement | null>(null);
        const innerRef = useForkRef(inputRef, outerRef);

        const getSelection = () => {
            mask.setSelection = {
                start: inputRef?.current?.selectionStart || 0,
                end: inputRef?.current?.selectionEnd || 0,
            };
        };

        const setSelection = () => {
            if (!canSetSelection.current) {
                return;
            }
            const selection = mask.getSelection;
            inputRef?.current?.setSelectionRange(selection.start, selection.end);

            setTimeout(() => inputRef?.current?.setSelectionRange(selection.start, selection.end), 0);
        };

        const showValue = () => {
            if (!inputRef?.current) {
                return;
            }

            if (showMask && (canSetSelection.current || alwaysShowMask)) {
                inputRef.current.value = mask.getState.maskedValue;
                setInnerValue(mask.getState.maskedValue);
                return;
            }

            setInnerValue(mask.getState.visibleValue);
            inputRef.current.value = mask.getState.visibleValue;
        };

        const keyPressPropName = () => {
            if (typeof navigator !== 'undefined' && navigator.userAgent.match(/Android/i)) {
                return 'onBeforeInput';
            }
            return 'onKeyPress';
        };

        const dispatchEvent = (e: KeyboardEvent | ChangeEvent | ClipboardEvent) => {
            const { maskedValue, visibleValue } = mask.getState;

            if (onChange) {
                onChange(e as ChangeEvent<HTMLInputElement>, { maskedValue, value: visibleValue });
            }
        };

        const onPaste = (e: ClipboardEvent) => {
            e.preventDefault();
            getSelection();

            if (!e?.clipboardData) {
                return;
            }

            mask.paste(e.clipboardData.getData('Text'));
            setTimeout(setSelection, 0);

            dispatchEvent(e);
        };

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            let currentValue;
            if (showMask && (canSetSelection.current || alwaysShowMask)) {
                currentValue = mask.getState.maskedValue;
            } else {
                currentValue = mask.getState.visibleValue;
            }

            if (e.target.value !== currentValue) {
                getSelection();
                mask.updateValue(e.target.value);

                setTimeout(setSelection, 0);
            }
            dispatchEvent(e);
        };

        const onKeyPress = (e: KeyboardEvent) => {
            if (e.metaKey || e.altKey || e.ctrlKey || e.key === 'Enter') {
                return;
            }

            e.preventDefault();
            getSelection();
            mask.input(e.key || String.fromCharCode(e.which));
            setSelection();
            dispatchEvent(e);
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.code === keyboardCode.Backspace) {
                e.preventDefault();
                getSelection();
                mask.removePreviousOrSelected();

                setSelection();

                dispatchEvent(e);
            }

            if (e.code === keyboardCode.Delete) {
                e.preventDefault();
                getSelection();
                mask.removeNextOrSelected();

                setSelection();

                dispatchEvent(e);
            }
        };

        const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
            canSetSelection.current = true;

            if (onFocus) {
                onFocus(e);
            }
        };

        const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
            canSetSelection.current = false;

            if (onBlur) {
                onBlur(e);
            }
        };

        const keyPressEvent = { [keyPressPropName()]: onKeyPress };

        useDidMountEffect(() => {
            setShowMask(alwaysShowMask || showMask);
        }, [alwaysShowMask, showMask]);

        useDidMountEffect(() => {
            if (reformat) {
                mask.updateReformat(reformat);
            }
        }, [reformat]);

        useDidMountEffect(() => {
            mask.updateMask(String(mask));
        }, [mask]);

        useDidMountEffect(() => {
            mask.updateMaskString(String(maskString));
        }, [maskString]);

        useDidMountEffect(() => {
            mask.updateMaskChar(String(maskChar));
        }, [maskChar]);

        useEffect(() => {
            mask.updateValue(String(value));
        }, [value]);

        useEffect(() => {
            showValue();
        }, [showValue, mask]);

        useEffect(() => {
            const subscriber = () => {
                showValue();
                setSelection();
            };

            mask.subscribe(subscriber);

            return () => {
                mask.unsubscribe(subscriber);
            };
        }, [mask, showValue, setSelection]);

        return (
            <InputComponent
                {...(rest as T)}
                onChange={handleChange}
                onKeyDown={onKeyDown}
                onPaste={onPaste}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...keyPressEvent}
                value={innerValue}
                ref={innerRef}
                autoComplete="off"
            />
        );
    });
