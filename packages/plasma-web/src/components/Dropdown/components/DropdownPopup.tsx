import React, { forwardRef } from 'react';
import { DropdownPopupProps } from '@salutejs/plasma-hope';
import { component, dropdownOldConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DropdownOld.config';

const mergedConfig = mergeConfig(dropdownOldConfig, config);
const DropdownNewHope = component(mergedConfig);

export const DropdownPopup = forwardRef<HTMLDivElement, DropdownPopupProps>((props, ref) => {
    const { trigger, children, isOpen, disclosure, onToggle, placement, offsetTop, ...rest } = props;

    const offsetAtTop = typeof offsetTop === 'number' ? offsetTop : 0;

    return (
        <DropdownNewHope
            {...rest}
            ref={ref}
            onToggle={onToggle}
            target={disclosure}
            opened={isOpen}
            trigger={trigger}
            placement={placement}
            offset={[offsetAtTop, 0]}
        >
            {children}
        </DropdownNewHope>
    );
});
