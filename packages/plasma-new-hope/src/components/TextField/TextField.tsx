import React, { forwardRef } from 'react';
import type { ChangeEventHandler, KeyboardEventHandler, LabelHTMLAttributes } from 'react';
import { css } from '@linaria/core';
import { safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../engines';

import type { TextFieldProps } from './TextField.types';
import { base as size } from './_size/base';
import { base as view } from './_view/base';
import { base as disabled } from './_disabled/base';
import { base as labelPlacement } from './_label-placement/base';
import { Input, LeftHelper, Label, InputWrapper, InputLabelWrapper } from './TextField.styles';

const base = css`
    /* NOTE: Webkit не применяет opacity к inline тегам */
    display: block;
`;

export const textFieldRoot = (
    Root: RootProps<HTMLInputElement, TextFieldProps & LabelHTMLAttributes<HTMLLabelElement>>,
) =>
    forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
        const {
            // layout
            contentLeft,
            contentRight,
            children,
            label,
            labelPlacement,
            placeholder,
            leftHelper,

            // variations
            view,
            size,
            disabled,

            // events
            onChange,
            onSearch,

            ...rest
        } = props;

        const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
            const { maxLength, value } = event.target;

            if (!onChange || (maxLength !== -1 && value.length > maxLength)) {
                return;
            }

            onChange(event);
        };

        const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
            if (event.key === 'Enter' && onSearch) {
                onSearch((event.target as HTMLInputElement).value, event);
            }
        };

        const labelInside = labelPlacement === 'inner';
        const lableId = safeUseId();
        const helperTextId = safeUseId();

        return (
            <Root view={view} size={size} disabled={disabled} labelPlacement={labelPlacement}>
                {labelInside || (label && <Label id={lableId}>{label}</Label>)}
                <InputWrapper>
                    {contentLeft}
                    <InputLabelWrapper>
                        <Input
                            {...rest}
                            ref={ref}
                            aria-labelledby={lableId}
                            aria-describedby={helperTextId}
                            placeholder={placeholder}
                            disabled={disabled}
                            onChange={handleChange}
                            onKeyUp={handleKeyUp}
                        />
                        {labelInside && <Label id={lableId}>{label}</Label>}
                    </InputLabelWrapper>
                    {contentRight}
                </InputWrapper>
                {leftHelper && <LeftHelper id={helperTextId}>{leftHelper}</LeftHelper>}
            </Root>
        );
    });

export const textFieldConfig = {
    name: 'TextField',
    tag: 'label',
    layout: textFieldRoot,
    base,
    variations: {
        view: {
            css: view,
        },
        size: {
            css: size,
        },
        disabled: {
            css: disabled,
            attrs: true,
        },
        labelPlacement: {
            css: labelPlacement,
        },
    },
    defaults: {
        size: 'm',
    },
};
