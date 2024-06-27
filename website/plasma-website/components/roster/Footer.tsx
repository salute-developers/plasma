import React from 'react';
import styled, { css } from 'styled-components';
import { TextS } from '@salutejs/plasma-b2c';
import { secondary } from '@salutejs/plasma-tokens-b2c';

import { multipleMediaQuery } from '../../mixins';
import { IconGitHub, MainCommunityMenu } from '../index';

const community = [
    {
        title: 'GitHub',
        contentLeft: <IconGitHub />,
        href: 'https://github.com/salute-developers/plasma',
    },
];

const currentYear = new Date().getFullYear();

const StyledFooter = styled.footer`
    padding: 0 4rem 2rem;

    ${multipleMediaQuery(['M'])(css`
        padding-right: 3.5rem;
        padding-left: 3.5rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        padding-right: 1rem;
        padding-left: 1rem;
    `)}
`;

const StyledMainCommunityMenu = styled(MainCommunityMenu)`
    margin-bottom: 1.5rem;
    margin-top: 3.5rem;
`;

const CopyrightText = styled(TextS)`
    color: ${secondary};
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledMainCommunityMenu items={community} />
            <CopyrightText>{`©${currentYear} СалютДевайсы`}</CopyrightText>
        </StyledFooter>
    );
};
