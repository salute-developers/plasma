import React, { PropsWithChildren, useCallback, useState, FC } from 'react';
import styled from 'styled-components';

import { Tooltip } from '../Tooltip';

import { TooltipItem } from './types';

const StyledTooltip = styled(Tooltip)`
    display: block;
`;

export interface PreviewGalleryItemWithTooltipProps {
    tooltip?: TooltipItem;
}

export const PreviewGalleryItemWithTooltip: FC<PropsWithChildren<PreviewGalleryItemWithTooltipProps>> = ({
    children,
    tooltip,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onMouseOver = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onMouseOut = useCallback(() => {
        setIsOpen(false);
    }, []);

    return tooltip ? (
        <StyledTooltip
            onDismiss={onMouseOut}
            onMouseOver={onMouseOver}
            onFocus={onMouseOver}
            onMouseOut={onMouseOut}
            onBlur={onMouseOut}
            opened={isOpen}
            {...tooltip}
        >
            {children}
        </StyledTooltip>
    ) : (
        <>{children}</>
    );
};
