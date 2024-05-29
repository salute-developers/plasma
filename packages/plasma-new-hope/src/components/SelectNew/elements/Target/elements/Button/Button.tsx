import React from 'react';

import { cx, isEmpty } from '../../../../../../utils';
import { classes } from '../../../../SelectNew.tokens';

import { ButtonProps, GetLabelProps } from './Button.types';
import { StyledButton, StyledArrow, InnerWrapper, Label, ButtonWrapper, IconArrowWrapper } from './Button.styles';

const getLabel = ({ value, label, isTargetAmount, multiselect, valueToItemMap }: GetLabelProps) => {
    // if (multiselect && Array.isArray(value)) {
    //     if (!value.length) {
    //         return 'Ничего не выбрано';
    //     }
    //
    //     if (isTargetAmount) {
    //         return `Выбрано: ${value.length}`;
    //     }
    //
    //     return value
    //         .map((value) => valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label)
    //         .join(', ');
    // }
    //
    // if (!value) {
    //     return 'Ничего не выбрано';
    // }
    //
    // if (isTargetAmount) {
    //     return 'Выбрано: 1';
    // }
    //
    // return valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label;

    if (isEmpty(value)) {
        return label;
    }
    if (multiselect && Array.isArray(value)) {
        return value
            .map((value) => valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label)
            .join(', ');
    }
    return valueToItemMap.get(value)?.label;
};

export const Button: React.FC<ButtonProps> = ({
    opened,
    value,
    isTargetAmount,
    multiselect,
    valueToItemMap,
    onKeyDown,
    label,
}) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    return (
        <ButtonWrapper>
            <StyledButton
                stretching="filled"
                onKeyDown={onKeyDown}
                className={opened ? classes.selectWithoutBoxShadow : undefined}
            >
                <InnerWrapper>
                    <Label>
                        {getLabel({
                            value,
                            isTargetAmount,
                            multiselect,
                            valueToItemMap,
                            label,
                        })}
                    </Label>

                    <IconArrowWrapper>
                        <StyledArrow
                            size="s"
                            color="inherit"
                            className={cx(classes.selectTargetArrow, withArrowInverse)}
                        />
                    </IconArrowWrapper>
                </InnerWrapper>
            </StyledButton>
        </ButtonWrapper>
    );
};
