import styled, { css } from 'styled-components';
import { BodyS } from '@salutejs/plasma-b2c';
import { linkHover, primary } from '@salutejs/plasma-tokens-b2c';

import { Telegram as IconTelegram } from '../icons/Telegram';
import { TelegramInversion as IconTelegramInversion } from '../icons/TelegramInversion';
import { addGradient, multipleMediaQuery } from '../../mixins';

import { Link } from './Menu';

const Root = styled(BodyS)`
    box-sizing: border-box;
    display: inline-flex;

    width: auto;
    padding: 0.5rem;

    border: 0.063rem solid ${primary};
    border-radius: 2rem;
    border-top-right-radius: 0;

    transition: opacity 0.2s ease-in;
`;

const StyledIconTelegram = styled(IconTelegram)``;

const StyledIconTelegramInversion = styled(IconTelegramInversion)`
    display: none;
`;

const StyledResponsiveIcon = styled.div`
    display: flex;
    margin-left: 0.5rem;

    ${multipleMediaQuery(['M', 'L', 'S'])(css`
        ${StyledIconTelegram} {
            display: none;
        }

        ${StyledIconTelegramInversion} {
            display: inline;
        }
    `)}
`;

const StyledLink = styled(Link)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* TODO: https://github.com/salute-developers/plasma/issues/279 */
    &:visited {
        color: ${primary};
    }

    &:hover {
        ${StyledResponsiveIcon} {
            transition: color 0.3s;
            color: ${linkHover};
        }

        ${addGradient};
    }
`;

interface SupportTooltipProps {
    href?: string;
}

export const SupportTooltip = ({ href, ...props }: SupportTooltipProps) => (
    <Root {...props}>
        <StyledLink as="a" target="_blank" href={href}>
            — Я просто спросить
            <StyledResponsiveIcon>
                <StyledIconTelegram />
                <StyledIconTelegramInversion />
            </StyledResponsiveIcon>
        </StyledLink>
    </Root>
);
