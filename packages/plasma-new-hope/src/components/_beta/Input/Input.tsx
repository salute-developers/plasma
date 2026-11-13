import React, { forwardRef, useRef } from 'react';
import cls from 'classnames';

import { safeUseId } from '../../../utils/react';
import { useForkRef } from '../../../hooks/useForkRef';

import type { InputProps } from './Input.types';
import { InputControl, InputField, InputHeader, InputHelpers, InputHint, InputIndicator, InputLabel } from './ui';
import { classes } from './Input.tokens';
import styles from './Input.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            rootProps,
            id,
            className,
            disabled,
            readOnly,
            titleCaption,
            caption,
            counter,
            contentBefore,
            contentAfter,
            textBefore,
            textAfter,
            chips,
            hidePlaceholderOnChips,
            indicator,
            label,
            hint,
            placeholder,
            'aria-describedby': ariaDescribedBy,
            'aria-required': ariaRequired,
            ...rest
        },
        ref,
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const mergedInputRef = useForkRef(inputRef, ref);

        const generatedId = safeUseId();
        const inputId = id ?? generatedId;
        const captionId = `${generatedId}-caption`;
        const counterId = `${generatedId}-counter`;
        const hasCaption = caption != null && caption !== false;
        const hasCounter = counter != null && counter !== false;
        const hasLabel = Boolean(label?.value);
        const hasInnerLabel = hasLabel && label?.placement === 'inner';
        const hasOuterLabel = hasLabel && !hasInnerLabel;
        const hasChips = Boolean(chips?.value?.length);
        const resolvedPlaceholder = hidePlaceholderOnChips && hasChips ? '' : placeholder;
        const hasHint = Boolean(hint?.value);
        const hasInnerHint = hasHint && !hasOuterLabel && hint?.targetPlacement === 'inner';
        const hasOuterHint = hasHint && !hasOuterLabel && !hasInnerHint;
        const describedBy = cls(ariaDescribedBy, hasCaption && captionId, hasCounter && counterId);
        // Индикатор добавляет только ARIA-состояние, не включая нативную валидацию.
        const requiredState = ariaRequired ?? (indicator?.value === 'required' || undefined);

        const labelNode = (
            <InputLabel label={label} htmlFor={inputId} hint={hint} indicator={indicator} disabled={disabled} />
        );
        const hintNode = <InputHint hint={hint} disabled={disabled} />;

        return (
            <div
                {...rootProps}
                className={cls(styles.root, classes.inputRoot, rootProps?.className)}
                data-disabled={disabled || undefined}
                data-readonly={readOnly || undefined}
                data-label-placement={hasLabel ? label?.placement ?? 'outer' : undefined}
                data-keep-placeholder={label?.keepPlaceholder || undefined}
                data-has-chips={hasChips || undefined}
                data-has-outer-hint={hasOuterHint || undefined}
                data-has-inner-hint={hasInnerHint || undefined}
            >
                <InputHeader label={hasOuterLabel && labelNode} titleCaption={titleCaption} />
                <InputField
                    inputRef={inputRef}
                    contentBefore={contentBefore}
                    contentAfter={contentAfter}
                    chips={chips}
                    disabled={disabled}
                    readOnly={readOnly}
                    label={hasInnerLabel && labelNode}
                    indicator={
                        (!hasLabel || (!hasOuterLabel && indicator?.value === 'required')) && (
                            <InputIndicator indicator={indicator} />
                        )
                    }
                    hint={hasInnerHint && hintNode}
                    outerHint={hasOuterHint && hintNode}
                >
                    <InputControl
                        {...rest}
                        ref={mergedInputRef}
                        id={inputId}
                        className={className}
                        disabled={disabled}
                        readOnly={readOnly}
                        textBefore={textBefore}
                        textAfter={textAfter}
                        placeholder={hasInnerLabel ? resolvedPlaceholder || ' ' : resolvedPlaceholder}
                        aria-describedby={describedBy || undefined}
                        aria-required={requiredState}
                    />
                </InputField>
                <InputHelpers caption={caption} counter={counter} captionId={captionId} counterId={counterId} />
            </div>
        );
    },
);
