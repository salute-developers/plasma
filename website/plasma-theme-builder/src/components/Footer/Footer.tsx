import React from 'react';
import styled from 'styled-components';
import { Link, TextS } from '@salutejs/plasma-b2c';
import { secondary, linkHover, primary } from '@salutejs/plasma-tokens-b2c';

import { IconGitHub } from '../../icons';
import { SBSansTextMono } from '../mixins';

const Root = styled(TextS)`
    ${SBSansTextMono};

    position: relative;
`;

const GitHubLink = styled.div`
    display: flex;
    height: 3rem;

    margin-bottom: 2rem;
    margin-top: 5rem;
`;

// TODO: https://github.com/salute-developers/plasma/issues/279
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;

    color: ${primary};

    &:visited {
        color: ${primary};
    }

    &:hover,
    &:active,
    &:visited:active {
        color: ${linkHover};
    }

    &::before {
        display: none;
    }
`;

const StyledIconGitHub = styled(IconGitHub)`
    padding-left: 0.5rem;
`;

const CopyrightText = styled.span`
    color: ${secondary};
`;

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Root>
            <GitHubLink>
                <StyledLink href="https://github.com/salute-developers/plasma">
                    GitHub
                    <StyledIconGitHub />
                </StyledLink>
            </GitHubLink>
            <CopyrightText>{`©${currentYear} СалютДевайсы`}</CopyrightText>
        </Root>
    );
};
