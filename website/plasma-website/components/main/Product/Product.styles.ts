import { DsplM } from '@salutejs/plasma-b2c';
import { accent, whitePrimary } from '@salutejs/plasma-tokens-b2c';
import styled, { css } from 'styled-components';

import { addGradient, multipleMediaQuery } from '../../../mixins';

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

export const Title = styled(DsplM)`
    color: ${whitePrimary};
    padding-left: 4rem;

    ${multipleMediaQuery(['M', 'S'])(css`
        padding-left: 3.5rem;
    `)}
`;

export const Icon = styled.div`
    width: var(--plasma-typo-dspl-m-line-height);
    height: 100%;
    display: flex;
    opacity: 0;

    transition: color 0.3s;
`;

export const ProductMainInfo = styled.a<{ alwaysShowIcon?: boolean }>`
    height: 5.75rem;

    cursor: pointer;
    text-decoration: none;
    color: ${whitePrimary};
    white-space: nowrap;

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;

    ${multipleMediaQuery(['M'])(css`
        height: 4.75rem;
        gap: 0.5rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        height: 3.5rem;
    `)}

    ${({ alwaysShowIcon }) =>
        alwaysShowIcon &&
        css`
            & ${Icon} {
                opacity: 1;
            }
        `}

    &:hover {
        text-decoration: none;

        & ${Title} {
            ${addGradient};
        }

        & ${Icon} {
            color: ${accent};
            opacity: 1;
        }
    }
`;

export const ProductAdditionalInfo = styled.div`
    display: flex;
    gap: 1rem;

    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    padding: 0 4rem;

    ${multipleMediaQuery(['M', 'S'])(css`
        padding-left: 3.5rem;
    `)}
`;
