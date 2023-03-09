import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';

import { DropdownUncontrolled, DropdownUncontrolledProps } from './DropdownUncontrolled';
import type { OnItemSelect } from './Dropdown.types';
import { applyDropdownListCssProperties } from './DropdownList';
import type { DropdownListCssProperties } from './DropdownList';

export interface DropdownProps
    extends Omit<DropdownUncontrolledProps, 'isOpen' | 'hoverIndex'>,
        DropdownListCssProperties {
    /**
     * Закрыть выпадающий список после выбора.
     */
    closeOnSelect?: boolean;
    /**
     * Обработчик клика по item.
     * @deprecated Будет удалено в v2.0, используйте onItemSelect.
     */
    onItemClick?: OnItemSelect;
}

const StyledDropdownUncontrolled = styled(DropdownUncontrolled)`
    ${applyDropdownListCssProperties};
`;

/**
 * Выпадающий список без внешнего контроля видимости.
 */
export const Dropdown: FC<DropdownProps> = ({
    disabled,
    closeOnSelect = true,
    onItemClick,
    onToggle: onToggleExternal,
    onItemSelect: onItemSelectExternal,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = useCallback<NonNullable<DropdownUncontrolledProps['onToggle']>>(
        (newIsOpen, event) => {
            setIsOpen(newIsOpen);
            onToggleExternal?.(newIsOpen, event);
        },
        [onToggleExternal, disabled],
    );

    const onItemSelect = useCallback<NonNullable<DropdownUncontrolledProps['onItemSelect']>>(
        (item, event) => {
            if (closeOnSelect) {
                onToggle?.(false, event);
            }
            if (onItemSelectExternal) {
                return onItemSelectExternal(item, event);
            }
            return onItemClick?.(item, event);
        },
        [closeOnSelect, onToggle, onItemSelectExternal, onItemClick],
    );

    return (
        <StyledDropdownUncontrolled
            {...rest}
            isOpen={isOpen}
            disabled={disabled}
            onToggle={onToggle}
            onItemSelect={onItemSelect}
        />
    );
};
