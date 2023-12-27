import React, { useCallback } from 'react';

import { classes } from '../../Select.tokens';
import { cx } from '../../../../utils';
import { SelectChip } from '../SelectChip/SelectChip';
import type { SelectPrimitiveValue } from '../../Select.types';

import {
    StyledArrow,
    StyledChips,
    StyledChipsWrapper,
    StyledLabel,
    StyledSelectTarget,
    StyledText,
} from './SelectTarget.styles';
import type { SelectTargetProps } from './SelectTarget.types';

const {
    hasChips,
    innerLabelUp,
    arrowInverse,
    selectTarget,
    selectTargetArrow,
    selectTargeText,
    selectTargetLabel,
} = classes;

/**
 * Элемент для выпадающего списка
 */
export const SelectTarget = ({
    values,
    target = 'textField-like',
    label,
    isOpen,
    readOnly,
    disabled,
    enumerationType,
    size,
    id,
    onChipClick,
    onChangeValue,
    ...rest
}: SelectTargetProps) => {
    const hasText = Boolean(values?.some(([value]) => value));

    const showLabel = label && size !== 'xs' && target === 'textField-like';
    const textContent = values?.map(([, text]) => text).join(', ');
    const contentRef = useRef<HTMLDivElement>(null);

    const withArrowInverse = isOpen ? arrowInverse : undefined;
    const withInnerLabelUp = showLabel && hasText ? innerLabelUp : undefined;
    const withHasChips = hasText && enumerationType === 'chip' && target === 'textField-like' ? hasChips : undefined;

    const onChipClear = useCallback(
        (value: SelectPrimitiveValue, text: SelectPrimitiveValue, index: number) => {
            const newValue = values
                ?.filter(([itemValue, itemText]) => !(itemValue === value && itemText === text))
                .map(([itemValue]) => itemValue);

            chipsRefs?.current.splice(index, 1);
            onChangeValue?.(newValue);
        },
        [values, onChangeValue],
    );

    const onChipKeyDown = useCallback(
        (
            value: SelectPrimitiveValue,
            text: SelectPrimitiveValue,
            index: number,
            event: React.KeyboardEvent<HTMLButtonElement>,
        ) => {
            const { code, shiftKey } = event;

            if (code === Keys.Tab || (code === Keys.Tab && shiftKey)) {
                event.preventDefault();
            }

            if (code === Keys.Backspace) {
                onChipClear(value, text, index);
            }
        },
        [onChipClear],
    );

    const onWheel = useCallback((event: React.WheelEvent<HTMLButtonElement>) => {
        const { deltaY } = event;

        if (contentRef.current) {
            contentRef.current.scrollLeft += Math.round(deltaY);
        }
    }, []);

    const getRef = useCallback((element: HTMLButtonElement | null, index: number) => {
        if (element && chipsRefs && chipsRefs.current) {
            chipsRefs.current[index] = element;
        }
    }, []);

    // INFO: Нужно очищать на каждый ререндер компонента для актуализации состояния рефов
    if (chipsRefs) {
        chipsRefs.current = [];
    }

    return (
        <StyledSelectTarget
            {...rest}
            ref={ref}
            isOpen={isOpen}
            target={target}
            readOnly={readOnly}
            disabled={disabled}
            title={textContent}
            aria-label={label}
            className={cx(withInnerLabelUp, withHasChips, selectTarget)}
            onWheel={onWheel}
            onKeyDown={onKeyDown}
        >
            {hasText &&
                (enumerationType === 'comma' || target === 'button' ? (
                    <StyledText className={selectTargeText}>{textContent}</StyledText>
                ) : (
                    <StyledChipsWrapper ref={contentRef}>
                        <StyledChips>
                            {values?.map(([value, text], index) => (
                                <SelectChip
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
                    </StyledChipsWrapper>
                ))}
            {(!hasText || (showLabel && enumerationType === 'comma')) && (
                <StyledLabel className={selectTargetLabel} htmlFor={id}>
                    {label}
                </StyledLabel>
            )}
            <StyledArrow size="s" className={cx(selectTargetArrow, withArrowInverse)} />
        </StyledSelectTarget>
    );
};
