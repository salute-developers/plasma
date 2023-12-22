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
    const { readOnly, label, labelPlacement, autoResize, rows, value } = props;

    // Добавить класс отвечающий за изменение цвета плейсхолдера при фокусе
    const withFocusedOuterUpPlaceholder =
        !readOnly && focused && (!label || labelPlacement === 'outer') ? focusedOuterPlaceholderColor : undefined;

    // Добавить класс отвечающий за поднятие и уменьшение плейсхолдера
    const withInnerPlaceholderUp =
        labelPlacement === 'inner' &&
        label &&
        !autoResize &&
        !rows &&
        ((!readOnly && (value || focused)) || (readOnly && value))
            ? innerPlaceholderUp
            : undefined;

    // Добавить класс отвечающий за скрытие плейсхолдера
    const withHidePlaceholder =
        (value && !label) ||
        (labelPlacement === 'inner' && ((focused && !readOnly) || value) && label && (rows || autoResize)) ||
        (labelPlacement === 'outer' && value)
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
            height,
            width,
            value,
            disabled,
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
        const hasHelper = Boolean(leftHelper || rightHelper || helperText);
        const overriddenView = status !== undefined ? fallbackStatusMap[status] : view;
        const textareaHelperId = id ? `${id}-helper` : undefined;
        const applyCustomWidth = resize !== 'horizontal' && resize !== 'both' && !cols;
        const placeLabel = labelPlacement === 'inner' && label ? label : placeholder;

        useResizeObserver(outerRef, (currentElement) => {
            const { width: inlineWidth, height: inlineHeight } = currentElement.style;

            if (inlineWidth || inlineHeight || cols) {
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
            { readOnly, label, labelPlacement, autoResize, rows, value: value || uncontrolledValue },
            focused,
        );

        return (
            <Root
                view={overriddenView}
                size={size}
                disabled={disabled}
                readOnly={readOnly}
                style={style}
                className={className}
            >
                {label && labelPlacement === 'outer' && <StyledLabel>{label}</StyledLabel>}
                <StyledContainer
                    className={cx(styledContainer, ...dynamicLabelClasses)}
                    width={helperWidth}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                >
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
                            placeholder={placeLabel}
                            aria-describedby={textareaHelperId}
                            value={value}
                            readOnly={readOnly}
                            rows={rows}
                            cols={cols}
                            resize={resize}
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
                    {placeLabel && (
                        <StyledPlaceholder className={styledPlaceholder} htmlFor={id}>
                            {placeLabel}
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
