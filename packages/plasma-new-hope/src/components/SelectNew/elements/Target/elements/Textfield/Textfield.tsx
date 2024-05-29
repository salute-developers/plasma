import React from 'react';

import { cx, isEmpty } from '../../../../../../utils';
import { classes } from '../../../../SelectNew.tokens';

import { TextfieldProps, GetLabelProps } from './Textfield.types';
import { Chip } from './elements/Chip/Chip';
import {
    StyledButton,
    StyledArrow,
    Wrapper,
    ChipWrapper,
    TextfieldWrapper,
    IconArrowWrapper,
    Label,
    Placeholder,
    InnerLabel,
    InnerLabelWrapper,
} from './Textfield.styles';

const getLabel = ({
    value,
    isTargetAmount,
    multiselect,
    valueToItemMap,
    onChipClick,
    label,
    placeholder,
    focusedChipIndex,
    labelPlacement,
    size,
}: GetLabelProps) => {
    // if (multiselect && Array.isArray(value)) {
    //     if (!value.length) {
    //         return placeholder;
    //     }
    //
    //     if (isTargetAmount) {
    //         return (
    //             <Chip
    //                 text={`Выбрано: ${value.length}`}
    //                 onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
    //             />
    //         );
    //     }
    //
    //     return value.map((currentValue, index) => (
    //         <Chip
    //             text={valueToItemMap.get(currentValue)?.secondaryLabel || valueToItemMap.get(currentValue)?.label}
    //             onClick={(e: React.MouseEvent<HTMLElement>) => {
    //                 e.stopPropagation();
    //                 onChipClick(currentValue);
    //             }}
    //             focused={focusedChipIndex === index}
    //         />
    //     ));
    // }
    //
    // if (!value) {
    //     return placeholder;
    // }
    //
    // return valueToItemMap.get(value)?.secondaryLabel || valueToItemMap.get(value)?.label;

    if (isEmpty(value)) {
        if (!label || labelPlacement === 'outer') {
            return <Placeholder>{placeholder}</Placeholder>;
        }

        return <Label>{label}</Label>;
    }

    if (multiselect) {
        return value.map((currentValue, index) => (
            <Chip
                text={valueToItemMap.get(currentValue)?.secondaryLabel || valueToItemMap.get(currentValue)?.label}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.stopPropagation();
                    onChipClick(currentValue);
                }}
                focused={focusedChipIndex === index}
            />
        ));
    }

    if (!label || labelPlacement === 'outer') {
        return valueToItemMap.get(value).label;
    }

    return (
        <InnerLabelWrapper>
            {size !== 'xs' && <InnerLabel>{label}</InnerLabel>}
            {valueToItemMap.get(value).label}
        </InnerLabelWrapper>
    );
};

export const Textfield: React.FC<TextfieldProps> = ({
    opened,
    value,
    isTargetAmount,
    multiselect,
    valueToItemMap,
    onChipClick,
    label,
    placeholder,
    onKeyDown,
    focusedChipIndex,
    labelPlacement,
    size,
}) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    return (
        <TextfieldWrapper opened={opened}>
            <StyledButton
                stretching="filled"
                className={cx(
                    classes.textfieldTarget,
                    opened || focusedChipIndex !== null ? classes.selectWithoutBoxShadow : undefined,
                )}
                onKeyDown={onKeyDown}
            >
                <Wrapper>
                    <ChipWrapper>
                        {getLabel({
                            value,
                            isTargetAmount,
                            multiselect,
                            valueToItemMap,
                            onChipClick,
                            label,
                            placeholder,
                            focusedChipIndex,
                            labelPlacement,
                            size,
                        })}
                    </ChipWrapper>

                    <IconArrowWrapper>
                        <StyledArrow
                            size="s"
                            color="inherit"
                            className={cx(classes.selectTargetArrow, withArrowInverse)}
                        />
                    </IconArrowWrapper>
                </Wrapper>
            </StyledButton>
        </TextfieldWrapper>
    );
};
