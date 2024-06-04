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
    Value,
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
        return <Chip text={`Выбрано: ${value.length}`} isTargetAmount={isTargetAmount} />;
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
        return <Value>{valueToItemMap.get(value).label}</Value>;
    }

    return (
        <InnerLabelWrapper>
            {size !== 'xs' && <InnerLabel>{label}</InnerLabel>}
            <Value>{valueToItemMap.get(value).label}</Value>
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
    disabled,
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
                disabled={disabled}
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
