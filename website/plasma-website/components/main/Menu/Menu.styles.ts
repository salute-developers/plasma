import { BodyXS, mediaQuery } from '@salutejs/plasma-b2c';
import styled, { css } from 'styled-components';
import { accent, whitePrimary } from '@salutejs/plasma-tokens-b2c';

import { addGradient, multipleMediaQuery } from '../../../mixins';

import { classes } from './Menu.tokens';

export const MenuWrapper = styled.nav`
    position: fixed;
    top: 0.5rem;
    left: 4px;
    width: calc(100% - 2rem);
    box-sizing: border-box;
    padding: 1.5rem 3.5rem;

    backdrop-filter: blur(4rem);
    border-radius: 2rem;

    z-index: 1000;

    ${mediaQuery('XL')(css`
        padding: 1.5rem 2rem;
    `)}

    ${mediaQuery('L')(css`
        padding: 1.25rem 1.5rem;
        width: calc(100% - 1.5rem);
    `)}

    ${multipleMediaQuery(['S', 'M'])(css`
        padding: 0.75rem 1.5rem;
        width: calc(100% - 1.5rem);
    `)}
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Title = styled(BodyXS)``;

export const Icon = styled.div`
    width: var(--plasma-typo-body-xs-line-height);
    height: 100%;
    display: flex;

    transition: color 0.3s;
`;

export const Item = styled.li`
    height: 1rem;
    color: ${whitePrimary};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;

    cursor: pointer;

    &.${classes.removeItemHover} {
        cursor: default;
        pointer-events: none;
    }

    &:not(.${classes.removeItemHover}):hover {
        & ${Title} {
            ${addGradient};
        }

        & ${Icon} {
            color: ${accent};
        }
    }
`;
