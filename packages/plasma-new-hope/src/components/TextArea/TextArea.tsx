import React, { forwardRef, useState, createRef, useCallback } from 'react';
import { css } from '@linaria/core';
import { useResizeObserver } from '@salutejs/plasma-core';

import { cx } from '../../utils';
import type { RootProps } from '../../engines/types';

import { applyDynamicLabel } from './mixins';
import { useAutoResize, ROOT_FONT_SIZE } from './hooks';
import {
    StyledContent,
    StyledHelpers,
    StyledLeftHelper,
    StyledRightHelper,
    StyledLabel,
    StyledPlaceholder,
    StyledTextArea,
    StyledTextAreaWrapper,
    StyledContainer,
    StyledIndicator,
    StyledOptionalText,
} from './TextArea.styles';
import { classes } from './TextArea.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import type { TextAreaProps } from './TextArea.types';

const {
    innerPlaceholderUp,
    focusedOuterPlaceholderColor,
    hidePlaceHolder,
    styledContainer,
    styledTextArea,
    styledTextAreaWrapper,
    styledPlaceholder,
    styledHelpers,
} = classes;

const optionalText = 'optional';

const base = css`
    ${applyDynamicLabel};

    position: relative;
    box-sizing: border-box;
`;

// TODO: Удалить после отказа от старых библиотек plasma-web / plasma-b2c
const fallbackStatusMap = {
    '': 'primary',
    success: 'positive',
    warning: 'warning',
    error: 'negative',
};

// TODO: Перенести этот метод в файл applyDynamicLabel.ts
export const getDynamicLabelClasses = (props: TextAreaProps, focused: boolean) => {
    const { readOnly, label, labelPlacement, autoResize, rows, value, size } = props;

    // Добавить класс отвечающий за изменение цвета плейсхолдера при фокусе
    const withFocusedOuterUpPlaceholder =
        !readOnly && focused && (!label || labelPlacement === 'outer') ? focusedOuterPlaceholderColor : undefined;

    // Добавить класс отвечающий за поднятие и уменьшение плейсхолдера
    const withInnerPlaceholderUp =
        labelPlacement === 'inner' &&
        label &&
        !autoResize &&
        !rows &&
        size !== 'xs' &&
        ((!readOnly && (value || focused)) || (readOnly && value))
            ? innerPlaceholderUp
            : undefined;

    // Добавить класс отвечающий за скрытие плейсхолдера
    const withHidePlaceholder =
        (value && !label) ||
        (labelPlacement === 'inner' && ((focused && !readOnly) || value) && label && (rows || autoResize)) ||
        (labelPlacement === 'outer' && value) ||
        (labelPlacement === 'inner' && size === 'xs' && value)
            ? hidePlaceHolder
            : undefined;

    return [withFocusedOuterUpPlaceholder, withInnerPlaceholderUp, withHidePlaceholder];
};

export const textAreaRoot = (Root: RootProps<HTMLTextAreaElement, TextAreaProps>) =>
    forwardRef<HTMLTextAreaElement, TextAreaProps>((props, innerRef) => {
        const {
            helperText,
            status,
            resize,
            rightHelper,
            leftHelper,
            contentRight,
            autoResize = false,
            minAuto = 0,
            maxAuto,
            label,
            labelPlacement = 'inner',
            placeholder,
            defaultValue,
            height,
            width,
            value,
            disabled,
            required = false,
            requiredPlacement = 'right',
            optional = false,
            size,
            view,
            id,
            style,
            className,
            readOnly,
            rows,
            cols,
            onChange,
            ...rest
        } = props;

        const [helperWidth, setHelperWidth] = useState<string>(width ? `${width}rem` : '100%');
        const [focused, setFocused] = useState(false);
        const [uncontrolledValue, setUncontrolledValue] = useState<string | undefined>();

        const outerRef = innerRef && 'current' in innerRef ? innerRef : createRef<HTMLTextAreaElement>();

        const innerOptional = required ? false : optional;
        const hasHelper = Boolean(leftHelper || rightHelper || helperText);
        const hasOuterLabel = Boolean(label && labelPlacement === 'outer');
        const hasInnerLabel = Boolean(label && labelPlacement === 'inner' && size !== 'xs');
        const hasPlaceholderOptional = innerOptional && !hasOuterLabel;

        const overriddenView = status !== undefined ? fallbackStatusMap[status] : view;
        const textareaHelperId = id ? `${id}-helper` : undefined;
        const applyCustomWidth = resize !== 'horizontal' && resize !== 'both' && !cols;
        const placeholderLabel = hasInnerLabel ? label : placeholder;

        const requiredPlacementClass = requiredPlacement === 'right' ? 'align-right ' : undefined;

        useResizeObserver(outerRef, (currentElement) => {
            const { width: inlineWidth } = currentElement.style;

            if (inlineWidth || cols) {
                const { width: elementWidth } = currentElement.getBoundingClientRect();
                setHelperWidth(`${elementWidth / ROOT_FONT_SIZE}rem`);
            }
        });

        useAutoResize(autoResize, outerRef, value, minAuto, maxAuto);

        const onFocusHandler = useCallback(() => {
            setFocused(true);
        }, []);

        const onBlurHandler = useCallback(() => {
            setFocused(false);
        }, []);

        const onChangeHandler = useCallback(
            (event: React.ChangeEvent<HTMLTextAreaElement>) => {
                // INFO: Для крайне редких кейсов, когда value снаружи не контролируется
                if (value === undefined) {
                    setUncontrolledValue(event?.target.value);
                }

                onChange?.(event);
            },
            [value, onChange],
        );

        const dynamicLabelClasses = getDynamicLabelClasses(
            {
                size,
                readOnly,
                label,
                labelPlacement,
                value: value || uncontrolledValue || defaultValue,
                ...(rows ? { rows } : { autoResize }),
            },
            focused,
        );

        const optionalTextNode = innerOptional ? (
            <StyledOptionalText>
                {Boolean(hasPlaceholderOptional ? placeholderLabel : label) && '\xa0'}
                {optionalText}
            </StyledOptionalText>
        ) : null;

        return (
            <Root
                view={overriddenView}
                size={size}
                disabled={disabled}
                readOnly={readOnly}
                style={{ width: helperWidth, ...style }}
                className={className}
            >
                {hasOuterLabel && (
                    <StyledLabel>
                        {required && (
                            <StyledIndicator className={cx(classes.outerLabelPlacement, requiredPlacementClass)} />
                        )}
                        {label}
                        {optionalTextNode}
                    </StyledLabel>
                )}
                <StyledContainer
                    className={cx(styledContainer, ...dynamicLabelClasses)}
                    width={helperWidth}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                >
                    {required && !hasOuterLabel && (
                        <StyledIndicator className={cx(classes.innerLabelPlacement, requiredPlacementClass)} />
                    )}
                    {contentRight && <StyledContent>{contentRight}</StyledContent>}
                    <StyledTextAreaWrapper className={styledTextAreaWrapper} hasHelper={hasHelper}>
                        <StyledTextArea
                            className={styledTextArea}
                            id={id}
                            hasContentRight={Boolean(contentRight)}
                            hasHelper={hasHelper}
                            applyCustomWidth={applyCustomWidth}
                            ref={outerRef}
                            disabled={disabled}
                            height={autoResize ? minAuto : height}
                            width={width}
                            placeholder={placeholderLabel}
                            aria-describedby={textareaHelperId}
                            value={value}
                            readOnly={readOnly}
                            rows={rows}
                            cols={cols}
                            resize={resize}
                            defaultValue={defaultValue}
                            onChange={onChangeHandler}
                            {...rest}
                        />
                    </StyledTextAreaWrapper>
                    {hasHelper && (
                        <StyledHelpers className={styledHelpers} id={textareaHelperId}>
                            {(leftHelper || helperText) && (
                                <StyledLeftHelper>{leftHelper || helperText}</StyledLeftHelper>
                            )}
                            {rightHelper && <StyledRightHelper>{rightHelper}</StyledRightHelper>}
                        </StyledHelpers>
                    )}
                    {placeholderLabel && (
                        <StyledPlaceholder
                            hasContentRight={Boolean(contentRight)}
                            className={styledPlaceholder}
                            htmlFor={id}
                        >
                            {placeholderLabel}
                            {!hasOuterLabel && optionalTextNode}
                        </StyledPlaceholder>
                    )}
                </StyledContainer>
            </Root>
        );
    });

export const textAreaConfig = {
    name: 'TextArea',
    tag: 'div',
    layout: textAreaRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        readOnly: {
            attrs: true,
        },
    },
    defaults: {
        size: 'm',
        view: 'primary',
    },
};
