import React, { forwardRef, useRef, useMemo } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    BaseboxRoot,
    BaseboxInput,
    BaseboxTrigger,
    BaseboxContent,
    BaseboxContentWrapper,
    BaseboxLabel,
    BaseboxDescription,
    accent,
    secondary,
    transparent,
    useForkRef,
    useUniqId,
    addFocus,
} from '@salutejs/plasma-core';
import type { BaseboxProps } from '@salutejs/plasma-core';
import { caption, footnote1 } from '@salutejs/plasma-tokens-b2b';

import { extractTextFrom } from '../../utils';

import { Done, Indeterminate } from './Icons';
import { sizes } from './Checkbox.props';

interface SizeProps {
    /**
     * Размер контрола.
     */
    size: keyof typeof sizes;
}

export interface CheckboxProps extends Omit<BaseboxProps, 'size'>, Partial<SizeProps> {
    /**
     * Неопределенное состояние компонента - когда часть потомков не выбрана.
     */
    indeterminate?: boolean;
}

const getCustomFocusRuleset = (
    ruleset: FlattenSimpleInterpolation,
    outlineSize: string,
    outlineOffset: string,
    outlineRadius: string,
) => {
    const outlineColor = ruleset[3];

    const style = `&::before {
        top: -${outlineOffset};
        left: -${outlineOffset};
        right: -${outlineOffset};
        bottom: -${outlineOffset};
        border-radius: ${outlineRadius};
        box-shadow: 0 0 0 ${outlineSize} ${outlineColor};
    }`;

    return [ruleset, style];
};

export const syntheticFocus = (outlineRadius: string) => (
    ruleset: FlattenSimpleInterpolation,
    focused?: boolean,
) => css`
    input[data-focus-visible-added] + label & {
        border-color: transparent;
        ${getCustomFocusRuleset(ruleset, '0.125rem', '0.188rem', outlineRadius)}
    }

    input[data-focus-visible-added]:checked + label &,
    input[type='checkbox'][data-focus-visible-added]:indeterminate + label & {
        ${getCustomFocusRuleset(ruleset, '0.063rem', '0.25rem', `calc(${outlineRadius} + 0.125rem)`)}
    }

    ${focused && ruleset};
`;
export const StyledRoot = styled(BaseboxRoot)<{ $disabled?: boolean }>`
    /* stylelint-disable-next-line number-max-precision */
    margin-left: 0.1875rem; /* ToDo: Выпилить, v2.0 Привести к единому стилю с UI */
    /* stylelint-disable-next-line number-max-precision */
    margin-bottom: 0.1875rem; /* ToDo: Выпилить, v2.0 Привести к единому стилю с UI */

    ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}
`;
export const StyledInput = styled(BaseboxInput)`
    /* Спрятать от IE */
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
`;

export const StyledTrigger = styled(BaseboxTrigger)<{ outlineRadius?: string } & SizeProps>`
    /* stylelint-disable-next-line number-max-precision */
    margin: 0.1875rem 0; /* ToDo: Выпилить, v2.0 Привести к единому стилю с UI */

    ${({ size }) => css`
        width: ${sizes[size].width};
        height: ${sizes[size].height};
        border-radius: ${sizes[size].outLineRadius};
    `}

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${transparent};
    border: 0.125rem solid ${secondary};

    flex-shrink: 0;
    flex-grow: 0;

    /* stylelint-disable-next-line */
    input[type='checkbox']:indeterminate + label & {
        background: ${accent};
        border-color: ${accent};
    }

    /* stylelint-disable-next-line */
    input:disabled + label & {
        opacity: 0.4;
        cursor: inherit;
    }

    /* stylelint-disable-next-line */
    input:checked + label & {
        background: ${accent};
        border-color: ${accent};
    }

    /* stylelint-disable-next-line */
    input:checked:disabled + label & {
        opacity: 0.4;
        background: ${accent};
    }

    ${({ outlineRadius = '0.375rem' }) => css`
        ${addFocus({
            synthesizeFocus: syntheticFocus(outlineRadius),
            outlineRadius,
        })}
    `}
`;
export const StyledContent = styled(BaseboxContent)<SizeProps>`
    ${({ size }) => css`
        margin-top: ${sizes[size].contentTopOffset};
        margin-left: ${sizes[size].contentLeftOffset};
    `}

    /* stylelint-disable-next-line */
    input:disabled + label & {
        opacity: 0.4;
    }
`;
export const StyledLabel = styled(BaseboxLabel)<SizeProps>`
    ${({ size }) => size === 's' && footnote1};
`;
export const StyledDescription = styled(BaseboxDescription)<SizeProps>`
    ${({ size }) => size === 's' && caption};
`;
const StyledDone = styled(Done)<SizeProps>`
    transform: scale(0);
    transition: transform 0.15s ease-in-out;

    /* stylelint-disable-next-line */
    input:checked + label ${BaseboxTrigger} & {
        transform: scale(1);
    }
`;
const StyledIndeterminate = styled(Indeterminate)<SizeProps>`
    background: ${accent};

    ${({ size }) => css`
        border-radius: ${sizes[size].outLineRadius};
    `}
`;

/**
 * Флажок или *чекбокс*. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
// eslint-disable-next-line prefer-arrow-callback
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
    {
        size = 'm',
        id,
        label,
        description,
        indeterminate,
        disabled,
        style,
        className,
        'aria-label': ariaLabelExternal,
        ...rest
    },
    ref,
) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const forkRef = useForkRef(inputRef, ref);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = Boolean(indeterminate);
        }
    }, [inputRef, indeterminate]);

    const uniqId = useUniqId();
    const uniqLabelId = useUniqId();
    const uniqDescriptionId = useUniqId();
    const checkboxId = id || uniqId;
    const ariaLabel = useMemo(() => ariaLabelExternal || extractTextFrom(label), [ariaLabelExternal, label]);

    return (
        <StyledRoot $disabled={disabled} style={style} className={className} tabIndex={-1}>
            <StyledInput
                {...rest}
                id={checkboxId}
                ref={forkRef}
                type="checkbox"
                disabled={disabled}
                aria-label={ariaLabel}
                aria-describedby={uniqDescriptionId}
            />
            <BaseboxContentWrapper htmlFor={checkboxId}>
                <StyledTrigger size={size} outlineRadius={sizes[size].outLineRadius}>
                    {indeterminate ? <StyledIndeterminate size={size} /> : <StyledDone size={size} />}
                </StyledTrigger>
                <StyledContent size={size}>
                    {label && (
                        <StyledLabel as="span" size={size} id={uniqLabelId} aria-hidden={typeof label === 'string'}>
                            {label}
                        </StyledLabel>
                    )}
                    {description && (
                        <StyledDescription size={size} mt={4} id={uniqDescriptionId}>
                            {description}
                        </StyledDescription>
                    )}
                </StyledContent>
            </BaseboxContentWrapper>
        </StyledRoot>
    );
});
