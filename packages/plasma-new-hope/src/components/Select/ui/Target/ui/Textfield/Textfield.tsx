import React from 'react';

import { cx, isEmpty } from '../../../../../../utils';
import { classes } from '../../../../Select.tokens';
import { sizeToIconSize } from '../../../../utils';

import { TextfieldProps, GetTextfieldLabelProps } from './Textfield.types';
import { Chip } from './ui';
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
    valueToItemMap,
    onChipClick,
    label,
    placeholder,
    focusedChipIndex,
    labelPlacement,
    size,
    renderValue,
}: GetTextfieldLabelProps) => {
    if (isEmpty(value)) {
        if (!label || labelPlacement === 'outer') {
            return <Placeholder>{placeholder}</Placeholder>;
        }

        return <Label>{label}</Label>;
    }

    if (Array.isArray(value) && isTargetAmount) {
        return <Chip text={`Выбрано: ${value.length}`} isTargetAmount={isTargetAmount} />;
    }

    if (Array.isArray(value)) {
        return value.map((currentValue, index) => {
            const itemLabel = valueToItemMap.get(currentValue)!.label;

            return (
                <Chip
                    text={renderValue ? renderValue(currentValue, itemLabel) : itemLabel}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                        e.stopPropagation();
                        onChipClick(currentValue);
                    }}
                    focused={focusedChipIndex === index}
                />
            );
        });
    }

    const itemLabel = valueToItemMap.get(value)!.label;

    if (!label || labelPlacement === 'outer') {
        return <Value>{renderValue ? renderValue(value, itemLabel) : itemLabel}</Value>;
    }

    return (
        <InnerLabelWrapper>
            {size !== 'xs' && <InnerLabel>{label}</InnerLabel>}
            <Value>{renderValue ? renderValue(value, itemLabel) : itemLabel}</Value>
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
    renderValue,
    focusedPath,
    focusedToValueMap,
}) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    const getActiveDescendant = () => {
        const focusedPathAsString = focusedPath.reduce((acc, n) => `${acc}/${n}`, '').replace(/^(\/)/, '');
        return focusedToValueMap?.get(focusedPathAsString)?.value.toString();
    };

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
                role="combobox"
                aria-controls="tree_level_1"
                aria-expanded={opened}
                aria-activedescendant={getActiveDescendant()}
                aria-label={label}
            >
                <Wrapper>
                    {contentLeft && (!multiselect || isEmpty(value)) && (
                        <ContentLeftWrapper>{contentLeft}</ContentLeftWrapper>
                    )}

                    <ChipWrapper>
                        {getLabel({
                            value,
                            isTargetAmount,
                            valueToItemMap,
                            onChipClick,
                            label,
                            placeholder,
                            focusedChipIndex,
                            labelPlacement,
                            size,
                            renderValue,
                        })}
                    </ChipWrapper>

                    <IconArrowWrapper>
                        <StyledArrow
                            size={sizeToIconSize(size)}
                            color="inherit"
                            className={cx(classes.selectTargetArrow, withArrowInverse)}
                        />
                    </IconArrowWrapper>
                </Wrapper>
            </StyledButton>
        </TextfieldWrapper>
    );
};
