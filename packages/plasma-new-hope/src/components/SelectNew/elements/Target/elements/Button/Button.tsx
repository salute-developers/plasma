import React from 'react';

import { cx } from '../../../../../../utils';
import { classes } from '../../../../SelectNew.tokens';

import { ButtonProps, GetLabelProps } from './Button.types';
import { StyledButton, StyledArrow, Wrapper, Label } from './Button.styles';

const getLabel = ({ value, isTargetAmount, multiselect, valueToItemMap }: GetLabelProps) => {
    if (multiselect && Array.isArray(value)) {
        if (!value.length) {
            return 'Ничего не выбрано';
        }

        if (isTargetAmount) {
            return `Выбрано: ${value.length}`;
        }

        return value
            .map((value) => valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label)
            .join(', ');
    }

    if (!value) {
        return 'Ничего не выбрано';
    }

    if (isTargetAmount) {
        return 'Выбрано: 1';
    }

    return valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label;
};

export const Button: React.FC<ButtonProps> = ({ opened, value, isTargetAmount, multiselect, valueToItemMap }) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    return (
        <StyledButton stretching="filled">
            <Wrapper>
                <Label>
                    {getLabel({
                        value,
                        isTargetAmount,
                        multiselect,
                        valueToItemMap,
                    })}
                </Label>

                <StyledArrow size="s" color="inherit" className={cx(classes.selectTargetArrow, withArrowInverse)} />
            </Wrapper>
        </StyledButton>
    );
};
