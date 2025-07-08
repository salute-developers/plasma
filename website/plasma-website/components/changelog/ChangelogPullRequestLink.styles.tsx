import React from 'react';
import styled from 'styled-components';
import { TextXS } from '@salutejs/plasma-b2c';
import { IconArrowDiagRightUp } from '@salutejs/plasma-icons';

const StyledIconArrowDiagRightUp = styled(IconArrowDiagRightUp)`
    margin-top: 2px;

    width: 0.8rem;
    height: 0.8rem;
    flex: 0 0 0.8rem;

    color: rgba(255, 255, 255, 0.28);
`;

const StyledLink = styled.a`
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    height: 24px;

    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.28);

    text-decoration: none;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        border-color: rgba(255, 255, 255, 1);

        ${StyledIconArrowDiagRightUp} {
            color: rgba(255, 255, 255, 1);
        }
    }
`;

const ChangelogPrID = styled(TextXS)`
    padding-right: 4px;
    line-height: 14px;
    color: #fff;
`;

export const ChangelogPullRequestLink = ({ id, href }: { id: string; href?: string }) => {
    return (
        <StyledLink href={href} target="_blank" rel="noopener noreferrer">
            <ChangelogPrID>pr-{id}</ChangelogPrID>
            <StyledIconArrowDiagRightUp color="inherit" size="xs" />
        </StyledLink>
    );
};
