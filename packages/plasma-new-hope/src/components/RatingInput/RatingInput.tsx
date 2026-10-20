import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import cls from 'classnames';
import type { RootPropsOmitOnChangeAndDefaultValue } from 'src/engines';

import type { RatingInputProps } from './RatingInput.types';
import { classes } from './RatingInput.tokens';
import { base, Content, LimitLabel, LimitLabels, Scale, Score, Stars } from './RatingInput.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as iconSizeCSS } from './variations/_iconSize/base';
import { getPositiveInteger, getRatingValue } from './utils';
import { RatingIcons } from './ui';

export const ratingInputRoot = (Root: RootPropsOmitOnChangeAndDefaultValue<HTMLDivElement, RatingInputProps>) =>
    forwardRef<HTMLDivElement, RatingInputProps>(
        (
            {
                value,
                defaultValue = null,
                name,
                onChange,
                onHoverChange,
                allowClear = false,
                hasValue = false,
                renderValue,
                getLabelText,
                valuePlacement = 'bottom',
                valueAlign = 'center',
                iconSize = 'm',
                iconSlot,
                iconSlotOutline,
                fractions = 1,
                renderFractionIcon,
                iconQuantity = 5,
                hasLimitLabels = false,
                minLabel,
                maxLabel,
                limitLabelsPlacement = 'side',
                className,
                onKeyDown,
                size,
                view,
                'aria-label': ariaLabel,
                'aria-labelledby': ariaLabelledBy,
                ...rest
            },
            ref,
        ) => {
            const count = getPositiveInteger(iconQuantity, 5);
            const parts = getPositiveInteger(fractions, 1);
            const [innerValue, setInnerValue] = useState(defaultValue);
            const [hoverValue, setHoverValue] = useState<number | null>(null);
            const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
            const controlled = value !== undefined;
            const selected = getRatingValue(controlled ? value : innerValue, count, parts);
            const displayed = hoverValue ?? selected ?? 0;
            const sideLabels = hasLimitLabels && limitLabelsPlacement === 'side';

            useEffect(() => {
                const form = inputRefs.current[0]?.form;
                if (!form || controlled) {
                    return;
                }

                let resetTimer: ReturnType<typeof setTimeout>;
                const handleReset = (event: Event) => {
                    resetTimer = setTimeout(() => {
                        if (!event.defaultPrevented) {
                            setInnerValue(defaultValue);
                            setHoverValue(null);
                        }
                    }, 0);
                };

                form.addEventListener('reset', handleReset);
                return () => {
                    clearTimeout(resetTimer);
                    form.removeEventListener('reset', handleReset);
                };
            }, [controlled, defaultValue, name, count, parts]);

            const selectValue = (nextValue: number | null) => {
                if (nextValue === selected) {
                    return;
                }

                if (!controlled) {
                    setInnerValue(nextValue);
                }

                if (onChange) {
                    onChange(nextValue);
                }
            };

            const hover = (nextValue: number | null) => {
                if (nextValue !== hoverValue) {
                    setHoverValue(nextValue);

                    if (onHoverChange) {
                        onHoverChange(nextValue);
                    }
                }
            };

            const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
                if (onKeyDown) {
                    onKeyDown(event);
                }

                const target = event.target as HTMLInputElement;
                if (event.defaultPrevented || !target.hasAttribute('data-rating-input')) {
                    return;
                }

                if (event.key === ' ' && allowClear && selected === Number(target.value)) {
                    event.preventDefault();
                    hover(null);
                    selectValue(null);

                    return;
                }

                const focusedIndex = Math.round(Number(target.value) * parts) - 1;
                // Пустая оценка — шаг перед первым значением; после сброса фокус остаётся на первом варианте.
                const current = focusedIndex === 0 && !selected ? -1 : focusedIndex;
                const last = count * parts - 1;

                let next: number;

                switch (event.key) {
                    case 'Home':
                        next = 0;
                        break;
                    case 'End':
                        next = last;
                        break;
                    case 'ArrowRight':
                        next = current + 1;
                        break;
                    case 'ArrowLeft':
                        next = current - 1;
                        break;
                    case 'ArrowUp':
                        next = current + 1;
                        break;
                    case 'ArrowDown':
                        next = current - 1;
                        break;
                    default:
                        return;
                }

                event.preventDefault();
                hover(null);

                if (next > last) {
                    return;
                }

                selectValue(next < 0 ? null : (next + 1) / parts);

                inputRefs.current[Math.max(0, next)]?.focus();
            };

            const icons = (
                <RatingIcons
                    count={count}
                    parts={parts}
                    selected={selected}
                    displayed={displayed}
                    iconSize={iconSize}
                    iconSlot={iconSlot}
                    iconSlotOutline={iconSlotOutline}
                    renderFractionIcon={renderFractionIcon}
                    getLabelText={getLabelText}
                    name={name}
                    allowClear={allowClear}
                    inputRefs={inputRefs}
                    onSelect={selectValue}
                    onHover={hover}
                />
            );
            const handleMouseLeave = () => hover(null);

            const score = hasValue && <Score>{renderValue ? renderValue(selected) : selected}</Score>;

            return (
                <Root
                    {...rest}
                    ref={ref}
                    role="radiogroup"
                    aria-label={ariaLabel ?? (ariaLabelledBy ? undefined : 'Оценка')}
                    aria-labelledby={ariaLabelledBy}
                    className={cls(
                        className,
                        hasValue && classes.hasValue,
                        hasValue && valuePlacement === 'top' && classes.valueTop,
                        sideLabels && classes.sideLabels,
                        valueAlign === 'start' && classes.valueStart,
                        hasLimitLabels && !sideLabels && classes.bottomLabels,
                    )}
                    size={size}
                    view={view}
                    iconSize={iconSize}
                    onKeyDown={handleKeyDown}
                >
                    {valuePlacement === 'top' && score}
                    <Content>
                        {sideLabels && <LimitLabel>{minLabel}</LimitLabel>}
                        <Scale>
                            <Stars onMouseLeave={handleMouseLeave}>{icons}</Stars>
                            {hasLimitLabels && !sideLabels && (
                                <LimitLabels>
                                    <LimitLabel>{minLabel}</LimitLabel>
                                    <LimitLabel>{maxLabel}</LimitLabel>
                                </LimitLabels>
                            )}
                        </Scale>
                        {sideLabels && <LimitLabel>{maxLabel}</LimitLabel>}
                    </Content>
                    {valuePlacement === 'bottom' && score}
                </Root>
            );
        },
    );

export const ratingInputConfig = {
    name: 'RatingInput',
    tag: 'div',
    layout: ratingInputRoot,
    base,
    variations: {
        view: { css: viewCSS },
        size: { css: sizeCSS },
        iconSize: { css: iconSizeCSS },
    },
    defaults: {
        view: 'default',
        size: 'l',
        iconSize: 'm',
    },
};
