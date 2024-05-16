import React, { forwardRef, useEffect, useMemo, useRef } from 'react';
import { safeUseId, useForkRef, extractTextFrom } from '@salutejs/plasma-core';

import type { RootProps } from '../../engines/types';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as focusedCSS } from './variations/_focused/base';
import { Done, Indeterminate } from './IconsSvg';
import {
    StyledContent,
    StyledContentWrapper,
    StyledDescription,
    StyledInput,
    StyledLabel,
    StyledTrigger,
    base,
} from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';
import { classes } from './Checkbox.tokens';

export const checkboxRoot = (Root: RootProps<HTMLInputElement, CheckboxProps>) =>
    forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
        const {
            size,
            view,
            focused,
            disabled,
            id,
            label,
            description,
            indeterminate,
            style,
            className,
            singleLine = false,
            'aria-label': ariaLabelExternal,
            ...rest
        } = props;

        const inputRef = useRef<HTMLInputElement | null>(null);
        const forkRef = useForkRef(inputRef, ref);

        useEffect(() => {
            if (inputRef.current) {
                inputRef.current.indeterminate = Boolean(indeterminate);
            }
        }, [inputRef, indeterminate]);

        const uniqId = safeUseId();
        const uniqLabelId = `label-${uniqId}`;
        const uniqDescriptionId = `description-${uniqId}`;
        const checkboxId = id || `input-${uniqId}`;

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
                    id={checkboxId}
                    ref={forkRef}
                    type="checkbox"
                    disabled={disabled}
                    aria-label={ariaLabel}
                    aria-describedby={uniqDescriptionId}
                    tabIndex={canFocused}
                />
                <StyledContentWrapper htmlFor={checkboxId}>
                    <StyledTrigger className={classes.checkboxTrigger}>
                        {indeterminate ? <Indeterminate /> : <Done />}
                    </StyledTrigger>
                    {hasContent && (
                        <StyledContent className={singleLineClass}>
                            {label && (
                                <StyledLabel
                                    className={singleLineClass}
                                    id={uniqLabelId}
                                    aria-hidden={isLabelAriaHidden}
                                >
                                    {label}
                                </StyledLabel>
                            )}
                            {description && (
                                <StyledDescription
                                    className={cx(singleLineClass, onlyDescriptionClass)}
                                    id={uniqDescriptionId}
                                >
                                    {description}
                                </StyledDescription>
                            )}
                        </StyledContent>
                    )}
                </StyledContentWrapper>
            </Root>
        );
    });

export const checkboxConfig = {
    name: 'Checkbox',
    tag: 'div',
    layout: checkboxRoot,
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
