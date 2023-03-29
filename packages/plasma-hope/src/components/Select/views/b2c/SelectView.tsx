import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TextFieldRoot, TextFieldHelper } from '@salutejs/plasma-core';

import type { SelectViewProps } from '../../SelectView';
import type { SelectRefElement } from '../../SelectButton';
import { SelectButton as BaseButton } from '../../SelectButton';
import { SelectDropdown as BaseDropdown } from '../../SelectDropdown';
import { withAssistiveDropdown } from '../../../Dropdown';

import { SelectGroup } from './SelectGroup';

const SelectButton = styled(BaseButton).attrs({ design: 'b2c' })``;

const StyledRoot = styled(TextFieldRoot)`
    /* stylelint-disable-next-line declaration-block-semicolon-newline-after, rule-empty-line-before */
    ${SelectGroup} &:not(:last-child) {
        margin-right: 0.125rem;
    }

    /* stylelint-disable-next-line declaration-block-semicolon-newline-after, rule-empty-line-before */
    ${SelectGroup} &:not(:first-child) ${SelectButton} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    /* stylelint-disable-next-line declaration-block-semicolon-newline-after, rule-empty-line-before */
    ${SelectGroup} &:not(:last-child) ${SelectButton} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

const SelectDropdown = styled(BaseDropdown).attrs({ design: 'b2c' })``;

const DropdownButton = withAssistiveDropdown(SelectButton, SelectDropdown);

/**
 * Поле с выпадающим списком.
 */
export const SelectView = forwardRef<SelectRefElement, SelectViewProps>(
    (
        {
            id,
            placeholder,
            value,
            helperText,
            disabled,
            status,
            className,
            style,
            items,
            multiselect,
            onItemSelect,
            ...rest
        },
        ref,
    ) => {
        const hasItems = Array.isArray(items) && items.length > 0;

        return (
            <StyledRoot
                $size="m"
                $disabled={disabled}
                $isContentRight={hasItems}
                $isHelper={Boolean(helperText)}
                status={status}
                className={className}
                style={style}
            >
                <DropdownButton
                    {...rest}
                    ref={ref}
                    id={id ? `${id}-dropdown` : id}
                    role="combobox"
                    menuRole="listbox"
                    menuItemRole="option"
                    value={value}
                    placeholder={placeholder}
                    hasItems={hasItems}
                    status={status}
                    items={items}
                    disabled={disabled}
                    closeOnSelect={!multiselect}
                    onItemSelect={onItemSelect}
                />
                {helperText && <TextFieldHelper>{helperText}</TextFieldHelper>}
            </StyledRoot>
        );
    },
);
