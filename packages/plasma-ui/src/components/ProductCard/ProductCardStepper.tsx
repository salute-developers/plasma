import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { black, warning } from '@salutejs/plasma-core';
import { IconMinus, IconPlus } from '@salutejs/plasma-icons';
import type { DisabledProps } from '@salutejs/plasma-core';

import { Button } from '../Button';
import { StepperRoot, StepperValue, useStepper } from '../Stepper';
import type { UseStepperProps } from '../Stepper';

export interface ProductCardStepperProps
    extends UseStepperProps,
        DisabledProps,
        Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    readonly?: boolean;
}

const StyledStepperRoot = styled(StepperRoot)`
    width: 100%;
`;
const StyledStepperValue = styled(StepperValue)<{ $isHidden?: boolean }>`
    ${({ showWarning }) =>
        !showWarning &&
        css`
            color: ${black};
        `}

    ${({ $isHidden }) =>
        $isHidden &&
        css`
            display: none;
        `}
`;

const StyledInfoButton = styled(Button).attrs(() => ({ size: 's', square: true }))<{ showWarning?: boolean }>`
    color: ${black};
    background-color: rgba(8, 8, 8, 0.12); /* TODO: Перенести в tokens */
    margin-left: auto;
    pointer-events: none;

    ${({ showWarning }) =>
        showWarning &&
        css`
            background-color: rgba(10, 10, 10, 0.05); /* TODO: Перенести в tokens */
            color: ${warning};
        `}
`;

const StyledStepperButton = React.memo(styled(Button).attrs(() => ({ size: 's', square: true }))<{
    $isHidden?: boolean;
}>`
    color: ${black};
    background-color: rgba(8, 8, 8, 0.12); /* TODO: Перенести в tokens */
    align-self: flex-end;
    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'opacity 0.15s ease-in-out')};

    ${({ $isHidden }) =>
        $isHidden &&
        css`
            pointer-events: none;
            opacity: 0;
            visibility: hidden;
        `}
`);

const iconMinus = <IconMinus color="inherit" size="s" />;
const iconPlus = <IconPlus color="inherit" size="s" />;

/**
 * Степпер карточки продукта.
 */
export const ProductCardStepper = ({
    value,
    step,
    min,
    max,
    disabled,
    readonly,
    onChange,
    ...rest
}: ProductCardStepperProps) => {
    const { onLessClick, onMoreClick, isMax, isMoreDisabled } = useStepper({
        value,
        step,
        min,
        max,
        onChange,
    });
    const isValuePositive = value > 0;

    return (
        <StyledStepperRoot {...rest}>
            {readonly ? (
                <StyledInfoButton tabIndex={-1} showWarning={isMax}>{`×${value}`}</StyledInfoButton>
            ) : (
                <>
                    <StyledStepperButton disabled={disabled} $isHidden={!isValuePositive} onClick={onLessClick}>
                        {iconMinus}
                    </StyledStepperButton>
                    <StyledStepperValue $isHidden={!isValuePositive} value={value} showWarning={isMax} />
                    <StyledStepperButton disabled={disabled || isMoreDisabled} onClick={onMoreClick}>
                        {iconPlus}
                    </StyledStepperButton>
                </>
            )}
        </StyledStepperRoot>
    );
};
