import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { ChangeEventHandler, KeyboardEvent, ChangeEvent } from 'react';
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
    LeftHelper,
    Label,
    InputWrapper,
    InputLabelWrapper,
    StyledContentLeft,
    StyledContentRight,
    StyledChips,
    StyledTextBefore,
    StyledTextAfter,
} from './TextField.styles';
import { classes } from './TextField.tokens';
import { TextFieldChip } from './ui';
import { useKeyNavigation } from './hooks';

export const base = css`
    /* NOTE: Webkit не применяет opacity к inline тегам */
    display: block;
    overflow: hidden;
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

                // variations
                view,
                size,
                readOnly = false,
                disabled = false,

                // controlled
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

            const [chips, setChips] = useState<Array<ChipValues>>([]);

            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const labelId = safeUseId();
            const helperTextId = safeUseId();

            const isChipEnumeration = enumerationType === 'chip';
            const hideLabel = (size === 'xs' || isChipEnumeration) && labelPlacement === 'inner';
            const labelInside = size !== 'xs' && labelPlacement === 'inner';
            const innerLabelPlacementValue = hideLabel ? 'outer' : labelPlacement;
            const innerPlaceholderValue = hideLabel ? label : placeholder;
            const innerLabelValue = hideLabel ? undefined : label;

            const isChipsVisible = isChipEnumeration && chips?.length;
            const withHasChips = isChipsVisible ? classes.hasChips : undefined;
            const wrapperWithoutLeftContent = !contentLeft && isChipsVisible ? classes.hasEmptyContentLeft : undefined;
            const wrapperWithoutRightContent =
                !contentRight && isChipsVisible ? classes.hasEmptyContentRight : undefined;

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
                onKeyDown && onKeyDown(event);
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

            return (
                <Root
                    view={view}
                    size={size}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    labelPlacement={innerLabelPlacementValue}
                    onClick={handleInputFocus}
                    className={className}
                    style={style}
                >
                    {labelInside ||
                        (innerLabelValue && (
                            <Label id={labelId} htmlFor={id}>
                                {innerLabelValue}
                            </Label>
                        ))}
                    <InputWrapper className={cx(withHasChips, wrapperWithoutLeftContent, wrapperWithoutRightContent)}>
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
                            <Input
                                {...rest}
                                ref={inputForkRef}
                                id={innerId}
                                aria-labelledby={labelId}
                                aria-describedby={helperTextId}
                                placeholder={innerPlaceholderValue}
                                disabled={disabled}
                                readOnly={!disabled && readOnly}
                                onChange={handleChange}
                                onKeyDown={handleOnKeyDown}
                            />
                            {labelInside && (
                                <Label id={labelId} htmlFor={innerId}>
                                    {innerLabelValue}
                                </Label>
                            )}
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
