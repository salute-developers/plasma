import React, { forwardRef, SyntheticEvent, useState } from 'react';
import type { DropdownNodeType, DropdownProps } from '@salutejs/plasma-hope';

import { DropdownUncontrolled } from '../index';

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
    ({ closeOnSelect = true, onToggle, onItemClick, onItemSelect, ...rest }, ref) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleToggle = (currentState: boolean, event: Event | SyntheticEvent<Element, Event>): void => {
            setIsOpen(currentState);

            if (onToggle) {
                onToggle(currentState, event);
            }
        };

        const handleClick = (item: DropdownNodeType, event: SyntheticEvent): void => {
            if (onItemClick) {
                onItemClick(item, event);
            }

            if (onItemSelect) {
                onItemSelect(item, event);
            }

            if (closeOnSelect) {
                setIsOpen(false);
            }
        };

        return (
            <DropdownUncontrolled
                {...rest}
                ref={ref}
                isOpen={isOpen}
                onToggle={handleToggle}
                closeOnSelect={closeOnSelect}
                handleClick={handleClick}
                onGlobalClose={() => setIsOpen(false)}
            />
        );
    },
);
