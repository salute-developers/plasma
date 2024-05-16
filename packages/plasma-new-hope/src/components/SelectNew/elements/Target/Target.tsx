import React, { forwardRef, useRef } from 'react';

import { cx } from '../../../../utils';

import { Chip } from './elements/Chip/Chip';
import {
    StyledArrow,
    StyledChips,
    StyledChipsWrapper,
    StyledLabel,
    StyledSelectTarget,
    StyledText,
} from './Target.styles';
import type { SelectTargetProps } from './Target.types';

export const classes = {
    selectTarget: 'select-target',
    selectTargeText: 'select-target-text',
    selectTargetLabel: 'select-target-label',
    selectTargetArrow: 'select-target-arrow',
    arrowInverse: 'arrow-inverse',
    selectItemIsSelected: 'select-item-is-selected',
    selectItemIsDisabled: 'select-item-is-disabled',
    nativeSelectVisible: 'native-select-visible',
    hasNoFocus: 'has-no-focus',
    hasChips: 'has-chips',
    innerLabelUp: 'inner-label-up',
};

const {
    hasNoFocus,
    hasChips,
    innerLabelUp,
    arrowInverse,
    selectTarget,
    selectTargetArrow,
    selectTargeText,
    selectTargetLabel,
} = classes;

export const Target = forwardRef<HTMLButtonElement, SelectTargetProps>(
    ({ values, target, label, opened, readOnly, disabled, size, id, onChange, onKeyDown, ...rest }, ref) => {
        const hasLabel = label && target === 'textfield';
        const textContent = values.map(({ label }) => label).join(', ');
        const contentRef = useRef<HTMLDivElement>(null);

        const withArrowInverse = opened ? arrowInverse : undefined;
        const withInnerLabelUp = hasLabel ? innerLabelUp : undefined;
        const withHasChips = target === 'textfield' ? hasChips : undefined;

        const withNoFocus = target === 'textfield' ? hasNoFocus : undefined;

        const isLabelVisible = hasLabel;

        const onChipClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
        };

        const onChipClear = (value: any, text: any) => {
            const newValue = values
                ?.filter(([itemValue, itemText]) => !(itemValue === value && itemText === text))
                .map(([itemValue]) => itemValue);

            onChange?.(newValue);
        };

        return (
            <StyledSelectTarget
                {...rest}
                ref={ref}
                opened={opened}
                target={target}
                readOnly={readOnly}
                disabled={disabled}
                title={textContent}
                aria-label={label}
                className={cx(withInnerLabelUp, withHasChips, withNoFocus, selectTarget)}
                onKeyDown={onKeyDown}
                stretching="filled"
            >
                {target === 'button' ? (
                    <StyledText className={selectTargeText}>{textContent}</StyledText>
                ) : (
                    <StyledChipsWrapper ref={contentRef}>
                        <StyledChips>
                            {values?.map(({ value, label: text }, index) => (
                                <Chip
                                    index={index}
                                    key={`${value}_${text}`}
                                    disabled={disabled}
                                    readOnly={readOnly}
                                    value={value}
                                    text={text}
                                    onClear={(v, t) => onChipClear(v, t)}
                                    onClick={onChipClick}
                                />
                            ))}
                        </StyledChips>
                    </StyledChipsWrapper>
                )}

                {isLabelVisible && (
                    <StyledLabel className={selectTargetLabel} htmlFor={id}>
                        {label}
                    </StyledLabel>
                )}
                <StyledArrow size="s" color="inherit" className={cx(selectTargetArrow, withArrowInverse)} />
            </StyledSelectTarget>
        );
    },
);
