import React, { forwardRef, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import cls from 'classnames';
import type { ChangeEvent, KeyboardEvent, ClipboardEvent } from 'react';
import type { RootProps } from 'src/engines';
import { useDidMountEffect } from 'src/hooks';
import { getSizeValueFromProp } from 'src/utils';

import { useCodeHook } from '../../hooks';

import type { CodeFieldProps } from './CodeField.types';
import { BACKSPACE_KEY, FORBIDDEN_KEYS, ONLY_DIGITS_PATTERN } from './utils/constants';
import {
    getCodeValue,
    getFieldPattern,
    getPlaceholderValue,
    handleCodeError,
    handleItemError,
    isWebOTPSupported,
} from './utils';
import { classes } from './CodeField.tokens';
import { base, CaptionWrapper, CodeGroup, CodeWrapper, HiddenInput, ItemInput, Separator } from './CodeField.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as shapeCSS } from './variations/_shape/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { useWebOTP } from './hooks/useWebOTP';

export const codeFieldRoot = (Root: RootProps<HTMLDivElement, CodeFieldProps>) =>
    forwardRef<HTMLInputElement, CodeFieldProps>(
        (
            {
                className,
                value: outerValue,
                placeholder,
                autoFocus,
                codeLength = 6,
                caption,
                captionAlign = 'left',
                width,
                shape = 'default',
                view,
                size,
                disabled,
                isError,
                allowedSymbols = ONLY_DIGITS_PATTERN,
                itemErrorBehavior = 'remove-symbol',
                codeErrorBehavior = 'remove-code',
                autoComplete = 'one-time-code',
                setIsError,
                onChange,
                onFullCodeEnter,
                ...rest
            },
            ref,
        ) => {
            const [innerValue, setInnerValue] = useState<Array<string>>(getCodeValue(codeLength, ''));
            const code = typeof outerValue === 'string' ? getCodeValue(codeLength, outerValue) : innerValue;

            const [originalValue, setOriginalValue] = useState<string>(code.join(''));

            const inputRefs = useRef<Array<HTMLInputElement>>([]);
            const inputContainerRef = useRef<HTMLDivElement | null>(null);
            const captionRef = useRef<HTMLDivElement | null>(null);
            const autocompleteRef = useRef<HTMLInputElement | null>(null);

            const fieldPattern = getFieldPattern(allowedSymbols);
            const placeholderValue = getPlaceholderValue(codeLength, placeholder);
            const parts = codeLength === 6 ? 2 : 1;

            const widthValue = width ? getSizeValueFromProp(width, 'rem') : undefined;
            const isWebOTPEnabled = autoComplete === 'one-time-code' && !disabled && isWebOTPSupported();

            const getLastActiveIndex = () => {
                if (code.length && code.length < codeLength) {
                    return code.length;
                }

                const lastEmptyIndex = code.findIndex((digit) => digit === '');
                return lastEmptyIndex >= 0 ? lastEmptyIndex : codeLength - 1;
            };

            const codeSetter = (newCode: Array<string>) => {
                const originalCode = newCode.join('');

                setInnerValue(getCodeValue(codeLength, originalCode));
                setOriginalValue(originalCode);

                if (onChange) {
                    onChange(originalCode);
                }
            };

            useWebOTP({
                codeString: originalValue,
                enableSMSAutoRead: autoComplete === 'one-time-code',
                disabled: Boolean(disabled),
                codeLength,
                codeSetter,
                onFullCodeEnter,
            });

            const handleClick = () => {
                if (disabled) {
                    return;
                }

                const lastActiveIndex = getLastActiveIndex();

                if (inputRefs.current[lastActiveIndex]) {
                    inputRefs.current[lastActiveIndex].focus();
                }
            };

            const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
                if (disabled) {
                    return;
                }

                const { key } = event;
                if (FORBIDDEN_KEYS.includes(key)) {
                    event.preventDefault();

                    return;
                }

                if (key === BACKSPACE_KEY) {
                    if (index > 0) {
                        const newCode = [...code];

                        newCode[index] = '';

                        if (index >= codeLength - 1 && code[index]) {
                            codeSetter(newCode);
                            return;
                        }

                        if (!code[index]) {
                            newCode[index - 1] = '';
                            inputRefs.current[index - 1]?.focus();
                        }

                        inputRefs.current[index]?.classList.remove(classes.itemError);
                        codeSetter(newCode);
                    }
                }
            };

            const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
                if (disabled) {
                    return;
                }

                const rawSymbol = event.currentTarget.value;
                const symbol = rawSymbol.charAt(rawSymbol.length - 1);
                const newCode = [...code];

                inputRefs.current[index]?.classList.remove(classes.itemError);
                if (isError) {
                    captionRef.current?.classList.remove(classes.captionError);

                    if (codeErrorBehavior === 'keep') {
                        inputContainerRef.current?.classList.remove(classes.codeError, classes.codeErrorAnimation);
                    }

                    if (setIsError) {
                        setIsError(false);
                    }
                }

                if (!symbol) {
                    return;
                }

                if (!fieldPattern) {
                    newCode[index] = symbol;
                    codeSetter(newCode);

                    if (symbol && index < codeLength - 1) {
                        inputRefs.current[index + 1]?.focus();
                    }

                    return;
                }

                if (fieldPattern.test(symbol)) {
                    newCode[index] = symbol.charAt(symbol.length - 1);
                    codeSetter(newCode);

                    if (index < codeLength - 1) {
                        inputRefs.current[index + 1]?.focus();
                    }
                } else {
                    newCode[index] = symbol.charAt(symbol.length - 1);

                    handleItemError({
                        currentSymbol: symbol,
                        itemErrorBehavior,
                        index,
                        newCode,
                        inputRefs,
                        setInnerValue,
                        codeSetter,
                        onChange,
                    });
                }
            };

            const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
                const newCode = [...code];

                if (disabled) {
                    return;
                }

                event.preventDefault();

                const rawData = event.clipboardData.getData('text/plain');

                const pastedData = (fieldPattern
                    ? rawData
                          .split('')
                          .map((symb) => symb.match(fieldPattern)?.[0] || '')
                          .filter(Boolean) || []
                    : rawData.split('')
                ).slice(0, codeLength);

                pastedData.forEach((element, index) => {
                    newCode[index] = element;
                });

                const activeIndex = Math.min(pastedData.length, codeLength - 1);
                inputRefs.current[activeIndex]?.focus();

                codeSetter(newCode);
            };

            const handleFullCodeEnter = useCallback((fullCode: string) => {
                if (onFullCodeEnter) {
                    onFullCodeEnter(fullCode);
                }
            }, []);

            useCodeHook({
                inputRefs,
                codeLength,
                disabled,
                autoFocus,
                originalValue,
                getLastActiveIndex,
                handleFullCodeEnter,
            });

            useDidMountEffect(() => {
                if (isError) {
                    handleCodeError({
                        codeLength,
                        codeErrorBehavior,
                        currentCode: code,
                        inputRefs,
                        inputContainerRef,
                        captionRef,
                        setInnerValue,
                        codeSetter,
                    });
                }
            }, [isError]);

            useEffect(() => {
                if (disabled || !autocompleteRef.current) {
                    return;
                }

                const autocompleteCode = autocompleteRef.current.value.split('');
                codeSetter(autocompleteCode);
            }, [autocompleteRef.current?.value, disabled]);

            return (
                <>
                    <Root
                        ref={ref}
                        view={view}
                        size={size}
                        shape={shape}
                        disabled={disabled}
                        onClick={handleClick}
                        className={cls(className, {
                            [classes.captionAlignLeft]: captionAlign === 'left',
                        })}
                        {...(!isWebOTPEnabled && { ...rest })}
                    >
                        <CodeWrapper ref={inputContainerRef}>
                            {[...Array(parts)].map((_, partIndex) => (
                                <Fragment key={partIndex}>
                                    <CodeGroup role="group">
                                        {[...Array(codeLength / parts)].map((_, i) => {
                                            const inputCorrectIndex = i + (codeLength / parts) * partIndex;

                                            return (
                                                <ItemInput
                                                    key={partIndex + i + partIndex * i}
                                                    ref={(element: HTMLInputElement) => {
                                                        inputRefs.current[inputCorrectIndex] = element;
                                                    }}
                                                    className={cls({
                                                        [classes.segmented]: shape === 'segmented',
                                                        [classes.hoverEnabled]:
                                                            !disabled && inputCorrectIndex >= originalValue.length,
                                                    })}
                                                    value={code[inputCorrectIndex] || ''}
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                        handleChange(e, inputCorrectIndex);
                                                    }}
                                                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                                                        handleOnKeyDown(e, inputCorrectIndex);
                                                    }}
                                                    onPaste={handlePaste}
                                                    tabIndex={
                                                        !disabled && originalValue.length === inputCorrectIndex ? 0 : -1
                                                    }
                                                    {...(placeholderValue && {
                                                        placeholder: placeholderValue[inputCorrectIndex],
                                                    })}
                                                />
                                            );
                                        })}
                                    </CodeGroup>
                                    {partIndex !== parts - 1 && <Separator />}
                                </Fragment>
                            ))}
                        </CodeWrapper>

                        {caption && (
                            <CaptionWrapper ref={captionRef} captionAlign={captionAlign} widthValue={widthValue}>
                                {caption}
                            </CaptionWrapper>
                        )}

                        {isWebOTPEnabled && (
                            <HiddenInput ref={autocompleteRef} autoComplete={autoComplete} tabIndex={-1} {...rest} />
                        )}
                    </Root>
                </>
            );
        },
    );

export const codeFieldConfig = {
    name: 'CodeField',
    tag: 'div',
    layout: codeFieldRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        shape: {
            css: shapeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
        shape: 'default',
    },
};
