import React, { forwardRef, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseboxContentWrapper, useUniqId, white } from '@salutejs/plasma-core';
import type { BaseboxProps } from '@salutejs/plasma-core';

import { extractTextFrom } from '../../utils';
import {
    StyledRoot as CheckboxRoot,
    StyledInput as CheckboxInput,
    StyledTrigger as CheckboxTrigger,
    StyledContent,
    StyledLabel as CheckboxLabel,
    StyledDescription as CheckboxDescription,
} from '../Checkbox/Checkbox';

import { sizes } from './Radiobox.props';

interface SizeProps {
    /**
     * Размер контрола.
     */
    size: keyof typeof sizes;
}

export interface RadioboxProps extends Omit<BaseboxProps, 'size'>, Partial<SizeProps> {}

const StyledTrigger = styled(CheckboxTrigger)`
    ${({ size }) => css`
        width: ${sizes[size].width};
        height: ${sizes[size].height};
        border-radius: ${sizes[size].outLineRadius};
    `}

    flex-shrink: 0;
`;

const StyledEllipse = styled.div<SizeProps>`
    ${({ size }) => css`
        width: ${sizes[size].ellipseSize};
        height: ${sizes[size].ellipseSize};
        border-radius: ${sizes[size].ellipseSize};
    `}

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    margin: auto;

    background-color: ${white};
    transition: transform 0.3s ease-in-out;
    transform: scale(0);

    /* stylelint-disable-next-line selector-nested-pattern, selector-type-no-unknown */
    input:checked + label ${StyledTrigger} & {
        transform: scale(1);
    }
`;

const CheckboxContent = styled(StyledContent)`
    ${({ size }) => css`
        margin-top: ${sizes[size].contentTopOffset};
        margin-left: ${sizes[size].contentLeftOffset};
    `}
`;

/**
 * Переключатель, или *радиокнопка*.
 */
// eslint-disable-next-line prefer-arrow-callback
export const Radiobox = forwardRef<HTMLInputElement, RadioboxProps>(function Radiobox(
    { size = 'm', id, label, description, disabled, style, className, 'aria-label': ariaLabelExternal, ...rest },
    ref,
) {
    const uniqId = useUniqId();
    const uniqLabelId = useUniqId();
    const uniqDescriptionId = useUniqId();
    const radioboxId = id || uniqId;
    const ariaLabel = useMemo(() => ariaLabelExternal || extractTextFrom(label), [ariaLabelExternal, label]);

    return (
        <CheckboxRoot $disabled={disabled} style={style} className={className} tabIndex={-1}>
            <CheckboxInput
                {...rest}
                id={radioboxId}
                ref={ref}
                type="radio"
                disabled={disabled}
                aria-label={ariaLabel}
                aria-describedby={uniqDescriptionId}
            />
            <BaseboxContentWrapper htmlFor={radioboxId}>
                <StyledTrigger size={size} outlineRadius={sizes[size].outLineRadius}>
                    <StyledEllipse size={size} />
                </StyledTrigger>
                <CheckboxContent size={size}>
                    {label && (
                        <CheckboxLabel as="span" size={size} id={uniqLabelId} aria-hidden={typeof label === 'string'}>
                            {label}
                        </CheckboxLabel>
                    )}
                    {description && (
                        <CheckboxDescription size={size} mt={4} id={uniqDescriptionId}>
                            {description}
                        </CheckboxDescription>
                    )}
                </CheckboxContent>
            </BaseboxContentWrapper>
        </CheckboxRoot>
    );
});
