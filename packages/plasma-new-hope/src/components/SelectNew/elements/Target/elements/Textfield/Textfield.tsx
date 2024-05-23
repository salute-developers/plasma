import React from 'react';

import { cx } from '../../../../../../utils';
import { classes } from '../../../../SelectNew.tokens';

import { TextfieldProps, GetLabelProps } from './Textfield.types';
import { Chip } from './elements/Chip/Chip';
import { StyledButton, StyledArrow, Wrapper, ChipWrapper, TextfieldWrapper } from './Textfield.styles';

const getLabel = ({ value, isTargetAmount, multiselect, valueToItemMap, onChipClick }: GetLabelProps) => {
    if (multiselect && Array.isArray(value)) {
        if (!value.length) {
            return (
                <Chip text="Ничего не выбрано" onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()} />
            );
        }

        if (isTargetAmount) {
            return (
                <Chip
                    text={`Выбрано: ${value.length}`}
                    onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
                />
            );
        }

        return value.map((currentValue) => (
            <Chip
                text={valueToItemMap.get(currentValue)?.secondaryLabel || valueToItemMap.get(currentValue)?.label}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.stopPropagation();
                    onChipClick(currentValue);
                }}
            />
        ));
    }

    if (!value) {
        return 'Ничего не выбрано';
    }

    if (isTargetAmount) {
        return 'Выбрано: 1';
    }

    return valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label;
};

export const Textfield: React.FC<TextfieldProps> = ({
    opened,
    value,
    isTargetAmount,
    multiselect,
    valueToItemMap,
    onChipClick,
    label,
}) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    return (
        <TextfieldWrapper opened={opened}>
            <StyledButton stretching="filled" className={classes.textfieldTarget}>
                <Wrapper>
                    <ChipWrapper>
                        {!multiselect && label}

                        {getLabel({
                            value,
                            isTargetAmount,
                            multiselect,
                            valueToItemMap,
                            onChipClick,
                        })}
                    </ChipWrapper>

                    <StyledArrow size="s" color="inherit" className={cx(classes.selectTargetArrow, withArrowInverse)} />
                </Wrapper>
            </StyledButton>
        </TextfieldWrapper>
    );
};
