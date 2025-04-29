import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { FormEventHandler, ChangeEventHandler, KeyboardEvent, ChangeEvent, MouseEventHandler } from 'react';
import { safeUseId, useForkRef } from '@salutejs/plasma-core';
import { css } from '@linaria/core';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';
import { useOutsideClick } from '../../hooks';

import type { ChipValues, TextFieldPrimitiveValue, TextFieldProps, TextFieldRootProps } from './TextField.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as clearCSS } from './variations/_clear/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_read-only/base';
import { base as labelPlacementCSS } from './variations/_label-placement/base';
import { base as hintViewCSS } from './variations/_hint-view/base';
import { base as hintSizeCSS } from './variations/_hint-size/base';
import { base as chipViewCSS } from './variations/_chip-view/base';
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
    OuterLabelWrapper,
    TitleCaption,
    StyledHintWrapper,
    StyledIndicatorWrapper,
    StyledContentRightWrapper,
} from './TextField.styles';
import { classes } from './TextField.tokens';
import { TextFieldChip } from './ui';
import { useKeyNavigation } from './hooks';
import { HintComponent } from './ui/Hint/Hint';
import { getInputWidth } from './getInputWidth';

const optionalText = 'optional';

export const base = css`
    /* NOTE: Webkit не применяет opacity к inline тегам */
    display: block;
`;

const HINT_DEFAULT_OFFSET: [number, number] = [0, 0];

export const textFieldRoot = (Root: RootProps<HTMLDivElement, TextFieldRootProps>) =>
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
                keepPlaceholder,
                textBefore,
                textAfter,
                placeholder,
                leftHelper,
                enumerationType = 'plain',
                requiredPlacement = 'right',
                hasRequiredIndicator = true,
                titleCaption,
                chipView = 'default',
                chipValidator,

                // hint
                hintTrigger = 'hover',
                hintText,
                hintView = 'default',
                hintSize = 'm',
                hintTargetIcon,
                hintTargetPlacement = 'outer',
                hintPlacement = 'auto',
                hintHasArrow,
                hintOffset = HINT_DEFAULT_OFFSET,
                hintWidth,
                hintContentLeft,

                // variations
                view,
                size,
                readOnly = false,
                disabled = false,
                required = false,
                clear = false,
                optional,
                hasDivider,

                // controlled
                value: outerValue,
                chips: values,
                chipType = 'default',

                // events
                onChange,
                onChangeChips,
                onSearch,
                onKeyDown,
                onFocus,
                onBlur,

                // Пропсы для внутреннего использования, не отдается наружу.
                // @ts-ignore
                _onEnterDisabled,
                // @ts-ignore
                _forceChipManipulationWithReadonly,

                ...rest
            },
            ref,
        ) => {
            const contentRef = useRef<HTMLDivElement>(null);
            const inputContainerRef = useRef<HTMLDivElement>(null);
            const inputRef = useRef<HTMLInputElement>(null);
            const inputForkRef = useForkRef(inputRef, ref);
            const chipsRefs = useRef<Array<HTMLButtonElement>>([]);

            const controlledRefs = { contentRef, inputRef, chipsRefs };

            const [hasValue, setHasValue] = useState(
                Boolean(outerValue) || Boolean(inputRef?.current?.value) || Boolean(rest?.defaultValue),
            );
            const [hasFocus, setHasFocus] = useState(false);

            const [chips, setChips] = useState<Array<ChipValues>>([]);
            const [isHintVisible, setIsHintVisible] = useState(false);

            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const labelId = safeUseId();
            const helperTextId = safeUseId();

            const isDefaultView = view === 'default' || readOnly || disabled;

            const isChipEnumeration = enumerationType === 'chip';
            const isChipsVisible = isChipEnumeration && Boolean(chips?.length);
            const withHasChips = isChipsVisible ? classes.hasChips : undefined;

            const hasLabelValue = Boolean(label);
            const hasInnerLabel = size !== 'xs' && labelPlacement === 'inner' && !isChipsVisible && hasLabelValue;
            const hasOuterLabel = labelPlacement === 'outer' && hasLabelValue;
            const innerKeepPlaceholder = keepPlaceholder && labelPlacement === 'inner';
            const hasPlaceholder = Boolean(placeholder) && (innerKeepPlaceholder || !hasInnerLabel);
            let hasTextAfter = Boolean(textAfter);
            let hasTextBefore = textBefore && !isChipEnumeration;
            if (labelPlacement === 'inner') {
                if (!hasValue && !hasPlaceholder && !hasFocus) {
                    hasTextAfter = false;
                    hasTextBefore = false;
                }
            }

            const hasPlaceholderPadding = hasInnerLabel && keepPlaceholder && size !== 'xs';

            const innerLabelValue = hasInnerLabel || hasOuterLabel ? label : undefined;
            const innerLabelPlacementValue = labelPlacement === 'inner' && !hasInnerLabel ? undefined : labelPlacement;

            const innerPlaceholderValue = hasPlaceholder ? placeholder : undefined;
            const placeholderShown = Boolean(innerPlaceholderValue) && !hasValue;

            const clearClass = clear ? classes.clear : undefined;
            const hasDividerClass = hasDivider ? classes.hasDivider : undefined;
            const hasInnerHintClass = hintText && hintTargetPlacement === 'outer' ? classes.hasHint : undefined;
            const hasHintClass = hintText ? classes.hasHint : undefined;
            const requiredPlacementClass = requiredPlacement === 'right' ? classes.requiredAlignRight : undefined;
            const labelPlacementClass = innerLabelPlacementValue
                ? classes[`${innerLabelPlacementValue}LabelPlacement` as keyof typeof classes]
                : undefined;
            const hasValueClass = hasValue ? classes.hasValue : undefined;
            const keepPlaceholderClass = hasPlaceholder && placeholderShown && classes.keepPlaceholder;

            const wrapperWithoutLeftContent =
                !contentLeft && isChipsVisible && chipType === 'default' ? classes.hasEmptyContentLeft : undefined;
            const wrapperWithoutRightContent =
                !contentRight && isChipsVisible && chipType === 'default' ? classes.hasEmptyContentRight : undefined;

            const contentRightCompensationMargin =
                !hasOuterLabel && hintText && hintTargetPlacement === 'inner'
                    ? classes.contentRightCompensationMargin
                    : undefined;

            const hintRef = useOutsideClick<HTMLDivElement>(() => {
                setIsHintVisible(false);
            });
            const hintInnerRef = useRef<HTMLDivElement>(null);
            const hintForkRef = useForkRef(hintRef, hintInnerRef);

            const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
                const { value } = event.target as HTMLInputElement;

                setHasValue(Boolean(value));
            };

            useEffect(() => {
                if (hasTextAfter && inputRef.current) {
                    const textWidth = getInputWidth(inputRef.current, inputContainerRef.current);
                    inputRef.current.style.width = `${textWidth}px`;
                } else {
                    inputRef.current?.style.removeProperty('width');
                }
            }, [hasTextAfter]);

            const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
                setHasFocus(true);
                onFocus?.(event);
            };

            const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
                setHasFocus(false);
                onBlur?.(event);
            };

            const handleHintShow = () => setIsHintVisible(true);
            const handleHintHide = () => setIsHintVisible(false);
            const handleHintClick: MouseEventHandler = (event) => {
                if (!hintText || hintTrigger !== 'click') {
                    return;
                }

                event.stopPropagation();
                const targetIsPopover = event.target === hintInnerRef.current;
                const rootHasTarget = hintInnerRef.current?.contains(event.target as Element);

                if (!targetIsPopover && !rootHasTarget) {
                    setIsHintVisible(true);
                }
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

                if (hasTextAfter) {
                    const textWidth = getInputWidth(event.currentTarget, inputContainerRef.current);
                    event.currentTarget.style.width = `${textWidth}px`;
                }
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
                onEnterDisabled: _onEnterDisabled,
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

            const classTextEllipsis =
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-underscore-dangle
                !(rest as any)._textEllipsisEnable && !textAfter ? classes.inputTextEllipsis : undefined;

            return (
                <Root
                    view={view}
                    size={size}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    labelPlacement={innerLabelPlacementValue}
                    onClick={handleInputFocus}
                    className={cx(
                        labelPlacementClass,
                        clearClass,
                        hasDividerClass,
                        hasInnerHintClass,
                        classes.textFieldGroupItem,
                        className,
                    )}
                    style={style}
                    {...(hintText && { hintView, hintSize })}
                >
                    {(hasOuterLabel || titleCaption) && (
                        <OuterLabelWrapper isInnerLabel={labelPlacement === 'inner'}>
                            {hasOuterLabel && (
                                <StyledIndicatorWrapper>
                                    <Label id={labelId} htmlFor={id}>
                                        {innerLabelValue}
                                    </Label>

                                    {hintText && (
                                        <StyledHintWrapper>
                                            <HintComponent
                                                ref={hintForkRef}
                                                hintText={hintText}
                                                hintTrigger={hintTrigger}
                                                isHintVisible={isHintVisible}
                                                hintTargetIcon={hintTargetIcon}
                                                hintPlacement={hintPlacement}
                                                hintHasArrow={hintHasArrow}
                                                hintOffset={hintOffset}
                                                hintWidth={hintWidth}
                                                hintContentLeft={hintContentLeft}
                                                handleHintShow={handleHintShow}
                                                handleHintHide={handleHintHide}
                                                handleHintClick={handleHintClick}
                                            />
                                        </StyledHintWrapper>
                                    )}
                                    {required && hasRequiredIndicator && (
                                        <StyledIndicator
                                            className={cx(
                                                classes.outerLabelPlacement,
                                                requiredPlacementClass,
                                                hasHintClass,
                                            )}
                                        />
                                    )}
                                    {optionalTextNode}
                                </StyledIndicatorWrapper>
                            )}
                            {titleCaption && <TitleCaption>{titleCaption}</TitleCaption>}
                        </OuterLabelWrapper>
                    )}
                    <InputWrapper
                        // Ref для внутреннего использования. Не отдается наружу.
                        ref={(rest as any).inputWrapperRef}
                        // TODO: #1544, и после убрать classes.inputWrapper
                        className={cx(
                            withHasChips,
                            wrapperWithoutLeftContent,
                            wrapperWithoutRightContent,
                            classes.inputWrapper,
                        )}
                    >
                        {!hasOuterLabel && (
                            <>
                                {required && hasRequiredIndicator && (
                                    <StyledIndicator
                                        className={cx(classes.innerLabelPlacement, requiredPlacementClass)}
                                    />
                                )}
                                {hintText && hintTargetPlacement === 'outer' && (
                                    <StyledHintWrapper className={classes.innerLabelPlacement}>
                                        <HintComponent
                                            ref={hintForkRef}
                                            hintText={hintText}
                                            hintTrigger={hintTrigger}
                                            isHintVisible={isHintVisible}
                                            hintTargetIcon={hintTargetIcon}
                                            hintPlacement={hintPlacement}
                                            hintHasArrow={hintHasArrow}
                                            hintOffset={hintOffset}
                                            hintWidth={hintWidth}
                                            hintContentLeft={hintContentLeft}
                                            size={size}
                                            handleHintShow={handleHintShow}
                                            handleHintHide={handleHintHide}
                                            handleHintClick={handleHintClick}
                                            isInnerLabel
                                        />
                                    </StyledHintWrapper>
                                )}
                            </>
                        )}
                        {contentLeft && (
                            <StyledContentLeft isClear={clear} isDefaultView={isDefaultView}>
                                {contentLeft}
                            </StyledContentLeft>
                        )}
                        <InputLabelWrapper
                            tabIndex={-1}
                            ref={contentRef}
                            onKeyDown={handleContentKeyDown}
                            className={withHasChips}
                        >
                            {Boolean(textBefore && isChipEnumeration) && (
                                <StyledTextBefore>{textBefore}</StyledTextBefore>
                            )}
                            {isChipEnumeration && Boolean(chips?.length) && (
                                <StyledChips className={classes.chipsWrapper}>
                                    {chips?.map(({ id: chipId, text }, index) => {
                                        const validationView = chipValidator?.(String(text));
                                        const resView = validationView?.view || chipView;

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
                                                chipType={chipType}
                                                view={resView}
                                                rootWrapper={Root}
                                                // TODO: #1547
                                                // @ts-ignore
                                                _forceChipManipulationWithReadonly={_forceChipManipulationWithReadonly}
                                            />
                                        );
                                    })}
                                </StyledChips>
                            )}
                            <InputContainer ref={inputContainerRef} hasDynamicWidth={hasTextAfter}>
                                {hasTextBefore && <StyledTextBefore>{textBefore}</StyledTextBefore>}
                                <Input
                                    ref={inputForkRef}
                                    id={innerId}
                                    value={outerValue}
                                    required={enumerationType === 'chip' ? chips.length === 0 && required : required}
                                    aria-labelledby={labelId}
                                    aria-describedby={helperTextId}
                                    placeholder={innerPlaceholderValue}
                                    className={cx(hasValueClass, keepPlaceholderClass, classTextEllipsis)}
                                    disabled={disabled}
                                    readOnly={!disabled && readOnly}
                                    onInput={handleInput}
                                    onChange={handleChange}
                                    onKeyDown={handleOnKeyDown}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    {...rest}
                                />
                                {hasInnerLabel && (
                                    <Label id={labelId} htmlFor={innerId}>
                                        {innerLabelValue}
                                        {optionalTextNode}
                                    </Label>
                                )}
                                {placeholderShown && !hasValue && (
                                    <InputPlaceholder hasPadding={hasPlaceholderPadding}>
                                        {hasTextBefore && <StyledTextBefore isHidden>{textBefore}</StyledTextBefore>}
                                        {innerPlaceholderValue}
                                        {hasPlaceholderOptional && optionalTextNode}
                                    </InputPlaceholder>
                                )}
                                {hasTextAfter && <StyledTextAfter>{textAfter}</StyledTextAfter>}
                            </InputContainer>
                        </InputLabelWrapper>
                        <StyledContentRightWrapper className={cx(contentRightCompensationMargin)}>
                            {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}

                            {!hasOuterLabel && hintText && hintTargetPlacement === 'inner' && (
                                <HintComponent
                                    ref={hintForkRef}
                                    hintText={hintText}
                                    hintTrigger={hintTrigger}
                                    isHintVisible={isHintVisible}
                                    hintTargetIcon={hintTargetIcon}
                                    hintPlacement={hintPlacement}
                                    hintHasArrow={hintHasArrow}
                                    hintOffset={hintOffset}
                                    hintWidth={hintWidth}
                                    hintContentLeft={hintContentLeft}
                                    size={size}
                                    handleHintShow={handleHintShow}
                                    handleHintHide={handleHintHide}
                                    handleHintClick={handleHintClick}
                                    isInnerLabel
                                />
                            )}
                        </StyledContentRightWrapper>
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
        clear: {
            css: clearCSS,
            attrs: true,
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
        hintView: {
            css: hintViewCSS,
        },
        hintSize: {
            css: hintSizeCSS,
        },
        chipView: {
            css: chipViewCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
