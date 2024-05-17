import React from 'react';

import { cx } from '../../../../../../utils';
import { classes } from '../../../../SelectNew.tokens';

import { StyledButton, StyledArrow, Wrapper, Label } from './Button.styles';

const getLabel = (values, targetView) => {
    if (!values.length) {
        return 'Ничего не выбрано';
    }
    switch (targetView) {
        case 'amount': {
            return `Выбрано: ${values.length}`;
        }

        case 'secondaryLabel': {
            return values.map(({ secondaryLabel }) => secondaryLabel).join(', ');
        }

        default: {
            return values.map(({ label }) => label).join(', ');
        }
    }
};

export const Button: React.FC<any> = ({ opened, values, targetView }) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    return (
        <StyledButton stretching="filled">
            <Wrapper>
                <Label>{getLabel(values, targetView)}</Label>

                <StyledArrow size="s" color="inherit" className={cx(classes.selectTargetArrow, withArrowInverse)} />
            </Wrapper>
        </StyledButton>
    );
};
