import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { FormEventHandler, ChangeEventHandler, KeyboardEvent, ChangeEvent } from 'react';
import { safeUseId, useForkRef } from '@salutejs/plasma-core';
import { css } from '@linaria/core';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { ChipValues, TextFieldPrimitiveValue, TextFieldProps } from './TextField.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_read-only/base';
import { base as labelPlacementCSS } from './variations/_label-placement/base';
import {
    Input,
    InputContainer,
    LeftHelper,
    Label,
    InputWrapper,
    InputLabelWrapper,
    StyledContentLeft,
    StyledContentRight,
    StyledChips,
    StyledTextBefore,
    StyledTextAfter,
    StyledIndicator,
    StyledOptionalText,
    InputPlaceholder,
} from './TextField.styles';
import { classes } from './TextField.tokens';
import { TextFieldChip } from './ui';
import { useKeyNavigation } from './hooks';

const optionalText = 'optional';

export const base = css`
    /* NOTE: Webkit не применяет opacity к inline тегам */
    display: block;
`;

export const textFieldRoot = (Root: RootProps<HTMLDivElement, TextFieldProps>) =>
    forwardRef<HTMLInputElement, TextFieldProps>(
        (
            {
                id,
                className,
                style,

                // layout
                contentLeft,
                contentRight,
                label,
                labelPlacement,
                textBefore,
                textAfter,
                placeholder,
                leftHelper,
                enumerationType = 'plain',
                requiredPlacement = 'right',

                // variations
                view,
                size,
                readOnly = false,
                disabled = false,
                required = false,
                optional,

                // controlled
                value: outerValue,
                chips: values,

                // events
                onChange,
                onChangeChips,
                onSearch,
                onKeyDown,

                ...rest
            },
            ref,
        ) => {
            const contentRef = useRef<HTMLDivElement>(null);
            const inputRef = useRef<HTMLInputElement>(null);
            const inputForkRef = useForkRef(inputRef, ref);
            const chipsRefs = useRef<Array<HTMLButtonElement>>([]);

            const controlledRefs = { contentRef, inputRef, chipsRefs };

            const [hasValue, setHasValue] = useState(
                Boolean(outerValue) || Boolean(inputRef?.current?.value) || Boolean(rest?.defaultValue),
            );
            const [chips, setChips] = useState<Array<ChipValues>>([]);

            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const labelId = safeUseId();
            const helperTextId = safeUseId();

            const isChipEnumeration = enumerationType === 'chip';
            const isChipsVisible = isChipEnumeration && Boolean(chips?.length);
            const withHasChips = isChipsVisible ? classes.hasChips : undefined;

            const hasLabelValue = Boolean(label);
            const hasInnerLabel = size !== 'xs' && labelPlacement === 'inner' && !isChipsVisible && hasLabelValue;
            const hasOuterLabel = labelPlacement === 'outer' && hasLabelValue;
            const hasPlaceholder = Boolean(placeholder) && !hasInnerLabel;

            const innerLabelValue = hasInnerLabel || hasOuterLabel ? label : undefined;
            const innerLabelPlacementValue = labelPlacement === 'inner' && !hasInnerLabel ? undefined : labelPlacement;

            const innerPlaceholderValue = hasPlaceholder ? placeholder : undefined;
            const placeholderShown = Boolean(innerPlaceholderValue) && !hasValue;

            const requiredPlacementClass = requiredPlacement === 'right' ? 'align-right ' : undefined;
            const labelPlacementClass = innerLabelPlacementValue
                ? classes[`${innerLabelPlacementValue}LabelPlacement` as keyof typeof classes]
                : undefined;
            const hasValueClass = hasValue ? classes.hasValue : undefined;

            const wrapperWithoutLeftContent = !contentLeft && isChipsVisible ? classes.hasEmptyContentLeft : undefined;
            const wrapperWithoutRightContent =
                !contentRight && isChipsVisible ? classes.hasEmptyContentRight : undefined;

            const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
                setHasValue(Boolean((event.target as HTMLInputElement).value));
            };

            const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
                if (disabled || readOnly) {
                    return;
                }

                const { maxLength, value } = event.target;

                if (maxLength !== -1 && value.length > maxLength) {
                    return;
                }

                onChange?.(event);
            };

            const updateChips = (newChips: Array<ChipValues>, newValues: Array<TextFieldPrimitiveValue>) => {
                setChips(newChips);
                onChangeChips?.(newValues);
            };

            const { handleInputKeydown, handleChipKeyDown, onChipClear, handleContentKeyDown } = useKeyNavigation({
                controlledRefs,
                disabled,
                readOnly,
                chips,
                enumerationType,
                updateChips,
                onSearch,
                onChange,
                onEnterDisabled: (rest as any).onEnterDisabled,
            });

            const onChipClick = (event: React.MouseEvent<HTMLButtonElement>) => event.stopPropagation();

            const handleInputFocus = () => {
                if (readOnly || disabled || !inputRef?.current) {
                    return;
                }

                inputRef.current.scrollTo({
                    top: 0,
                    left: inputRef.current.offsetLeft,
                    behavior: 'smooth',
                });

                inputRef.current.focus();
            };

            const getRef = (element: HTMLButtonElement | null, index: number) => {
                if (element && chipsRefs?.current) {
                    chipsRefs.current[index] = element;
                }
            };

            const handleOnKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
                handleInputKeydown(event);

                if (onKeyDown) {
                    onKeyDown(event);
                }
            };

            useEffect(() => {
                if (!isChipEnumeration && !values?.length) {
                    return;
                }

                const newChips =
                    values?.map((value, index) => ({
                        id: `${index}_${value}`,
                        text: value,
                    })) || [];

                setChips(newChips);
            }, [isChipEnumeration, values]);

            useEffect(() => {
                setHasValue(Boolean(rest?.defaultValue));
            }, [rest.defaultValue]);

            useEffect(() => {
                setHasValue(Boolean(outerValue) || Boolean(inputRef?.current?.value));
            }, [outerValue, inputRef?.current?.value]);

            const innerOptional = Boolean(required ? false : optional);
            const hasPlaceholderOptional = innerOptional && !innerLabelValue && !hasOuterLabel;
            const optionalTextNode = innerOptional ? (
                <StyledOptionalText>
                    {Boolean(hasPlaceholderOptional ? innerPlaceholderValue : innerLabelValue) && '\xa0'}
                    {optionalText}
                </StyledOptionalText>
            ) : null;

            return (
                <Root
                    view={view}
                    size={size}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    labelPlacement={innerLabelPlacementValue}
                    onClick={handleInputFocus}
                    className={cx(labelPlacementClass, classes.textFieldGroupItem, className)}
                    style={style}
                >
                    {hasOuterLabel && (
                        <Label id={labelId} htmlFor={id}>
                            {required && (
                                <StyledIndicator className={cx(classes.outerLabelPlacement, requiredPlacementClass)} />
                            )}
                            {innerLabelValue}
                            {optionalTextNode}
                        </Label>
                    )}
                    <InputWrapper
                        // Ref для внутреннего использования. Не отдается наружу.
                        ref={(rest as any).inputWrapperRef}
                        className={cx(withHasChips, wrapperWithoutLeftContent, wrapperWithoutRightContent)}
                    >
                        {!hasOuterLabel && required && (
                            <StyledIndicator className={cx(classes.innerLabelPlacement, requiredPlacementClass)} />
                        )}
                        {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                        <InputLabelWrapper
                            tabIndex={-1}
                            ref={contentRef}
                            onKeyDown={handleContentKeyDown}
                            className={withHasChips}
                        >
                            {textBefore && <StyledTextBefore>{textBefore}</StyledTextBefore>}
                            {isChipEnumeration && Boolean(chips?.length) && (
                                <StyledChips>
                                    {chips?.map(({ id: chipId, text }, index) => {
                                        return (
                                            <TextFieldChip
                                                id={chipId}
                                                ref={(element) => getRef(element, index)}
                                                key={`${chipId}_${index}`}
                                                disabled={disabled}
                                                readOnly={readOnly}
                                                value={text}
                                                text={text}
                                                onKeyDown={(event) => handleChipKeyDown(event, chipId, index)}
                                                onClear={() => onChipClear(chipId, index)}
                                                onClick={onChipClick}
                                            />
                                        );
                                    })}
                                </StyledChips>
                            )}
                            <InputContainer>
                                <Input
                                    ref={inputForkRef}
                                    id={innerId}
                                    value={outerValue}
                                    aria-labelledby={labelId}
                                    aria-describedby={helperTextId}
                                    placeholder={innerPlaceholderValue}
                                    className={cx(hasValueClass)}
                                    disabled={disabled}
                                    readOnly={!disabled && readOnly}
                                    onInput={handleInput}
                                    onChange={handleChange}
                                    onKeyDown={handleOnKeyDown}
                                    {...rest}
                                />
                                {hasInnerLabel && (
                                    <Label id={labelId} htmlFor={innerId}>
                                        {innerLabelValue}
                                        {optionalTextNode}
                                    </Label>
                                )}
                                {placeholderShown && !hasValue && (
                                    <InputPlaceholder>
                                        {innerPlaceholderValue}
                                        {hasPlaceholderOptional && optionalTextNode}
                                    </InputPlaceholder>
                                )}
                            </InputContainer>
                            {textAfter && <StyledTextAfter>{textAfter}</StyledTextAfter>}
                        </InputLabelWrapper>
                        {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}
                    </InputWrapper>
                    {leftHelper && <LeftHelper id={helperTextId}>{leftHelper}</LeftHelper>}
                </Root>
            );
        },
    );

export const textFieldConfig = {
    name: 'TextField',
    tag: 'div',
    layout: textFieldRoot,
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
        readOnly: {
            css: readOnlyCSS,
            attrs: true,
        },
        labelPlacement: {
            css: labelPlacementCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
