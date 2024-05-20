import React from 'react';

import { cx } from '../../../../../../utils';
import { classes } from '../../../../SelectNew.tokens';

import { Chip } from './elements/Chip/Chip';
import { StyledButton, StyledArrow, Wrapper, ChipWrapper, TextfieldWrapper } from './Textfield.styles';

const getLabel = (value, targetView, multiselect, valueToItemMap, onChipClick) => {
    if (!value || !value.length) {
        return <Chip text="Ничего не выбрано" onClick={(e) => e.stopPropagation()} />;
    }

    if (!multiselect) {
        value = [value];
    }

    switch (targetView) {
        case 'amount': {
            return <Chip text={`Выбрано: ${value.length}`} onClick={(e) => e.stopPropagation()} />;
        }

        default: {
            return value.map((value) => (
                <Chip
                    text={valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label}
                    onClick={(e) => {
                        e.stopPropagation();
                        onChipClick(value);
                    }}
                />
            ));
        }
    }
};

export const Textfield: React.FC<any> = ({ opened, value, targetView, multiselect, valueToItemMap, onChipClick }) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    return (
        <TextfieldWrapper opened={opened}>
            <StyledButton stretching="filled" className={classes.textfieldTarget}>
                <Wrapper>
                    <ChipWrapper>{getLabel(value, targetView, multiselect, valueToItemMap, onChipClick)}</ChipWrapper>

                    <StyledArrow size="s" color="inherit" className={cx(classes.selectTargetArrow, withArrowInverse)} />
                </Wrapper>
            </StyledButton>
        </TextfieldWrapper>
    );
};
