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
    ContentLeftWrapper,
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
    if (isEmpty(value)) {
        if (!label || labelPlacement === 'outer') {
            return <Placeholder>{placeholder}</Placeholder>;
        }

        return <Label>{label}</Label>;
    }

    if (multiselect && isTargetAmount) {
        return <Chip text={`Выбрано: ${value.length}`} />;
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
    contentLeft,
}) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    const iconSize = size === 'xs' ? 'xs' : 's';

    return (
        <TextfieldWrapper opened={opened} value={value}>
            <StyledButton
                stretching="filled"
                className={cx(
                    classes.textfieldTarget,
                    opened || focusedChipIndex !== null ? classes.selectWithoutBoxShadow : undefined,
                )}
                onKeyDown={onKeyDown}
            >
                <Wrapper>
                    {contentLeft && (!multiselect || isEmpty(value)) && (
                        <ContentLeftWrapper>{contentLeft}</ContentLeftWrapper>
                    )}

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
                            size={iconSize}
                            color="inherit"
                            className={cx(classes.selectTargetArrow, withArrowInverse)}
                        />
                    </IconArrowWrapper>
                </Wrapper>
            </StyledButton>
        </TextfieldWrapper>
    );
};
