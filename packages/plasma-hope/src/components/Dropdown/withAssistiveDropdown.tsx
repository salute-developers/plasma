import React, { useState, useRef, useCallback, useEffect, useMemo, forwardRef } from 'react';
import type { ComponentType, ForwardRefExoticComponent } from 'react';

import { DropdownUncontrolled, DropdownUncontrolledProps } from './DropdownUncontrolled';
import { useKeyboardNavigation, INITIAL_INDEX } from './keyboardNavigation';
import { OnIndexChange, OnItemSelect } from './Dropdown.types';
import { DropdownPopoverProps } from './DropdownPopover';

export interface WithAssistiveDropdownProps
    extends Pick<
        DropdownUncontrolledProps,
        'id' | 'items' | 'placement' | 'trigger' | 'disabled' | 'onToggle' | 'onItemSelect'
    > {
    /**
     * WAI-ARIA role меню в выпадающем списке.
     */
    menuRole?: string;
    /**
     * WAI-ARIA role элемента меню в выпадающем списке.
     */
    menuItemRole?: string;
    /**
     * Закрыть выпадающий список после выбора.
     */
    closeOnSelect?: boolean;
    /**
     * Обработчик изменения активного индекса элемента,
     * на который встали клавиатурной навигацией и который нужно подсветить.
     */
    onIndexChange?: (index: number) => void;
}

/**
 * Декорирует переданный компонент, выводя доступный dropdown.
 */
export const withAssistiveDropdown = <P extends object>(
    Component: ComponentType<P> | ForwardRefExoticComponent<P>,
    Dropdown: ComponentType<DropdownUncontrolledProps> = DropdownUncontrolled,
) =>
    forwardRef<HTMLButtonElement, P & WithAssistiveDropdownProps>(
        (
            {
                id,
                items,
                placement,
                trigger,
                disabled,
                menuRole,
                menuItemRole,
                closeOnSelect = true,
                onToggle: onToggleExternal,
                onItemSelect: onItemSelectExternal,
                onIndexChange: onIndexChangeExternal,
                ...rest
            },
            ref,
        ) => {
            const [isOpen, setIsOpen] = useState(false);
            const [index, setIndex] = useState(INITIAL_INDEX);
            const openingMethod = useRef<string | null>(null);
            const activeIndex = useMemo(() => items.findIndex((item) => item.isActive), [items]);

            const onToggle = useCallback<NonNullable<DropdownPopoverProps['onToggle']>>(
                (newIsOpen, event) => {
                    if (newIsOpen) {
                        openingMethod.current = event.type;
                    }
                    setIsOpen(newIsOpen);
                    onToggleExternal?.(newIsOpen, event);
                },
                [onToggleExternal],
            );

            const onItemSelect = useCallback<OnItemSelect>(
                (item, event) => {
                    if (item.isDisabled) {
                        return;
                    }

                    if (closeOnSelect) {
                        onToggle?.(false, event);
                    }

                    onItemSelectExternal?.(item, event);
                },
                [onToggle, onItemSelectExternal, closeOnSelect],
            );

            const onIndexChange = useCallback<OnIndexChange>(
                (i) => {
                    setIndex(i);
                    onIndexChangeExternal?.(i);
                },
                [onIndexChangeExternal],
            );

            const onBlur = useCallback(() => {
                if (openingMethod.current === 'keydown') {
                    setIsOpen(false);
                    setIndex(INITIAL_INDEX);
                }
            }, []);

            const onHover = useCallback((newIndex: number) => {
                setIndex(newIndex);
            }, []);

            const onMouseLeave = useCallback(() => {
                setIndex(-1);
            }, []);

            const { onKeyDown } = useKeyboardNavigation({
                items,
                isOpen,
                index,
                onToggle,
                onItemSelect,
                onIndexChange,
            });

            useEffect(() => {
                setIndex(activeIndex);
            }, [activeIndex]);

            useEffect(() => {
                if (!isOpen) {
                    onIndexChange?.(activeIndex === -1 ? INITIAL_INDEX : activeIndex);
                }
            }, [isOpen, onIndexChange, activeIndex]);

            return (
                <Dropdown
                    id={id}
                    role={menuRole}
                    itemRole={menuItemRole}
                    aria-labelledby={id ? `${id}-disclosure` : undefined}
                    isOpen={isOpen}
                    items={items}
                    placement={placement}
                    trigger={trigger}
                    disabled={disabled}
                    hoverIndex={index}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    onToggle={onToggle}
                    onItemSelect={onItemSelect}
                    onHover={onHover}
                    onMouseLeave={onMouseLeave}
                >
                    <Component
                        {...(rest as P)}
                        ref={ref}
                        id={id ? `${id}-disclosure` : undefined}
                        isOpen={isOpen}
                        disabled={disabled}
                        aria-activedescendant={id && index >= 0 ? `${id}-item-${index}` : undefined}
                        aria-controls={id}
                        aria-expanded={isOpen}
                        aria-haspopup={menuRole}
                    />
                </Dropdown>
            );
        },
    );
