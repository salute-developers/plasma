import React from 'react';

import { cx } from '../../../../../../utils';
import { classes } from '../../../../Select.tokens';
import { getButtonLabel, sizeToIconSize } from '../../../../utils';

import { ButtonProps } from './Button.types';
import { StyledButton, StyledArrow, Label, ButtonWrapper, IconArrowWrapper } from './Button.styles';

export const Button: React.FC<ButtonProps> = ({
    opened,
    value,
    isTargetAmount,
    multiselect,
    valueToItemMap,
    onKeyDown,
    label,
    size,
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
        <ButtonWrapper>
            <StyledButton
                stretching="filled"
                onKeyDown={onKeyDown}
                className={opened ? classes.selectWithoutBoxShadow : undefined}
                disabled={disabled}
                contentRight={
                    <IconArrowWrapper>
                        <StyledArrow
                            size={sizeToIconSize(size)}
                            color="inherit"
                            className={cx(classes.selectTargetArrow, withArrowInverse)}
                        />
                    </IconArrowWrapper>
                }
                role="combobox"
                aria-controls="tree_level_1"
                aria-expanded={opened}
                aria-activedescendant={getActiveDescendant()}
                aria-label={label}
            >
                <Label>
                    {getButtonLabel({
                        value,
                        isTargetAmount,
                        multiselect,
                        valueToItemMap,
                        label,
                        renderValue,
                    })}
                </Label>
            </StyledButton>
        </ButtonWrapper>
    );
};
