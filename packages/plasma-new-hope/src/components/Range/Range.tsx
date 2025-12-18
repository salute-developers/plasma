import React, { forwardRef, MouseEventHandler, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useOutsideClick } from 'src/hooks';
import { useForkRef } from '@salutejs/plasma-core';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { RangeInputRefs, RangeProps, RangeRootProps } from './Range.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as hintViewCSS } from './variations/_hint-view/base';
import { base as hintSizeCSS } from './variations/_hint-size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { getChangeHandler, getSearchHandler } from './utils';
import {
    ContentWrapper,
    StyledContentLeft,
    StyledContentRight,
    StyledContentRightWrapper,
    StyledDivider,
    StyledInput,
    base,
} from './Range.styles';
import { classes } from './Range.tokens';
import { HintComponent, InformationWrapperUI } from './ui';

export const rangeRoot = (Root: RootProps<HTMLDivElement, RangeRootProps>) =>
    forwardRef<RangeInputRefs, RangeProps>(
        (
            {
                className,

                // controlled
                firstValue,
                secondValue,

                firstValueError,
                secondValueError,
                firstValueSuccess,
                secondValueSuccess,
                firstPlaceholder,
                secondPlaceholder,

                // variations
                appearance,
                hasClearDivider,
                view,
                size,
                readOnly = false,
                disabled = false,
                required = false,
                requiredIndicatorPlacement = 'right',
                hasRequiredIndicator = true,

                // hint
                hintTrigger = 'hover',
                hintText,
                hintView = 'default',
                hintSize = 'm',
                hintTargetIcon,
                hintTargetPlacement = 'outer',
                hintPlacement = 'auto',
                hintHasArrow,
                hintOffset = [0, 0],
                hintWidth,
                hintContentLeft,

                // layout
                label,
                leftHelper,
                titleCaption,
                contentLeft,
                contentRight,
                firstTextfieldContentLeft,
                firstTextfieldContentRight,
                secondTextfieldContentLeft,
                secondTextfieldContentRight,
                firstTextfieldTextBefore,
                secondTextfieldTextBefore,
                firstTextfieldTextAfter,
                secondTextfieldTextAfter,

                dividerVariant = 'dash',
                dividerIcon,

                autoComplete,

                onChangeFirstValue,
                onChangeSecondValue,
                onSearchFirstValue,
                onSearchSecondValue,
                onFocusFirstTextfield,
                onFocusSecondTextfield,
                onBlurFirstTextfield,
                onBlurSecondTextfield,

                ...rest
            },
            ref,
        ) => {
            const rangeRef = useRef<HTMLDivElement>(null);
            const firstTextFieldRef = useRef<HTMLInputElement>(null);
            const secondTextFieldRef = useRef<HTMLInputElement>(null);
            const hintRef = useRef<HTMLDivElement>(null);

            const [isHintVisible, setIsHintVisible] = useState(false);

            const noCaptionAndLabelClass = !label && !titleCaption ? classes.noCaptionAndLabel : undefined;
            const clearClass = appearance === 'clear' ? classes.clear : undefined;
            const clearDividerClass = hasClearDivider ? classes.clearDivider : undefined;
            const clearOuterHintClass =
                clearClass && hintText && hintTargetPlacement === 'outer' ? classes.clearHasOuterHint : undefined;

            const rangeErrorClass = firstValueError && secondValueError ? classes.rangeError : undefined;
            const firstValueErrorClass = !rangeErrorClass && firstValueError ? classes.rangeValueError : undefined;
            const secondValueErrorClass = !rangeErrorClass && secondValueError ? classes.rangeValueError : undefined;

            const rangeSuccessClass = firstValueSuccess && secondValueSuccess ? classes.rangeSuccess : undefined;
            const firstValueSuccessClass =
                !rangeSuccessClass && firstValueSuccess ? classes.rangeValueSuccess : undefined;
            const secondValueSuccessClass =
                !rangeSuccessClass && secondValueSuccess ? classes.rangeValueSuccess : undefined;

            const hintInnerRef = useRef<HTMLDivElement>(null);
            const hintForkRef = useForkRef(hintRef, hintInnerRef);

            const handleChangeFirstValue = getChangeHandler(onChangeFirstValue, disabled, readOnly);
            const handleChangeSecondValue = getChangeHandler(onChangeSecondValue, disabled, readOnly);
            const handleSearchFirstValue = getSearchHandler(onSearchFirstValue, disabled, readOnly);
            const handleSearchSecondValue = getSearchHandler(onSearchSecondValue, disabled, readOnly);

            const handleHintShow = () => {
                if (disabled) {
                    return;
                }
                setIsHintVisible(true);
            };
            const handleHintHide = () => setIsHintVisible(false);
            const handleHintClick: MouseEventHandler = (event) => {
                if (!hintText || hintTrigger !== 'click' || disabled) {
                    return;
                }

                event.stopPropagation();
                const targetIsPopover = event.target === hintInnerRef.current;
                const rootHasTarget = hintInnerRef.current?.contains(event.target as Element);

                if (!targetIsPopover && !rootHasTarget) {
                    setIsHintVisible(true);
                }
            };

            useOutsideClick(() => {
                setIsHintVisible(false);
            }, [hintRef]);

            useImperativeHandle(
                ref,
                () => ({
                    firstTextField: () => {
                        return firstTextFieldRef;
                    },
                    secondTextField: () => {
                        return secondTextFieldRef;
                    },
                }),
                [firstTextFieldRef, secondTextFieldRef],
            );

            const Divider = useMemo(() => {
                if (dividerVariant === 'none') {
                    return null;
                }

                if (dividerVariant === 'dash') {
                    return <StyledDivider>–</StyledDivider>;
                }

                return <StyledDivider>{dividerIcon}</StyledDivider>;
            }, [dividerVariant, dividerIcon]);

            return (
                <Root
                    ref={rangeRef}
                    className={cx(clearClass, noCaptionAndLabelClass, className)}
                    view={view}
                    size={size}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    {...(hintText && {
                        hintView,
                        hintSize,
                    })}
                    {...rest}
                >
                    <InformationWrapperUI
                        className={cx(
                            rangeErrorClass,
                            firstValueErrorClass,
                            secondValueErrorClass,
                            rangeSuccessClass,
                            firstValueSuccessClass,
                            secondValueSuccessClass,
                            clearOuterHintClass,
                        )}
                        size={size}
                        label={label}
                        leftHelper={leftHelper}
                        titleCaption={titleCaption}
                        required={required}
                        requiredIndicatorPlacement={requiredIndicatorPlacement}
                        hasRequiredIndicator={hasRequiredIndicator}
                        disabled={disabled}
                        {...(hintText && hintTargetPlacement === 'outer'
                            ? {
                                  hintText,
                                  hintView,
                                  hintSize,
                                  hintTrigger,
                                  hintTargetIcon,
                                  hintPlacement,
                                  hintHasArrow,
                                  hintOffset,
                                  hintWidth,
                                  hintContentLeft,
                              }
                            : { hintText: undefined })}
                    >
                        <ContentWrapper
                            className={cx(clearClass, clearDividerClass, rangeErrorClass, rangeSuccessClass)}
                        >
                            {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                            <StyledInput
                                ref={firstTextFieldRef}
                                className={cx(firstValueErrorClass, firstValueSuccessClass)}
                                value={firstValue}
                                readOnly={readOnly}
                                disabled={disabled}
                                placeholder={firstPlaceholder}
                                contentLeft={firstTextfieldContentLeft}
                                contentRight={firstTextfieldContentRight}
                                textBefore={firstTextfieldTextBefore}
                                textAfter={firstTextfieldTextAfter}
                                onChange={handleChangeFirstValue}
                                onSearch={handleSearchFirstValue}
                                onFocus={onFocusFirstTextfield}
                                onBlur={onBlurFirstTextfield}
                                autoComplete={autoComplete}
                                data-error={firstValueError}
                                data-success={firstValueSuccess}
                                hasDivider={hasClearDivider}
                            />
                            {Divider}
                            <StyledInput
                                ref={secondTextFieldRef}
                                className={cx(secondValueErrorClass, secondValueSuccessClass)}
                                value={secondValue}
                                readOnly={readOnly}
                                disabled={disabled}
                                placeholder={secondPlaceholder}
                                contentLeft={secondTextfieldContentLeft}
                                contentRight={secondTextfieldContentRight}
                                textBefore={secondTextfieldTextBefore}
                                textAfter={secondTextfieldTextAfter}
                                onChange={handleChangeSecondValue}
                                onSearch={handleSearchSecondValue}
                                onFocus={onFocusSecondTextfield}
                                onBlur={onBlurSecondTextfield}
                                autoComplete={autoComplete}
                                hasDivider={hasClearDivider}
                            />
                            <StyledContentRightWrapper>
                                {!label && hintText && hintTargetPlacement === 'inner' && (
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
                                        withoutLabel
                                    />
                                )}
                                {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}
                            </StyledContentRightWrapper>
                        </ContentWrapper>
                    </InformationWrapperUI>
                </Root>
            );
        },
    );

export const rangeConfig = {
    name: 'Range',
    tag: 'div',
    layout: rangeRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        hintView: {
            css: hintViewCSS,
        },
        hintSize: {
            css: hintSizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        readOnly: {
            css: readOnlyCSS,
            attrs: true,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
        hintView: 'default',
        hintSize: 'm',
    },
};
