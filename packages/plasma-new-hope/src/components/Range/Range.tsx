import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { RangeInputRefs, RangeProps } from './Range.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { getChangeHandler, getSearchHandler } from './utils';
import {
    ContentWrapper,
    LeftHelper,
    StyledContentLeft,
    StyledContentRight,
    StyledDivider,
    StyledIndicator,
    StyledIndicatorWrapper,
    StyledInput,
    StyledLabel,
    base,
} from './Range.styles';
import { classes } from './Range.tokens';

export const rangeRoot = (Root: RootProps<HTMLDivElement, RangeProps>) =>
    forwardRef<RangeInputRefs, RangeProps>(
        (
            {
                autoComplete,
                label,
                leftHelper,
                contentLeft,
                contentRight,
                view,
                size,
                readOnly = false,
                disabled = false,

                dividerVariant = 'dash',
                dividerIcon,

                firstValue,
                secondValue,
                firstValueError,
                secondValueError,
                firstValueSuccess,
                secondValueSuccess,
                firstPlaceholder,
                secondPlaceholder,
                firstTextfieldContentLeft,
                firstTextfieldContentRight,
                secondTextfieldContentLeft,
                secondTextfieldContentRight,
                firstTextfieldTextBefore,
                secondTextfieldTextBefore,
                firstTextfieldTextAfter,
                secondTextfieldTextAfter,

                required,
                requiredPlacement = 'right',
                hasRequiredIndicator = true,

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

            const requiredPlacementClass = requiredPlacement === 'right' ? classes.requiredAlignRight : undefined;

            const rangeErrorClass = firstValueError && secondValueError ? classes.rangeError : undefined;

            const firstValueErrorClass = !rangeErrorClass && firstValueError ? classes.rangeValueError : undefined;
            const secondValueErrorClass = !rangeErrorClass && secondValueError ? classes.rangeValueError : undefined;

            const rangeSuccessClass = firstValueSuccess && secondValueSuccess ? classes.rangeSuccess : undefined;
            const firstValueSuccessClass =
                !rangeSuccessClass && firstValueSuccess ? classes.rangeValueSuccess : undefined;
            const secondValueSuccessClass =
                !rangeSuccessClass && secondValueSuccess ? classes.rangeValueSuccess : undefined;

            const handleChangeFirstValue = getChangeHandler(onChangeFirstValue, disabled, readOnly);
            const handleChangeSecondValue = getChangeHandler(onChangeSecondValue, disabled, readOnly);
            const handleSearchFirstValue = getSearchHandler(onSearchFirstValue, disabled, readOnly);
            const handleSearchSecondValue = getSearchHandler(onSearchSecondValue, disabled, readOnly);

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
                    view={view}
                    size={size}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    {...rest}
                >
                    {label && (
                        <StyledIndicatorWrapper>
                            <StyledLabel>{label}</StyledLabel>

                            {required && hasRequiredIndicator && (
                                <StyledIndicator
                                    className={cx(classes.requiredOuterPlacement, requiredPlacementClass)}
                                />
                            )}
                        </StyledIndicatorWrapper>
                    )}
                    <ContentWrapper className={cx(rangeErrorClass, rangeSuccessClass)}>
                        {!label && required && hasRequiredIndicator && (
                            <StyledIndicator className={cx(requiredPlacementClass)} />
                        )}
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
                        />
                        {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}
                    </ContentWrapper>
                    {leftHelper && (
                        <LeftHelper
                            className={cx(
                                rangeErrorClass,
                                firstValueErrorClass,
                                secondValueErrorClass,
                                rangeSuccessClass,
                                firstValueSuccessClass,
                                secondValueSuccessClass,
                            )}
                        >
                            {leftHelper}
                        </LeftHelper>
                    )}
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
    },
};
