import React, { forwardRef, Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cls from 'classnames';
import type { ChangeEvent, ClipboardEvent, KeyboardEvent, MouseEvent } from 'react';
import type { RootProps } from 'src/engines';
import { useDidMountEffect, useForkRef } from 'src/hooks';
import { getSizeValueFromProp } from 'src/utils';

import type { CodeFieldProps } from './CodeField.types';
import { FORBIDDEN_KEYS, ONLY_DIGITS_PATTERN } from './utils/constants';
import { getCodeValue, getFieldPattern, getPlaceholderValue, handleCodeError, handleItemError } from './utils';
import { classes } from './CodeField.tokens';
import {
    base,
    CaptionWrapper,
    CodeGroup,
    CodeWrapper,
    ItemCaret,
    ItemInput,
    ItemPlaceholder,
    ItemValue,
    NativeInput,
    Separator,
} from './CodeField.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as shapeCSS } from './variations/_shape/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { useWebOTP } from './hooks/useWebOTP';

export const codeFieldRoot = (Root: RootProps<HTMLDivElement, CodeFieldProps>) =>
    forwardRef<HTMLInputElement, CodeFieldProps>(
        (
            {
                id,
                className,
                style,
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
                autoCapitalize,
                autoCorrect,
                spellCheck,
                inputMode = 'numeric',
                name,
                form,
                required,
                'aria-label': ariaLabel,
                'aria-describedby': ariaDescribedBy,
                'aria-labelledby': ariaLabelledBy,
                setIsError,
                onChange,
                onFullCodeEnter,
                onKeyDown,
                onClick: onRootClick,
                ...rest
            },
            ref,
        ) => {
            const [innerValue, setInnerValue] = useState<Array<string>>(getCodeValue(codeLength, ''));
            const code = typeof outerValue === 'string' ? getCodeValue(codeLength, outerValue) : innerValue;

            const [innerOriginalValue, setInnerOriginalValue] = useState<string>(code.join(''));
            const [activeIndex, setActiveIndex] = useState<number | null>(null);
            const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
            const [animatedItemErrorIndex, setAnimatedItemErrorIndex] = useState<number | null>(null);
            const [activeErrorAnimations, setActiveErrorAnimations] = useState(0);

            const nativeInputRef = useRef<HTMLInputElement | null>(null);
            const inputContainerRef = useRef<HTMLDivElement | null>(null);
            const captionRef = useRef<HTMLDivElement | null>(null);
            const onFullCodeEnterRef = useRef(onFullCodeEnter);
            const activeErrorAnimationsRef = useRef(0);
            const inputForkRef = useForkRef(nativeInputRef, ref);

            /**
             * Храним актуальный пользовательский колбэк в ref, чтобы изменение ссылки на него
             * не запускало эффект завершения ввода повторно с тем же кодом.
             */
            onFullCodeEnterRef.current = onFullCodeEnter;

            const fieldPattern = useMemo(() => getFieldPattern(allowedSymbols), [allowedSymbols]);
            const placeholderValue = getPlaceholderValue(codeLength, placeholder);
            const parts = codeLength === 6 ? 2 : 1;
            const codeValue = code.join('');

            const widthValue = width ? getSizeValueFromProp(width, 'rem') : undefined;
            const isErrorAnimationPlaying = activeErrorAnimations > 0;

            const startErrorAnimation = () => {
                activeErrorAnimationsRef.current += 1;
                setActiveErrorAnimations(activeErrorAnimationsRef.current);
            };

            const finishErrorAnimation = () => {
                activeErrorAnimationsRef.current = Math.max(0, activeErrorAnimationsRef.current - 1);
                setActiveErrorAnimations(activeErrorAnimationsRef.current);
            };

            const codeSetter = (newCode: Array<string>) => {
                const originalCode = newCode.join('').slice(0, codeLength);

                setInnerValue(getCodeValue(codeLength, originalCode));
                setInnerOriginalValue(originalCode);

                if (onChange) {
                    onChange(originalCode);
                }
            };

            const isSymbolAllowed = (symbol: string) => {
                if (!fieldPattern) {
                    return true;
                }

                /**
                 * NOTE:
                 * RegExp с флагами g или y хранит позицию следующего поиска в lastIndex.
                 * Сбрасываем ее, чтобы каждый символ проверялся с начала строки,
                 * а результат test() не зависел от предыдущего вызова.
                 */
                fieldPattern.lastIndex = 0;

                return fieldPattern.test(symbol);
            };

            const controlledOriginalValue = codeValue.split('').every(isSymbolAllowed) ? codeValue : '';
            const originalValue = typeof outerValue === 'string' ? controlledOriginalValue : innerOriginalValue;

            const clearErrorState = () => {
                if (!isError) {
                    return;
                }

                captionRef.current?.classList.remove(classes.captionError);
                inputContainerRef.current?.classList.remove(
                    classes.codeError,
                    classes.codeErrorFade,
                    classes.codeErrorAnimation,
                );

                if (setIsError) {
                    setIsError(false);
                }
            };

            /**
             * useCallback предотвращает повторный фокус input, если задан autoFocus.
             */
            const selectLastActiveItem = useCallback(() => {
                const input = nativeInputRef.current;

                if (!input) {
                    return;
                }

                const selectionPosition = Math.min(input.value.length, codeLength);
                const nextActiveIndex = Math.min(selectionPosition, codeLength - 1);

                input.setSelectionRange(selectionPosition, selectionPosition);
                setActiveIndex(nextActiveIndex);
                setSelectedIndex(null);
            }, [codeLength]);

            useWebOTP({
                codeString: codeValue,
                enableSMSAutoRead: autoComplete === 'one-time-code',
                disabled: Boolean(disabled),
                codeLength,
                codeSetter,
            });

            const handleClick = (event: MouseEvent<HTMLDivElement>) => {
                if (onRootClick) {
                    onRootClick(event);
                }

                if (event.defaultPrevented || disabled) {
                    return;
                }

                nativeInputRef.current?.focus();
                selectLastActiveItem();
            };

            const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
                if (disabled || activeErrorAnimationsRef.current > 0) {
                    return;
                }

                const rawValue = event.currentTarget.value.slice(0, codeLength);
                const newCode = rawValue.split('');
                const invalidIndex = newCode.findIndex((symbol) => !isSymbolAllowed(symbol));
                const selectionStart = event.currentTarget.selectionStart ?? rawValue.length;

                clearErrorState();
                setActiveIndex(Math.min(selectionStart, codeLength - 1));
                setSelectedIndex(null);

                if (invalidIndex < 0) {
                    codeSetter(newCode);

                    return;
                }

                handleItemError({
                    itemErrorBehavior,
                    index: invalidIndex,
                    newCode,
                    inputRef: nativeInputRef,
                    setInnerValue,
                    setActiveIndex,
                    setSelectedIndex,
                    codeSetter,
                    onChange,
                    onAnimationStart: (index) => {
                        startErrorAnimation();
                        setAnimatedItemErrorIndex(index);
                    },
                    onAnimationEnd: () => {
                        finishErrorAnimation();
                        setAnimatedItemErrorIndex(null);
                    },
                });
            };

            const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
                if (activeErrorAnimationsRef.current > 0 || (!disabled && FORBIDDEN_KEYS.includes(event.key))) {
                    event.preventDefault();
                }

                if (onKeyDown) {
                    onKeyDown(event);
                }
            };

            const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
                if (disabled) {
                    return;
                }

                event.preventDefault();

                if (activeErrorAnimationsRef.current > 0) {
                    return;
                }

                const rawData = event.clipboardData.getData('text/plain');
                const pastedData = rawData.split('').filter(isSymbolAllowed).slice(0, codeLength);
                const selectionStart = event.currentTarget.selectionStart ?? 0;
                const selectionEnd = event.currentTarget.selectionEnd ?? selectionStart;
                const newValue =
                    pastedData.length === codeLength
                        ? pastedData.join('')
                        : `${codeValue.slice(0, selectionStart)}${pastedData.join('')}${codeValue.slice(selectionEnd)}`;
                const nextValue = newValue.slice(0, codeLength);
                const nextSelection = Math.min(
                    pastedData.length === codeLength ? codeLength : selectionStart + pastedData.length,
                    nextValue.length,
                );

                clearErrorState();
                codeSetter(nextValue.split(''));
                setActiveIndex(Math.min(nextSelection, codeLength - 1));
                setSelectedIndex(null);

                setTimeout(() => {
                    nativeInputRef.current?.setSelectionRange(nextSelection, nextSelection);
                }, 0);
            };

            /**
             * Нормализуем внутреннее значение, если количество ячеек динамически изменилось.
             */
            useEffect(() => {
                setInnerValue((currentCode) => getCodeValue(codeLength, currentCode.join('')));
                setInnerOriginalValue((currentCode) => currentCode.slice(0, codeLength));
            }, [codeLength]);

            /**
             * Переносим фокус на нативный input, при переданном autoFocus.
             */
            useEffect(() => {
                if (autoFocus && !disabled) {
                    nativeInputRef.current?.focus();
                    selectLastActiveItem();
                }
            }, [autoFocus, disabled, selectLastActiveItem]);

            /**
             * Выполняем onFullCodeEnter после пользовательского ввода, вставки,
             * нативной вставки или WebOTP.
             */
            useDidMountEffect(() => {
                if (originalValue.length === codeLength) {
                    onFullCodeEnterRef.current?.(originalValue);
                }
            }, [codeLength, originalValue]);

            /**
             * Запускаем анимацию и очистку значения, при внешней установке error-state.
             */
            useDidMountEffect(() => {
                if (isError) {
                    handleCodeError({
                        codeLength,
                        codeErrorBehavior,
                        currentCode: code,
                        inputRef: nativeInputRef,
                        inputContainerRef,
                        captionRef,
                        setInnerValue,
                        setActiveIndex,
                        setSelectedIndex,
                        codeSetter,
                        onAnimationStart: startErrorAnimation,
                        onAnimationEnd: finishErrorAnimation,
                    });
                }
            }, [isError]);

            return (
                <Root
                    {...rest}
                    view={view}
                    size={size}
                    shape={shape}
                    disabled={disabled}
                    onClick={handleClick}
                    className={cls(className, {
                        [classes.captionAlignLeft]: captionAlign === 'left',
                    })}
                    style={{ ...style }}
                >
                    <CodeWrapper ref={inputContainerRef}>
                        {[...Array(parts)].map((_, partIndex) => (
                            <Fragment key={partIndex}>
                                <CodeGroup aria-hidden="true">
                                    {[...Array(codeLength / parts)].map((_item, i) => {
                                        const inputCorrectIndex = i + (codeLength / parts) * partIndex;
                                        const itemValue = code[inputCorrectIndex] || '';
                                        const isAnimatedItemError = animatedItemErrorIndex === inputCorrectIndex;

                                        return (
                                            <ItemInput
                                                key={inputCorrectIndex}
                                                className={cls({
                                                    [classes.segmented]: shape === 'segmented',
                                                    [classes.itemFocused]: activeIndex === inputCorrectIndex,
                                                    [classes.itemError]:
                                                        isAnimatedItemError ||
                                                        (itemErrorBehavior === 'keep' &&
                                                            Boolean(itemValue) &&
                                                            !isSymbolAllowed(itemValue)),
                                                    [classes.itemErrorAnimation]: isAnimatedItemError,
                                                    [classes.itemErrorFade]:
                                                        isAnimatedItemError && itemErrorBehavior === 'remove-symbol',
                                                    [classes.hoverEnabled]:
                                                        !disabled && inputCorrectIndex >= originalValue.length,
                                                })}
                                                data-code-field-item=""
                                            >
                                                {itemValue ? (
                                                    <ItemValue
                                                        className={cls({
                                                            [classes.itemSelected]: selectedIndex === inputCorrectIndex,
                                                        })}
                                                        data-code-field-item-value=""
                                                    >
                                                        {itemValue}
                                                        {activeIndex === inputCorrectIndex &&
                                                            selectedIndex === null && (
                                                                <ItemCaret data-code-field-caret="" />
                                                            )}
                                                    </ItemValue>
                                                ) : (
                                                    placeholderValue && (
                                                        <ItemPlaceholder>
                                                            {placeholderValue[inputCorrectIndex]}
                                                        </ItemPlaceholder>
                                                    )
                                                )}
                                                {activeIndex === inputCorrectIndex &&
                                                    !itemValue &&
                                                    selectedIndex === null && <ItemCaret data-code-field-caret="" />}
                                            </ItemInput>
                                        );
                                    })}
                                </CodeGroup>
                                {partIndex !== parts - 1 && <Separator aria-hidden="true" />}
                            </Fragment>
                        ))}

                        <NativeInput
                            id={id}
                            ref={inputForkRef}
                            data-code-field-input=""
                            type="text"
                            value={codeValue}
                            minLength={codeLength}
                            maxLength={codeLength}
                            autoComplete={autoComplete}
                            inputMode={inputMode}
                            autoFocus={autoFocus}
                            autoCapitalize={autoCapitalize}
                            autoCorrect={autoCorrect}
                            spellCheck={spellCheck ?? false}
                            name={name}
                            form={form}
                            required={required}
                            disabled={disabled}
                            readOnly={isErrorAnimationPlaying}
                            aria-label={ariaLabel}
                            aria-describedby={ariaDescribedBy}
                            aria-labelledby={ariaLabelledBy}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            onPaste={handlePaste}
                            onFocus={() => setTimeout(selectLastActiveItem, 0)}
                            onBlur={() => {
                                setActiveIndex(null);
                                setSelectedIndex(null);
                            }}
                            onSelect={(event) => {
                                const selectionStart = event.currentTarget.selectionStart ?? codeValue.length;
                                const selectionEnd = event.currentTarget.selectionEnd ?? selectionStart;
                                const nextActiveIndex = Math.min(selectionStart, codeLength - 1);

                                setActiveIndex(nextActiveIndex);
                                setSelectedIndex(selectionStart < selectionEnd ? nextActiveIndex : null);
                            }}
                        />
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
