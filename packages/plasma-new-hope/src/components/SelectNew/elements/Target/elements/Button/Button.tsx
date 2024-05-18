import React from 'react';

import { cx } from '../../../../../../utils';
import { classes } from '../../../../SelectNew.tokens';

import { StyledButton, StyledArrow, Wrapper, Label } from './Button.styles';

const getLabel = (value, targetView, multiselect, valueToItemMap) => {
    if (!value || !value.length) {
        return 'Ничего не выбрано';
    }

    if (!multiselect) {
        value = [value];
    }

    switch (targetView) {
        case 'amount': {
            return `Выбрано: ${value.length}`;
        }

        default: {
            return value
                .map((value) => valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label)
                .join(', ');
        }
    }
};

export const Button: React.FC<any> = ({ opened, value, targetView, multiselect, valueToItemMap }) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    return (
        <StyledButton stretching="filled">
            <Wrapper>
                <Label>{getLabel(value, targetView, multiselect, valueToItemMap)}</Label>

                <StyledArrow size="s" color="inherit" className={cx(classes.selectTargetArrow, withArrowInverse)} />
            </Wrapper>
        </StyledButton>
    );
};
