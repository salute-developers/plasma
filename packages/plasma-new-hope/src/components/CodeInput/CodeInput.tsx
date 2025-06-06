import React, { forwardRef, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import cls from 'classnames';
import type { ChangeEvent, KeyboardEvent, ClipboardEvent } from 'react';
import type { RootProps } from 'src/engines';
import { useDidMountEffect } from 'src/hooks';
import { getSizeValueFromProp } from 'src/utils';

import type { CodeInputProps } from './CodeInput.types';
import { BACKSPACE_KEY, FORBIDDEN_KEYS, ONLY_DIGITS_PATTERN } from './utils/constants';
import {
    getCodeInputViewClass,
    getCodeValue,
    getFieldPattern,
    getPlaceholderValue,
    handleCodeError,
    handleItemError,
} from './utils';
import { classes } from './CodeInput.tokens';
import {
    base,
    CaptionWrapper,
    CodeGroup,
    CodeWrapper,
    ItemInput,
    Separator,
    ItemWrapper,
    ItemCircle,
} from './CodeInput.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';

export const codeInputRoot = (Root: RootProps<HTMLDivElement, CodeInputProps>) =>
    forwardRef<HTMLInputElement, CodeInputProps>(
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
                view,
                size,
                screen = 'medium',
                hidden,
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
            const [code, setCode] = useState<Array<string>>(getCodeValue(codeLength, outerValue || ''));
            const [originalValue, setOriginalValue] = useState<string>(code.join(''));

            const inputRefs = useRef<Array<HTMLInputElement>>([]);
            const inputContainerRef = useRef<HTMLDivElement | null>(null);
            const captionRef = useRef<HTMLDivElement | null>(null);

            const fieldPattern = getFieldPattern(allowedSymbols);
            const placeholderValue = getPlaceholderValue(codeLength, placeholder);
            const parts = codeLength === 6 ? 2 : 1;

            const viewClass = getCodeInputViewClass(view || 'default');

            const widthValue = width ? getSizeValueFromProp(width, 'rem') : undefined;

            const getLastActiveIndex = () => {
                if (code.length && code.length < codeLength) {
                    return code.length;
                }

                const lastEmptyIndex = code.findIndex((digit) => digit === '');
                return lastEmptyIndex >= 0 ? lastEmptyIndex : codeLength - 1;
            };

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
                    if (index > 0 && code[index] === '') {
                        inputRefs.current[index - 1]?.focus();
                    }
                }
            };

            const codeSetter = (newCode: Array<string>) => {
                setCode(newCode);
                setOriginalValue(newCode.join(''));

                if (onChange) {
                    onChange(newCode.join(''));
                }
            };

            const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
                if (disabled) {
                    return;
                }

                const rawSymbol = event.currentTarget.value;
                const symbol = rawSymbol.charAt(rawSymbol.length - 1);
                handleAddSymbol(symbol, index);
            };

            const handleOnKeyDownCircle = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
                if (disabled) {
                    return;
                }

                const { key } = event;

                if (FORBIDDEN_KEYS.includes(key)) {
                    event.preventDefault();
                    return;
                }

                if (key === BACKSPACE_KEY) {
                    if (index > 0 && code[index] === '') {
                        inputRefs.current[index - 1]?.focus();
                    }
                }

                handleAddSymbol(key, index);
                inputRefs.current[index]?.focus();
            };

            const handleAddSymbol = (symbol: string, index: number) => {
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

                if (!fieldPattern) {
                    newCode[index] = symbol;
                    codeSetter(newCode);

                    if (symbol && index < codeLength - 1) {
                        inputRefs.current[index + 1]?.focus();
                    }

                    return;
                }

                if (!symbol) {
                    newCode[index] = '';
                    codeSetter(newCode);

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
                        inputContainerRef,
                        setCode,
                        codeSetter,
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

            useEffect(() => {
                inputRefs.current = inputRefs.current.slice(0, codeLength);
            }, [codeLength]);

            useEffect(() => {
                if (autoFocus && !disabled) {
                    const lastActiveIndex = getLastActiveIndex();

                    inputRefs.current[lastActiveIndex]?.focus();
                }
            }, [autoFocus]);

            useDidMountEffect(() => {
                if (handleFullCodeEnter && originalValue.length === codeLength) {
                    handleFullCodeEnter(originalValue);
                }
            }, [originalValue, handleFullCodeEnter]);

            useDidMountEffect(() => {
                if (isError) {
                    handleCodeError({
                        codeLength,
                        codeErrorBehavior,
                        currentCode: code,
                        inputRefs,
                        inputContainerRef,
                        captionRef,
                        setCode,
                        codeSetter,
                    });
                }
            }, [isError]);

            return (
                <Root
                    ref={ref}
                    view={view}
                    size={size}
                    disabled={disabled}
                    screen={screen}
                    onClick={handleClick}
                    className={cls(className, viewClass, {
                        [classes.captionAlignLeft]: captionAlign === 'left',
                    })}
                    {...rest}
                >
                    <CodeWrapper ref={inputContainerRef}>
                        {[...Array(parts)].map((_, partIndex) => (
                            <Fragment key={partIndex}>
                                <CodeGroup role="group">
                                    {[...Array(codeLength / parts)].map((_, i) => {
                                        const inputCorrectIndex = i + (codeLength / parts) * partIndex;

                                        return (
                                            <ItemWrapper key={partIndex + i + partIndex * i}>
                                                {(!code[inputCorrectIndex] ||
                                                    (!!code[inputCorrectIndex] && hidden)) && (
                                                    <ItemCircle
                                                        role="tab"
                                                        tabIndex={originalValue.length === inputCorrectIndex ? 0 : -1}
                                                        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
                                                            handleOnKeyDownCircle(e, inputCorrectIndex);
                                                        }}
                                                        className={cls([
                                                            !!code[inputCorrectIndex] && hidden
                                                                ? classes.itemCirlceFilled
                                                                : '',
                                                            `${classes.itemCircle}-${inputCorrectIndex}`,
                                                        ])}
                                                    />
                                                )}
                                                <ItemInput
                                                    ref={(element: HTMLInputElement) => {
                                                        inputRefs.current[inputCorrectIndex] = element;
                                                    }}
                                                    className={cls({
                                                        [classes.hoverEnabled]:
                                                            inputCorrectIndex >= originalValue.length,
                                                    })}
                                                    hide={hidden}
                                                    value={code[inputCorrectIndex] || ''}
                                                    tabIndex={originalValue.length === inputCorrectIndex ? 0 : -1}
                                                    autoComplete={autoComplete}
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                        handleChange(e, inputCorrectIndex);
                                                    }}
                                                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                                                        handleOnKeyDown(e, inputCorrectIndex);
                                                    }}
                                                    onPaste={handlePaste}
                                                    {...(placeholderValue && {
                                                        placeholder: placeholderValue[inputCorrectIndex],
                                                    })}
                                                />
                                            </ItemWrapper>
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
                </Root>
            );
        },
    );

export const codeInputConfig = {
    name: 'CodeInput',
    tag: 'div',
    layout: codeInputRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
