import React, { forwardRef } from 'react';
import { cx } from 'src/utils';

import { classes } from '../../../../Select.tokens';
import { getButtonLabel, getItemId, sizeToIconSize } from '../../../../utils';

import { ButtonProps } from './Button.types';
import { StyledButton, StyledArrow, Label, ButtonWrapper, IconArrowWrapper } from './Button.styles';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            opened,
            value,
            valueToItemMap,
            onKeyDown,
            label,
            size,
            disabled,
            renderValue,
            selectProps,
            treeId,
            activeDescendantItemValue,
        },
        ref,
    ) => {
        const withArrowInverse = opened ? classes.arrowInverse : undefined;

        return (
            <ButtonWrapper>
                <StyledButton
                    ref={ref}
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
                    aria-autocomplete="list"
                    aria-controls={`${treeId}_tree_level_1`}
                    aria-expanded={opened}
                    aria-activedescendant={
                        activeDescendantItemValue ? getItemId(treeId, activeDescendantItemValue) : ''
                    }
                    aria-label={label}
                >
                    <Label>
                        {getButtonLabel({
                            value,
                            valueToItemMap,
                            label,
                            renderValue,
                            selectProps,
                        })}
                    </Label>
                </StyledButton>
            </ButtonWrapper>
        );
    },
);
