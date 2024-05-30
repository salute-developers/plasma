import React, { forwardRef, useMemo } from 'react';
import { safeUseId, extractTextFrom } from '@salutejs/plasma-core';

import type { InputHTMLAttributes } from '../../types';
import type { Filter, RootProps } from '../../engines/types';
import {
    StyledContentWrapper,
    StyledDescription,
    StyledInput,
    StyledLabel,
    StyledContent,
    StyledTrigger,
} from '../Checkbox/Checkbox.styles';
import { BaseboxProps } from '../Checkbox/Checkbox.types';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as focusedCSS } from './variations/_focused/base';
import { StyledEllipse, base } from './Radiobox.styles';
import { classes } from './Radiobox.tokens';

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
        const hasContent = label || description;
        const singleLineClass = singleLine ? classes.singleLine : undefined;
        const onlyDescriptionClass = !label && description ? classes.onlyDescription : undefined;

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
                    <StyledTrigger className={classes.radioboxTrigger}>
                        <StyledEllipse />
                    </StyledTrigger>
                    {hasContent && (
                        <StyledContent className={singleLineClass}>
                            {label && (
                                <StyledLabel
                                    className={cx(singleLineClass, onlyDescriptionClass)}
                                    id={uniqLabelId}
                                    aria-hidden={isLabelAriaHidden}
                                >
                                    {label}
                                </StyledLabel>
                            )}
                            {description && (
                                <StyledDescription className={singleLineClass} id={uniqDescriptionId}>
                                    {description}
                                </StyledDescription>
                            )}
                        </StyledContent>
                    )}
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
