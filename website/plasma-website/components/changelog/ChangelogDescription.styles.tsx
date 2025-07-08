import React from 'react';
import styled from 'styled-components';
import { BodyM } from '@salutejs/plasma-b2c';

const StyledBodyM = styled(BodyM)`
    padding-bottom: 12px;

    color: rgba(255, 255, 255, 0.96);
    line-height: 24px;
    opacity: 0.8;

    white-space: break-spaces;
`;

export const ChangelogDescription = ({ description }: { description: string }) => {
    return <StyledBodyM bold={false}>{description.charAt(0).toUpperCase() + description.slice(1)}</StyledBodyM>;
};
