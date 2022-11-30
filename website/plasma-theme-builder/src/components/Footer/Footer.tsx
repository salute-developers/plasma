import React from 'react';
import styled from 'styled-components';
import { Link } from '@salutejs/plasma-b2c';
import { primary } from '@salutejs/plasma-tokens-b2c';

import { IconGitHub, IconTelegram } from '../../icons';
import { SBSansTextMono } from '../mixins';

const StyledFooter = styled.footer`
    ${SBSansTextMono};
    margin-top: auto;
`;

const Content = styled.div`
    margin: 1rem 0;

    width: 7.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Copyright = styled.div`
    margin-top: 4rem;
`;

// TODO: https://github.com/salute-developers/plasma/issues/279
const StyledLink = styled(Link)`
    &:visited {
        color: ${primary};
    }

    &::before {
        display: none;
    }
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <Content>
                <StyledLink view="primary" target="_blank" href="https://github.com/salute-developers/plasma/">
                    GitHub
                </StyledLink>
                <IconGitHub />
            </Content>
            <Content>
                <StyledLink target="_blank" href="https://t.me/smartmarket_community">
                    Telegram
                </StyledLink>
                <IconTelegram />
            </Content>
            <Copyright>©2022 Девайсы</Copyright>
        </StyledFooter>
    );
};
