import React, { forwardRef, useMemo } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { safeUseId, extractTextFrom } from '@salutejs/plasma-core';
import type { InputHTMLAttributes } from '@salutejs/plasma-core';

import { applyNoUserSelect, applyEllipsis } from '../../mixins';
import type { Filter, RootProps } from '../../engines/types';
import {
    StyledContentWrapper,
    StyledDescription,
    StyledInput,
    StyledLabel,
    StyledContent,
    StyledTrigger,
    BaseboxProps,
} from '../Checkbox/Checkbox';

import { base as viewCSS } from './_view/base';
import { base as sizeCSS } from './_size/base';
import { base as disabledCSS } from './_disabled/base';
import { base as focusedCSS } from './_focused/base';

// NOTE: Необходимое переопределение токенов из компонента Checkbox т.к. используются его части
const mappingOverride = `
    --plasma-checkbox-label-font-family: var(--plasma-radiobox-label-font-family);
    --plasma-checkbox-label-font-size: var(--plasma-radiobox-label-font-size);
    --plasma-checkbox-label-font-style: var(--plasma-radiobox-label-font-style);
    --plasma-checkbox-label-font-weight: var(--plasma-radiobox-label-font-weight);
    --plasma-checkbox-label-letter-spacing: var(--plasma-radiobox-label-letter-spacing);
    --plasma-checkbox-label-line-height: var(--plasma-radiobox-label-line-height);
    --plasma-checkbox-description-font-family: var(--plasma-radiobox-description-font-family);
    --plasma-checkbox-description-font-size: var(--plasma-radiobox-description-font-size);
    --plasma-checkbox-description-font-style: var(--plasma-radiobox-description-font-style);
    --plasma-checkbox-description-font-weight: var(--plasma-radiobox-description-font-weight);
    --plasma-checkbox-description-letter-spacing: var(--plasma-radiobox-description-letter-spacing);
    --plasma-checkbox-description-line-height: var(--plasma-radiobox-description-line-height);
    --plasma-checkbox-fill-color: var(--plasma-radiobox-fill-color);
    --plasma-checkbox-icon-color: var(--plasma-radiobox-ellipse-color);
    --plasma-checkbox-description-color: var(--plasma-radiobox-description-color);
    --plasma-checkbox-trigger-border-color: var(--plasma-radiobox-trigger-border-color);
    --plasma-checkbox-content-top-offset: var(--plasma-radiobox-content-top-offset);
    --plasma-checkbox-content-left-offset: var(--plasma-radiobox-content-left-offset);
    --plasma-checkbox-trigger-size: var(--plasma-radiobox-trigger-size);
    --plasma-checkbox-trigger-border-radius: var(--plasma-radiobox-trigger-border-radius);
`;

const StyledEllipse = styled.div`
    width: var(--plasma-radiobox-ellipse-size);
    height: var(--plasma-radiobox-ellipse-size);
    border-radius: var(--plasma-radiobox-ellipse-size);

    background-color: var(--plasma-checkbox-icon-color);
    transition: transform 0.3s ease-in-out;
    transform: scale(0);

    input:checked + label & {
        transform: scale(1);
    }
`;

const base = css`
    ${mappingOverride};

    .single-line {
        ${applyEllipsis()};
    }

    ${applyNoUserSelect()};

    position: relative;
    align-items: flex-start;
    display: flex;
    cursor: pointer;

    margin-left: 0.188rem; /* ToDo: Выпилить, v2.0 Привести к единому стилю с UI */
    margin-bottom: 0.188rem; /* ToDo: Выпилить, v2.0 Привести к единому стилю с UI */
`;

type RadioboxProps = Filter<InputHTMLAttributes<HTMLInputElement>, 'size'> & Omit<BaseboxProps, 'indeterminate'>;

export const radioboxRoot = (Root: RootProps<HTMLInputElement, RadioboxProps>) =>
    forwardRef<HTMLInputElement, RadioboxProps>((props, ref) => {
        const {
            size,
            view,
            focused,
            disabled,
            id,
            label,
            description,
            style,
            className,
            singleLine = false,
            'aria-label': ariaLabelExternal,
            ...rest
        } = props;

        const uniqId = safeUseId();
        const uniqLabelId = `label-${uniqId}`;
        const uniqDescriptionId = `description-${uniqId}`;
        const radioboxId = id || `input-${uniqId}`;

        const ariaLabel = useMemo(() => ariaLabelExternal || extractTextFrom(label), [ariaLabelExternal, label]);
        const isLabelAriaHidden = typeof label === 'string';
        const canFocused = focused ? 0 : -1;
        const singleLineClass = singleLine ? 'single-line' : undefined;

        return (
            <Root
                view={view}
                size={size}
                disabled={disabled}
                focused={focused}
                style={style}
                className={className}
                tabIndex={-1}
            >
                <StyledInput
                    {...rest}
                    id={radioboxId}
                    ref={ref}
                    type="radio"
                    disabled={disabled}
                    aria-label={ariaLabel}
                    aria-describedby={uniqDescriptionId}
                    tabIndex={canFocused}
                />
                <StyledContentWrapper htmlFor={radioboxId}>
                    <StyledTrigger className="radiobox-trigger">
                        <StyledEllipse />
                    </StyledTrigger>
                    <StyledContent className={singleLineClass}>
                        {label && (
                            <StyledLabel className={singleLineClass} id={uniqLabelId} aria-hidden={isLabelAriaHidden}>
                                {label}
                            </StyledLabel>
                        )}
                        {description && (
                            <StyledDescription className={singleLineClass} id={uniqDescriptionId}>
                                {description}
                            </StyledDescription>
                        )}
                    </StyledContent>
                </StyledContentWrapper>
            </Root>
        );
    });

export const radioboxConfig = {
    name: 'Radiobox',
    tag: 'div',
    layout: radioboxRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
        disabled: {
            css: disabledCSS,
        },
        focused: {
            css: focusedCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'accent',
    },
};
