import React, { PropsWithChildren, useCallback, useState } from 'react';
import styled from 'styled-components';

import { Tooltip } from '../Tooltip';

import { TooltipItem } from './types';

const StyledTooltip = styled(Tooltip)`
    display: block;
`;

export interface PreviewGalleryItemWithTooltipProps {
    tooltip?: TooltipItem;
}

export const PreviewGalleryItemWithTooltip: React.FC<PropsWithChildren<PreviewGalleryItemWithTooltipProps>> = ({
    children,
    tooltip,
}) => {
    const [visible, setVisible] = useState(false);

    const onMouseOver = useCallback(() => {
        setVisible(true);
    }, []);

    const onMouseOut = useCallback(() => {
        setVisible(false);
    }, []);

    return tooltip ? (
        <StyledTooltip
            onDismiss={onMouseOut}
            onMouseOver={onMouseOver}
            onFocus={onMouseOver}
            onMouseOut={onMouseOut}
            onBlur={onMouseOut}
            isVisible={visible}
            {...tooltip}
        >
            {children}
        </StyledTooltip>
    ) : (
        <>{children}</>
    );
};
