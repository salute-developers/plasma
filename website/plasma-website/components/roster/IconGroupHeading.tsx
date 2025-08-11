import React, { forwardRef } from 'react';
import styled from 'styled-components';

import type { IconGroup } from '../../types';

type IconGroupHeadingProps = IconGroup & { count: number };

const StyledIconGroupHeading = styled.div`
    display: flex;
    column-gap: 0.5rem;
    margin-bottom: 1rem;
`;

const StyledCommonTitle = styled.span`
    font-size: 0.75rem;
    line-height: 0.875rem;
`;

const StyledTitle = styled(StyledCommonTitle)`
    color: rgba(255, 255, 255, 0.56);
`;

const StyledSubtitle = styled(StyledCommonTitle)`
    color: rgba(255, 255, 255, 0.28);
`;

export const IconGroupHeading = forwardRef<HTMLDivElement, IconGroupHeadingProps>(
    ({ title, subtitle, count }: IconGroupHeadingProps, ref) => {
        return (
            <StyledIconGroupHeading ref={ref}>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
                <StyledSubtitle>{count}</StyledSubtitle>
            </StyledIconGroupHeading>
        );
    },
);
