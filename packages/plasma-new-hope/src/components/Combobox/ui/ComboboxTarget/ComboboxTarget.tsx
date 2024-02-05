import React, { forwardRef, useRef, useState } from 'react';

import { classes } from '../../Combobox.tokens';
import { cx } from '../../../../utils';
import { ComboboxChip } from '../ComboboxChip/ComboboxChip';
import type { ComboboxPrimitiveValue } from '../../Combobox.types';
import { useFocusController } from '../../hooks';
import { Keys } from '../../../Select/hooks/useKeyNavigation';

import {
    StyledArrow,
    StyledChips,
    StyledContent,
    StyledLabel,
    StyledComboboxInput,
    StyledComboboxInputHelper,
    StyledComboboxTarget,
    StyledText,
} from './ComboboxTarget.styles';
import type { ComboboxTargetProps } from './ComboboxTarget.types';

const {
    hasChips,
    innerLabelUp,
    arrowInverse,
    comboboxTargetArrow,
    comboboxTargeText,
    comboboxTargetInput,
    comboboxTargetLabel,
} = classes;

/**
 * Элемент для выпадающего списка
 */
export const ComboboxTarget = forwardRef<HTMLInputElement, ComboboxTargetProps>(
    (
        {
            values,
            search,
            label,
            placeholder,
            opened,
            readOnly,
            disabled,
            enumerationType,
            valueType,
            size,
            closedWithoutChanges,
            id,
            chipsRefs,
            inputRef,
            onChange,
            onSearch,
            onKeyDown,
            ...rest
        },
        ref,
    ) => {
        const contentRef = useRef<HTMLDivElement>(null);
        const inputHelperRef = useRef<HTMLDivElement>(null);
        const [focused, setFocused] = useState(false);

        const controlledRefs = { contentRef, inputHelperRef, inputRef };
        const textContent = values?.map(([, text]) => text).join(', ');
        const hasValue = values?.some(([value]) => value);

        const isEnumerationComma = enumerationType === 'comma';
        const isExtraSmall = size === 'xs';
        const isInputNotEmpty = hasValue || search;
        const isInputActive = !hasValue && (opened || (focused && !readOnly));
        const hasLabel = label && !isExtraSmall && isEnumerationComma;
        const hasOnlyLabel = !placeholder || label;
        const hasNoAnyTip = !placeholder && !label;
        const placeholderValue = (!label && !hasValue) || isExtraSmall ? placeholder : undefined;

        const withInnerLabelUp =
            !isExtraSmall && !hasNoAnyTip && hasOnlyLabel && (isInputActive || (hasLabel && isInputNotEmpty))
                ? innerLabelUp
                : undefined;
        const withArrowInverse = opened ? arrowInverse : undefined;
        const withHasChips = hasValue && enumerationType === 'chip' ? hasChips : undefined;

        const isLabelVisible = (!hasValue && !isExtraSmall) || hasLabel;
        const isEnumerationVisible = hasValue && valueType !== 'single';

        const onChipClick = (event: React.MouseEvent<HTMLButtonElement>) => event.stopPropagation();

        const { onClickText, onFocusInput, onBlurInput } = useFocusController({
            controlledRefs,
            opened,
            hasValue,
            textContent,
            search,
            values,
            valueType,
            readOnly,
            closedWithoutChanges,
            updateFocused: setFocused,
            updateSearch: onSearch,
            onChipClick,
        });

        const onChipClear = (value: ComboboxPrimitiveValue, text: ComboboxPrimitiveValue, index: number) => {
            const newValue = values
                ?.filter(([itemValue, itemText]) => !(itemValue === value && itemText === text))
                .map(([itemValue]) => itemValue);

            chipsRefs?.current.splice(index, 1);
            onChange?.(newValue);
        };

        const onChipKeyDown = (
            value: ComboboxPrimitiveValue,
            text: ComboboxPrimitiveValue,
            index: number,
            event: React.KeyboardEvent<HTMLButtonElement>,
        ) => {
            const { code } = event;

            if (code === Keys.Tab) {
                event.preventDefault();
            }

            if (code === Keys.Backspace) {
                onChipClear(value, text, index);
            }
        };

        const onKeyDownInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const { code } = event;

            if (opened && code === Keys.Tab) {
                event.preventDefault();
            }

            if (code === Keys.Backspace && !event.currentTarget?.value.length) {
                const newValue = values?.map(([itemValue]) => itemValue);
                newValue?.pop();
                chipsRefs?.current.pop();

                onChange?.(newValue);
            }
        };

        const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
            onSearch?.(event.currentTarget.value);
        };

        const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
            const { deltaY } = event;

            if (contentRef.current) {
                contentRef.current.scrollLeft += Math.round(deltaY);
            }
        };

        const getRef = (element: HTMLButtonElement | null, index: number) => {
            if (element && chipsRefs && chipsRefs.current) {
                chipsRefs.current[index] = element;
            }
        };

        // INFO: Нужно очищать на каждый ререндер компонента для актуализации состояния рефов
        if (chipsRefs) {
            chipsRefs.current = [];
        }

        return (
            <StyledComboboxTarget
                ref={ref}
                opened={opened}
                readOnly={readOnly}
                disabled={disabled}
                title={textContent}
                aria-label={label}
                className={cx(withInnerLabelUp, withHasChips)}
                onWheel={onWheel}
                onKeyDown={onKeyDown}
                {...rest}
            >
                <StyledContent tabIndex={-1} ref={contentRef} className={withHasChips}>
                    {isEnumerationVisible &&
                        (isEnumerationComma ? (
                            <StyledText className={comboboxTargeText} onClick={onClickText}>
                                {textContent}
                            </StyledText>
                        ) : (
                            <StyledChips>
                                {values?.map(([value, text], index) => (
                                    <ComboboxChip
                                        index={index}
                                        ref={(element) => getRef(element, index)}
                                        key={`${value}_${text}`}
                                        disabled={disabled}
                                        readOnly={readOnly}
                                        value={value}
                                        text={text}
                                        onClear={(v, t) => onChipClear(v, t, index)}
                                        onClick={onChipClick}
                                        onKeyDown={onChipKeyDown}
                                    />
                                ))}
                            </StyledChips>
                        ))}
                    <StyledComboboxInput
                        ref={inputRef}
                        role="textbox"
                        className={comboboxTargetInput}
                        value={search}
                        placeholder={placeholderValue}
                        disabled={disabled}
                        readOnly={readOnly}
                        onFocus={onFocusInput}
                        onBlur={onBlurInput}
                        onChange={onChangeInput}
                        onKeyDown={onKeyDownInput}
                    />
                    {valueType === 'multiple' && (
                        <StyledComboboxInputHelper ref={inputHelperRef}>{search}</StyledComboboxInputHelper>
                    )}
                </StyledContent>
                {isLabelVisible && (
                    <StyledLabel className={comboboxTargetLabel} htmlFor={id}>
                        {label}
                    </StyledLabel>
                )}
                <StyledArrow size="s" className={cx(comboboxTargetArrow, withArrowInverse)} />
            </StyledComboboxTarget>
        );
    },
);
