import React, { forwardRef, useMemo } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
// import type { InputHTMLAttributes } from '@salutejs/plasma-core';

import { applyNoUserSelect, applyEllipsis } from '../../mixins';
import type { Filter, RootProps } from '../../engines/types';
import { cx } from '../../utils';

import { base as viewCSS } from './_view/base';
import { base as sizeCSS } from './_size/base';
import { base as disabledCSS } from './_disabled/base';
import { base as focusedCSS } from './_focused/base';
import { Done, Indeterminate } from './IconsSvg';

export const StyledInput = styled.input`
    position: absolute;

    &:focus {
        outline: 0 none;
    }

    /* Спрятать от IE */
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
`;

export const StyledTrigger = styled.div`
    margin: var(--plasma-checkbox-trigger-margin);

    width: var(--plasma-checkbox-trigger-size);
    height: var(--plasma-checkbox-trigger-size);
    border-radius: var(--plasma-checkbox-trigger-border-radius);

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 0.125rem solid var(--plasma-checkbox-trigger-border-color);
    box-sizing: border-box;

    flex-shrink: 0;
    flex-grow: 0;

    input:not(:indeterminate) + label & div {
        transform: scale(0);
        transition: transform 0.15s ease-in-out;
    }

    input:checked + label & div {
        transform: scale(1);
    }
`;

export const StyledContentWrapper = styled.label`
    position: relative;
    align-items: flex-start;
    display: flex;
    width: 100%;
    cursor: inherit;
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: var(--plasma-checkbox-content-top-offset);
    margin-left: var(--plasma-checkbox-content-left-offset);
`;

export const StyledLabel = styled.span`
    font-family: var(--plasma-checkbox-label-font-family);
    font-size: var(--plasma-checkbox-label-font-size);
    font-style: var(--plasma-checkbox-label-font-style);
    font-weight: var(--plasma-checkbox-label-font-weight);
    letter-spacing: var(--plasma-checkbox-label-letter-spacing);
    line-height: var(--plasma-checkbox-label-line-height);
`;

export const StyledDescription = styled.div`
    margin-top: 0.25rem;
    color: var(--plasma-checkbox-description-color);

    font-family: var(--plasma-checkbox-description-font-family);
    font-size: var(--plasma-checkbox-description-font-size);
    font-style: var(--plasma-checkbox-description-font-style);
    font-weight: var(--plasma-checkbox-description-font-weight);
    letter-spacing: var(--plasma-checkbox-description-letter-spacing);
    line-height: var(--plasma-checkbox-description-line-height);
`;

const base = css`
    .single-line {
        ${applyEllipsis()};
    }

    margin: var(--plasma-checkbox-margin);

    &.reset-margins {
        margin: 0;
    }

    ${applyNoUserSelect()};

    position: relative;
    align-items: flex-start;
    display: flex;
    cursor: pointer;
`;

export interface BaseboxProps {
    /**
     * Уникальный идентификатор контрола
     */
    id?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: React.ReactNode;
    /**
     * Описание элемента
     */
    description?: React.ReactNode;
    /**
     * Title и description в одну строку или с переносом строк
     */
    singleLine?: boolean;
    /**
     * Неопределенное состояние компонента - когда часть потомков не выбрана.
     */
    indeterminate?: boolean;
    size?: string;
    view?: string;
    focused?: boolean;
}

type CheckboxProps = Filter<any> & BaseboxProps;

export const checkboxRoot = (Root: RootProps<HTMLInputElement, CheckboxProps>) =>
    forwardRef<HTMLInputElement, CheckboxProps>((props) => {
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

        // const inputRef = useRef<HTMLInputElement | null>(null);
        // const forkRef = useForkRef(inputRef, ref);

        // useEffect(() => {
        //     if (inputRef.current) {
        //         inputRef.current.indeterminate = Boolean(indeterminate);
        //     }
        // }, [inputRef, indeterminate]);

        // const uniqId = safeUseId();
        // const uniqLabelId = `label-${uniqId}`;
        // const uniqDescriptionId = `description-${uniqId}`;
        // const checkboxId = id || `input-${uniqId}`;

        const ariaLabel = useMemo(() => ariaLabelExternal, [ariaLabelExternal, label]);
        const isLabelAriaHidden = typeof label === 'string';
        const canFocused = focused ? 0 : -1;
        const hasContent = label || description;
        const singleLineClass = singleLine ? 'single-line' : undefined;
        const resetMargins = !hasContent ? 'reset-margins' : undefined;

        return (
            <Root
                view={view}
                size={size}
                disabled={disabled}
                focused={focused}
                style={style}
                className={cx(className, resetMargins)}
                tabIndex={-1}
            >
                <StyledInput
                    {...rest}
                    // id={checkboxId}
                    // ref={forkRef}
                    type="checkbox"
                    disabled={disabled}
                    aria-label={ariaLabel}
                    // aria-describedby={uniqDescriptionId}
                    tabIndex={canFocused}
                />
                <StyledContentWrapper>
                    <StyledTrigger className={cx('checkbox-trigger', resetMargins)}>
                        {indeterminate ? <Indeterminate /> : <Done />}
                    </StyledTrigger>
                    {hasContent && (
                        <StyledContent className={singleLineClass}>
                            {label && (
                                <StyledLabel
                                    className={singleLineClass}
                                    // id={uniqLabelId}
                                    aria-hidden={isLabelAriaHidden}
                                >
                                    {label}
                                </StyledLabel>
                            )}
                            {description && (
                                <StyledDescription className={singleLineClass}>{description}</StyledDescription>
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
