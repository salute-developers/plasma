import { TextS } from '@salutejs/plasma-b2c';
import { secondary, whitePrimary } from '@salutejs/plasma-tokens-b2c';
import styled, { css } from 'styled-components';
import { general } from '@salutejs/plasma-colors';

import { addGradient } from '../../../mixins';
import { removeGradient } from '../../../mixins/addGradient';

export const Title = styled(TextS)`
    white-space: nowrap;
`;

export const IconContentWrapper = styled.div`
    width: var(--plasma-typo-text-s-line-height);
    height: 100%;
    display: flex;

    transition: color 0.3s;
`;

export const ContentLeftWrapper = styled(IconContentWrapper)``;
export const ContentRightWrapper = styled(IconContentWrapper)``;

export const LinkItemWrapper = styled.a<{ isMeta?: boolean }>`
    height: 1rem;
    width: fit-content;
    color: ${whitePrimary};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;

    cursor: ${({ isMeta }) => (isMeta ? 'default' : 'pointer')};
    color: ${({ isMeta }) => (isMeta ? `${secondary}` : `${whitePrimary}`)};

    &:hover {
        text-decoration: none;

        & ${Title} {
            ${({ isMeta }) =>
                isMeta
                    ? css`
                          ${removeGradient}
                      `
                    : css`
                          ${addGradient}
                      `};
        }

        & ${ContentRightWrapper} {
            color: ${general.electricBlue['600']};
        }
    }
`;
