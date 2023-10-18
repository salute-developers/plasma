import React, { forwardRef, useMemo } from 'react';
import { extractTextFrom, InputHTMLAttributes, safeUseId } from '@salutejs/plasma-core';
import { css } from '@linaria/core';

import { RootProps } from '../../engines';
import { base as sizeCSS } from '../Switch/_size/base';
import { base as viewCSS } from '../Switch/_view/base';
import { base as disabledCSS } from '../Switch/_disabled/base';
import { base as focusedCSS } from '../Switch/_focused/base';
import { Filter } from '../../engines/types';
import { BaseboxProps } from '../Checkbox';

import { StyledInput, StyledLabel, StyledContentWrapper, StyledTrigger } from './Switch.styles';
import { classes } from './Switch.tokens';

const { styledTriggerClass, styledInputClass, styledContentWrapperClass } = classes;

type SwitchProps = Filter<InputHTMLAttributes<HTMLInputElement>, 'size'> & BaseboxProps;

const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 100%;

    &:focus {
        outline: 0 none;
    }
`;

export const switchRoot = (Root: RootProps<HTMLInputElement, SwitchProps>) =>
    forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
        const {
            size,
            view,
            focused,
            disabled,
            id,
            label,
            style,
            className,
            singleLine,
            'aria-label': ariaLabelExternal,
            onChange,
            onFocus,
            onBlur,
            ...rest
        } = props;

        const uniqId = safeUseId();
        const switchId = id || `input-${uniqId}`;

        const ariaLabel = useMemo(() => ariaLabelExternal || extractTextFrom(label), [ariaLabelExternal, label]);

        const canFocused = focused ? 0 : -1;
        const singleLineClass = singleLine ? 'single-line' : '';

        return (
            <Root view={view} size={size} disabled={disabled} focused={focused} style={style} className={className}>
                <StyledInput
                    className={styledInputClass}
                    {...rest}
                    id={switchId}
                    ref={ref}
                    type="checkbox"
                    disabled={disabled}
                    aria-label={ariaLabel}
                    tabIndex={canFocused}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                <StyledContentWrapper className={styledContentWrapperClass} htmlFor={switchId} disabled={disabled}>
                    <StyledTrigger className={styledTriggerClass} />
                    {label && <StyledLabel className={singleLineClass}>{label}</StyledLabel>}
                </StyledContentWrapper>
            </Root>
        );
    });

export const switchConfig = {
    name: 'Switch',
    tag: 'div',
    base,
    layout: switchRoot,
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
        size: 's',
        view: 'default',
    },
};
