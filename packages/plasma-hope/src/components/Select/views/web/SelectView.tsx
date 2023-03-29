import React, { forwardRef } from 'react';
import { TextFieldRoot, TextFieldHelper } from '@salutejs/plasma-core';
import styled from 'styled-components';

import { withAssistiveDropdown } from '../../../Dropdown';
import { SelectDropdown as BaseDropdown } from '../../SelectDropdown';
import { SelectButton as BaseButton, SelectRefElement } from '../../SelectButton';
import { SelectViewProps } from '../../SelectView';

const SelectDropdown = styled(BaseDropdown).attrs({ design: 'web' })``;
const SelectButton = styled(BaseButton).attrs({ design: 'web' })``;

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
            <TextFieldRoot
                id={id}
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
            </TextFieldRoot>
        );
    },
);
