import React, { forwardRef, useState, createRef, useCallback, useRef, MouseEventHandler, useLayoutEffect } from 'react';
import { css } from '@linaria/core';
import { useResizeObserver } from '@salutejs/plasma-core';

import { cx, mergeRefs } from '../../utils';
import type { RootProps } from '../../engines/types';
import { useOutsideClick } from '../../hooks';

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
    OuterLabelWrapper,
    StyledIndicatorWrapper,
    StyledHintWrapper,
    TitleCaption,
    StyledOutsideHelpersWrapper,
    StyledHiddenTextArea,
    StyledContentWrapper,
    StyledHeaderSlot,
} from './TextArea.styles';
import { classes } from './TextArea.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as readOnlyCSS } from './variations/_read-only/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as hintViewCSS } from './variations/_hint-view/base';
import { base as hintSizeCSS } from './variations/_hint-size/base';
import type { TextAreaProps, TextAreaRootProps } from './TextArea.types';
import { HintComponent } from './ui/Hint/Hint';

const {
    innerPlaceholderUp,
    focusedOuterPlaceholderColor,
    hidePlaceHolder,
    styledContainer,
    styledTextArea,
    styledTextAreaWrapper,
    styledPlaceholder,
    styledHelpers,
    hasHeaderSlot,
    styledContentWrapper,
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

const HINT_DEFAULT_OFFSET: [number, number] = [0, 0];

// TODO: Перенести этот метод в файл applyDynamicLabel.ts
export const getDynamicLabelClasses = (props: TextAreaProps, focused: boolean) => {
    const { readOnly, label, labelPlacement, rows, value, size } = props;

    // Добавить класс отвечающий за изменение цвета плейсхолдера при фокусе
    const withFocusedOuterUpPlaceholder =
        !readOnly && focused && (!label || labelPlacement === 'outer') ? focusedOuterPlaceholderColor : undefined;

    // Добавить класс отвечающий за поднятие и уменьшение плейсхолдера
    const withInnerPlaceholderUp =
        labelPlacement === 'inner' &&
        label &&
        !rows &&
        size !== 'xs' &&
        ((!readOnly && (value || focused)) || (readOnly && value))
            ? innerPlaceholderUp
            : undefined;

    // Добавить класс отвечающий за скрытие плейсхолдера
    const withHidePlaceholder =
        (value && !label) ||
        (labelPlacement === 'inner' && ((focused && !readOnly) || value) && label && rows) ||
        (labelPlacement === 'outer' && value) ||
        (labelPlacement === 'inner' && size === 'xs' && value)
            ? hidePlaceHolder
            : undefined;

    return [withFocusedOuterUpPlaceholder, withInnerPlaceholderUp, withHidePlaceholder];
};

export const textAreaRoot = (Root: RootProps<HTMLTextAreaElement, TextAreaRootProps>) =>
    forwardRef<HTMLTextAreaElement, TextAreaProps>((props, innerRef) => {
        const {
            id,
            className,
            style,

            // layout
            label,
            labelPlacement = 'inner',
            titleCaption,
            placeholder,
            leftHelper,
            leftHelperPlacement = 'inner',
            helperText,
            rightHelper,
            contentRight,
            headerSlot,
            requiredPlacement = 'right',
            hasRequiredIndicator = false,

            // hint
            hintTrigger = 'hover',
            hintText,
            hintView = 'default',
            hintSize = 'm',
            hintTargetIcon,
            hintPlacement = 'auto',
            hintHasArrow,
            hintOffset = HINT_DEFAULT_OFFSET,
            hintWidth,
            hintContentLeft,

            // variations
            appearance,
            status,
            view,
            size,
            readOnly,
            disabled,
            required = false,
            clear,
            optional = false,
            optionalText = 'optional',
            hasDivider,

            // controlled
            value,
            defaultValue,

            // textarea-specific
            resize,
            autoResize = false,
            minAuto = 0,
            maxAuto,
            height,
            width,
            rows,
            cols,

            // events
            onChange,

            // additional
            labelAriaHidden = false,

            ...rest
        } = props;

        const [isHintVisible, setIsHintVisible] = useState(false);
        const [helperWidth, setHelperWidth] = useState<string>(width ? `${width}rem` : '100%');
        const [focused, setFocused] = useState(false);
        // TODO: перенести в общую переменную для value снаружи и внутри
        const [uncontrolledValue, setUncontrolledValue] = useState<string | undefined>();

        const outerRef = createRef<HTMLTextAreaElement>();
        const hiddenRef = useRef<HTMLTextAreaElement | null>(null);
        const hintRef = useRef<HTMLDivElement>(null);

        useOutsideClick(() => {
            setIsHintVisible(false);
        }, [hintRef]);

        const isInnerLeftHelperPlacement = leftHelperPlacement === 'inner';
        const leftHelperText = leftHelper || helperText;
        const innerOptional = required ? false : optional;
        const hasLeftHelper = Boolean(leftHelper || helperText);
        const hasRightHelper = Boolean(rightHelper);
        const hasHelper = !isInnerLeftHelperPlacement ? hasRightHelper : hasLeftHelper || hasRightHelper;
        const hasOuterLabel = Boolean(label && labelPlacement === 'outer');
        const hasInnerLabel = Boolean(label && labelPlacement === 'inner' && size !== 'xs');
        const hasPlaceholderOptional = innerOptional && !hasOuterLabel;
        const hasHeader = Boolean(headerSlot) && !(clear || appearance === 'clear');

        const overriddenView = status !== undefined ? fallbackStatusMap[status] : view;
        const textareaHelperId = id ? `${id}-helper` : undefined;
        const applyCustomWidth = resize !== 'horizontal' && resize !== 'both' && !cols;
        const placeholderLabel = hasInnerLabel ? label : placeholder;
        const applyAutoResize = autoResize || Boolean(clear || appearance === 'clear');

        const clearClass = clear || appearance === 'clear' ? classes.clear : undefined;
        const hasHintClass = hintText ? classes.hasHint : undefined;
        const hasRightContentClass = contentRight ? classes.hasRightContent : undefined;
        const hasDividerClass = hasDivider ? classes.hasDivider : undefined;
        const requiredPlacementClass = requiredPlacement === 'right' ? classes.requiredAlignRight : undefined;

        const handleHintShow = () => setIsHintVisible(true);
        const handleHintHide = () => setIsHintVisible(false);
        const handleHintClick: MouseEventHandler = (event) => {
            if (!hintText || hintTrigger !== 'click') {
                return;
            }

            event.stopPropagation();
            const targetIsPopover = event.target === hintRef.current;
            const rootHasTarget = hintRef.current?.contains(event.target as Element);

            if (!targetIsPopover && !rootHasTarget) {
                setIsHintVisible(true);
            }
        };

        useLayoutEffect(() => {
            if (outerRef.current) {
                setUncontrolledValue(outerRef.current.value);
            }
        }, [outerRef]);

        useResizeObserver(outerRef, (currentElement) => {
            const { width: inlineWidth } = currentElement.style;

            if (inlineWidth || cols) {
                const { width: elementWidth } = currentElement.getBoundingClientRect();
                setHelperWidth(`${elementWidth / ROOT_FONT_SIZE}rem`);
            }
        });

        useAutoResize(applyAutoResize, outerRef, value || uncontrolledValue, minAuto, maxAuto, resize, hiddenRef, size);

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

        const handleTextAreaFocus = () => {
            if (readOnly || disabled || !outerRef?.current) {
                return;
            }

            outerRef.current.focus();
        };

        const dynamicLabelClasses = getDynamicLabelClasses(
            {
                size,
                readOnly,
                label,
                labelPlacement,
                value: value || uncontrolledValue || defaultValue,
                rows,
                labelAriaHidden,
            },
            focused,
        );

        const optionalTextNode = innerOptional ? (
            <StyledOptionalText inheritFont={!hasOuterLabel}>
                {Boolean(hasPlaceholderOptional && (placeholderLabel || label)) && '\xa0'}
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
                className={cx(clearClass, hasDividerClass, hasHintClass, className)}
                onClick={handleTextAreaFocus}
                data-root
                {...(hintText && {
                    hintView,
                    hintSize,
                })}
            >
                {(hasOuterLabel || titleCaption) && (
                    <OuterLabelWrapper width={helperWidth} isInnerLabel={labelPlacement === 'inner'}>
                        {hasOuterLabel && (
                            <StyledIndicatorWrapper>
                                <StyledLabel aria-hidden={labelAriaHidden}>{label}</StyledLabel>

                                {hintText && (
                                    <StyledHintWrapper>
                                        <HintComponent
                                            ref={hintRef}
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
                <StyledContainer
                    className={cx(styledContainer, ...dynamicLabelClasses)}
                    width={helperWidth}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                >
                    {!hasOuterLabel && (
                        <>
                            {required && hasRequiredIndicator && (
                                <StyledIndicator className={cx(classes.innerLabelPlacement, requiredPlacementClass)} />
                            )}
                            {hintText && (
                                <StyledHintWrapper className={classes.innerLabelPlacement}>
                                    <HintComponent
                                        ref={hintRef}
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
                    <StyledTextAreaWrapper
                        className={cx(styledTextAreaWrapper, hasHeader && hasHeaderSlot)}
                        hasHelper={hasHelper}
                        hasHeader={hasHeader}
                    >
                        {headerSlot && !clear && <StyledHeaderSlot>{headerSlot}</StyledHeaderSlot>}

                        {contentRight && !hasHeader && <StyledContent>{contentRight}</StyledContent>}

                        {hasHeader && (
                            <StyledContentWrapper className={styledContentWrapper} hasHeader={hasHeader}>
                                {contentRight && <StyledContent hasHeader={hasHeader}>{contentRight}</StyledContent>}
                                {headerSlot && placeholderLabel && (
                                    <StyledPlaceholder
                                        hasContentRight={Boolean(contentRight)}
                                        className={styledPlaceholder}
                                        htmlFor={id}
                                    >
                                        {placeholderLabel}
                                        {!hasOuterLabel && optionalTextNode}
                                    </StyledPlaceholder>
                                )}
                            </StyledContentWrapper>
                        )}
                        <StyledTextArea
                            className={cx(styledTextArea, hasRightContentClass)}
                            id={id}
                            hasContentRight={Boolean(contentRight)}
                            hasHelper={hasHelper}
                            applyCustomWidth={applyCustomWidth}
                            ref={mergeRefs(outerRef, innerRef)}
                            disabled={disabled}
                            required={required}
                            height={applyAutoResize ? minAuto : height}
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
                            data-tour
                            {...rest}
                        />
                        {applyAutoResize && (
                            <StyledHiddenTextArea
                                aria-hidden
                                ref={hiddenRef}
                                hasContentRight={Boolean(contentRight)}
                                value={value || uncontrolledValue || ' '}
                                defaultValue={defaultValue}
                            />
                        )}
                    </StyledTextAreaWrapper>
                    {hasHelper && (
                        <StyledHelpers className={styledHelpers} id={textareaHelperId}>
                            {isInnerLeftHelperPlacement && (leftHelper || helperText) && (
                                <StyledLeftHelper className={focused ? classes.leftHelperFocus : ''}>
                                    {leftHelper || helperText}
                                </StyledLeftHelper>
                            )}
                            {rightHelper && <StyledRightHelper data-root>{rightHelper}</StyledRightHelper>}
                        </StyledHelpers>
                    )}
                    {!hasHeader && placeholderLabel && (
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
                {hasLeftHelper && !isInnerLeftHelperPlacement && (
                    <StyledOutsideHelpersWrapper id={textareaHelperId}>
                        <StyledLeftHelper>{leftHelperText}</StyledLeftHelper>
                    </StyledOutsideHelpersWrapper>
                )}
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
        readOnly: {
            css: readOnlyCSS,
            attrs: true,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        hintView: {
            css: hintViewCSS,
        },
        hintSize: {
            css: hintSizeCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'primary',
    },
};
