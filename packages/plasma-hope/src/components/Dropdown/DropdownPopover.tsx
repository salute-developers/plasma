import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { Popover, PopoverProps } from '../Popover';

export interface DropdownPopoverProps extends PopoverProps {
    /**
     * Отступ сверху.
     * @deprecated
     */
    offsetTop?: string | number;
}

/**
 * Popover с внешним контролем над видимостью через props: `isOpen` и `onToggle`.
 */
export const DropdownPopover = styled(Popover)<DropdownPopoverProps>`
    & & {
        width: 100%;

        --plasma-popup-width: var(--plasma-popup-nested-width);
        --plasma-popup-padding: var(--plasma-popup-nested-padding);
        --plasma-popup-margin: var(--plasma-popup-nested-margin);
    }

    ${({ offsetTop }) =>
        offsetTop !== undefined &&
        css`
            --plasma-popup-padding: ${offsetTop} 0 0;
        `}
`;

/**
 * Popover, не требующий внешнего контроля над видимостью.
 */
export const DropdownSelfControlledPopover: FC<Omit<DropdownPopoverProps, 'isOpen' | 'onToggle'>> = ({ ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);

    return <DropdownPopover {...rest} isOpen={isOpen} onToggle={(is: boolean) => setIsOpen(is)} />;
};
